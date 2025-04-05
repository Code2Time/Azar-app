<template>
	<v-card-title class="px-2 py-1 dark-blue-header">
		<v-row class="align-center justify-center" no-gutters>
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
						<span
							class="text-caption white--text font-weight-medium text-center"
						>
							{{ header.text }}
						</span>

						<Input
							v-if="header.searchable"
							v-model="search[header.value]"
							:placeholder="$i18n.t('Base_Table.Search')"
							:label="''"
							:hide-details="true"
							:dense="true"
							:solo="true"
							:flat="true"
							:dark="true"
							:persistent-hint="false"
							:single-line="true"
							@enter="applySearch(header.value)"
							style="width: 120px"
							class="grey-input"
						/>
					</div>
				</v-col>
			</template>

			<v-col cols="6" sm="4" md="3" class="pa-1">
				<Button :value="this.$i18n.t('Base_Table.Search')" @click="applySearch(this.search.name)" />
			</v-col>
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
			search: { ...this.searchValues }, // برای مقادیر نهایی جستجو
		}
	},
	watch: {
		searchValues: {
			handler(newVal) {
				this.search = { ...newVal }
			},
		},
	},
	methods: {
		applySearch(key) {
			// فقط زمانی که کاربر Enter میزند مقدار جستجو اعمال میشود

			this.$emit('update:search', { key, value: this.search[key] })
		},
		test() {
			console.log(this.search.name)
		},
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
