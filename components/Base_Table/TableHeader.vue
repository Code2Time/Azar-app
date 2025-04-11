<template>
	<v-card-title
		class="px-2 py-1 dark-blue-header justify-center align-center"
		dir="rtl"
	>
		<div
			class="d-flex align-center justify-center"
			style="overflow-x: auto; white-space: nowrap; gap: 12px"
		>
			<div class="d-flex align-center" style="gap: 12px">
				<!-- دکمه جستجو -->
				<Button
					:value="$i18n.t('Base_Table.Search')"
					@click="handleButtonSearch"
					:loading="searchLoading"
					:disabled="isSearchDisabled"
					class="ml-2"
				/>

				<!-- فیلتر محصول -->
				<ProductFilter v-model="productFilter" />
			</div>

			<!-- Datepicker ها -->
			<!-- <template v-for="header in headers">
				<div
					v-if="header.isDate"
					:key="header.value"
					class="d-flex align-center"
					style="gap: 8px"
				>
					<v-menu
						v-model="datePickers[header.value].fromMenu"
						:close-on-content-click="false"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="formattedDates[header.value].from"
								:label="`از ${header.text}`"
								prepend-icon="mdi-calendar"
								readonly
								clearable
								v-bind="attrs"
								v-on="on"
								@click:clear="clearDate(header.value, 'from')"
								style="min-width: 150px"
								dense
							></v-text-field>
						</template>
						<v-date-picker
							v-model="internalDates[header.value].from"
							type="date"
							locale="fa"
							:max="internalDates[header.value].to"
							@input="handleDateInput(header.value, 'from')"
						></v-date-picker>
					</v-menu>

					<v-menu
						v-model="datePickers[header.value].toMenu"
						:close-on-content-click="false"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="formattedDates[header.value].to"
								:label="`تا ${header.text}`"
								prepend-icon="mdi-calendar"
								readonly
								clearable
								v-bind="attrs"
								v-on="on"
								@click:clear="clearDate(header.value, 'to')"
								style="min-width: 150px"
								dense
							></v-text-field>
						</template>
						<v-date-picker
							v-model="internalDates[header.value].to"
							type="date"
							locale="fa"
							:min="internalDates[header.value].from"
							@input="handleDateInput(header.value, 'to')"
						></v-date-picker>
					</v-menu>
				</div>
			</template> -->

			<!-- فیلدهای جستجو -->
			<template v-for="header in headers">
				<div
					v-if="
						header.value !== 'avatar'  && header.searchable
					"
					:key="header.value"
					class="d-flex align-center"
					style="min-width: 180px"
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
			</template>
		</div>
	</v-card-title>
</template>

<script>
import Input from '../Common/Input.vue'
import Button from '../Common/Button.vue'
import ProductFilter from '../Filters/ProductSort.vue'
export default {
	name: 'TableHeader',
	components: {
		Input,
		Button,
		ProductFilter,
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
}
</script>

<style scoped>
.select-container {
	display: flex;
	justify-content: center; /* وسط چین افقی */
	align-items: center; /* وسط چین عمودی (اختیاری) */
	width: 100%;
}
.dark-blue-header {
	background-color: #666a6f7b;
	border-radius: 4px 4px 0 0;
	overflow-x: auto;
}

/* اسکرول بار سفارشی */
.dark-blue-header::-webkit-scrollbar {
	height: 6px;
}
.dark-blue-header::-webkit-scrollbar-track {
	background: #f1f1f1;
}
.dark-blue-header::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 3px;
}
.dark-blue-header::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.date-input {
	min-width: 150px;
}

@media (max-width: 960px) {
	.date-input {
		min-width: 130px;
	}
}
</style>
