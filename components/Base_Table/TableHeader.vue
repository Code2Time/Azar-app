<template>
	<v-card-title class="px-2 py-1 dark-blue-header" dir="rtl">
		<v-row class="align-center justify-center" no-gutters>
			<v-col cols="6" sm="4" md="3" class="pa-1">
				<div class="d-flex align-center justify-center">
					<Button
						:value="$i18n.t('Base_Table.Search')"
						@click="handleButtonSearch"
					/>
				</div>
			</v-col>
			<template v-for="header in headers">
				<v-col
					v-if="header.value !== 'avatar'"
					:key="header.value"
					cols="6"
					sm="4"
					md="3"
					class="pa-1"
				>
					<div
						class="d-flex align-center justify-center mx-16"
						style="gap: 8px"
					>
						<Input
							v-if="header.searchable"
							v-model="search[header.value]"
							:label="header.text"
							:hide-details="true"
							:persistent-hint="false"
							:single-line="true"
							@enter="applySearch(header.value)"
							@input="handleInputChange(header.value)"
							style="width: 120px"
							class="grey-input"
							ref="searchInputs"
							dir="ltr"
						/>
					</div>
				</v-col>
			</template>
		</v-row>
	</v-card-title>
</template>

<script>
import Input from '../Common/Input.vue'
import Button from '../Common/Button.vue'

export default {
	name: 'TableHeader',
	components: {
		Input,
		Button,
	},
	props: {
		headers: {
			type: Array,
			required: true,
			validator: (headers) => {
				return headers.every(
					(header) =>
						header.value &&
						typeof header.text === 'string' &&
						typeof header.searchable === 'boolean'
				)
			},
		},
		searchValues: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			search: { ...this.searchValues },
			lastSearchField: null,
			inputChanges: {},
		}
	},
	watch: {
		searchValues: {
			handler(newVal) {
				this.search = { ...newVal }
			},
			deep: true,
		},

		search: {
			handler(newVal, oldVal) {
				const changedField = Object.keys(newVal).find(
					(key) => newVal[key] !== oldVal[key]
				)

				if (changedField && newVal[changedField]) {
					console.log(`Field ${changedField} changed to:`, newVal[changedField])
					this.lastSearchField = changedField
					this.inputChanges[changedField] = newVal[changedField]
				}
			},
			deep: true,
		},
	},
	methods: {
		applySearch(key) {
			this.lastSearchField = key
			this.$emit('update:search', { key, value: this.search[key] })
		},

		handleButtonSearch() {
			if (this.lastSearchField) {
				this.applySearch(this.lastSearchField)
			} else {
				const searchResult = {}

				this.headers.forEach((header) => {
					if (header.searchable && this.search[header.value]) {
						searchResult[header.value] = this.search[header.value]
					} else {
						console.log('Searching in all filled fields:', this.search)
					}
				})

				this.$emit('update:search', searchResult)
			}
		},

		handleInputChange(field) {
			console.log(`User typed in ${field}:`, this.search[field])
			this.lastSearchField = field
		},
	},
	mounted() {
		this.$el.querySelectorAll('.grey-input input').forEach((input) => {
			input.addEventListener('focus', (e) => {
				const headerValue = e.target
					.closest('[class*="col-"]')
					.getAttribute('key')
				this.lastSearchField = headerValue
				console.log(`Input ${headerValue} focused`)
			})
		})
	},
}
</script>

<style scoped>
.dark-blue-header {
	background-color: #666a6f7b;
	border-radius: 4px 4px 0 0;
}

@media (max-width: 600px) {
	.grey-input {
		min-width: 40px;
		max-width: 100px;
	}
}
</style>
