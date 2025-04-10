<template>
	<v-card-title class="px-2 py-1 dark-blue-header justify-center align-center" dir="rtl">
		<div
			class="d-flex align-center justify-center"
			style="overflow-x: auto; white-space: nowrap; gap: 12px"
		>
			<div class="d-flex align-center" style="gap: 12px">
				<!-- دکمه جستجو -->
				<Button
					:value="$i18n.t('Base_Table.Search')"
					@click="handleSearch"
					:loading="searchLoading"
					:disabled="isSearchDisabled"
					class="ml-2"
				/>

				<!-- فیلتر محصول -->
				<ProductFilter v-model="productFilter" />
			</div>

			<!-- Datepicker ها -->
			<template v-for="header in headers">
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
			</template>

			<!-- فیلدهای جستجو -->
			<template v-for="header in headers">
				<div
					v-if="
						header.value !== 'avatar' && !header.isDate && header.searchable
					"
					:key="header.value"
					class="d-flex align-center"
					style="min-width: 180px"
				>
					<Input
						v-model="searchValues[header.value]"
						:label="header.text"
						@enter="handleSearch"
						dir="ltr"
						dense
						style="width: 100%"
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
import moment from 'moment-jalaali'

export default {
	name: 'TableHeader',
	components: { Input, Button, ProductFilter },
	props: {
		headers: {
			type: Array,
			required: true,
			validator: (headers) => {
				return headers.every(
					(header) =>
						header.value &&
						typeof header.text === 'string' &&
						(typeof header.searchable === 'boolean' ||
							typeof header.isDate === 'boolean')
				)
			},
		},
		initialSearchValues: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		const datePickers = {}
		const internalDates = {}
		const formattedDates = {}
		const searchValues = { ...this.initialSearchValues }

		this.headers.forEach((header) => {
			if (header.isDate) {
				datePickers[header.value] = { fromMenu: false, toMenu: false }
				internalDates[header.value] = { from: null, to: null }
				formattedDates[header.value] = { from: '', to: '' }
			}
		})

		return {
			searchLoading: false,
			productFilter: null,
			datePickers,
			internalDates,
			formattedDates,
			searchValues,
		}
	},
	computed: {
		isSearchDisabled() {
			const hasTextSearch = Object.values(this.searchValues).some(
				(val) => val && val.trim()
			)
			const hasDateSearch = Object.values(this.internalDates).some(
				(date) => date.from || date.to
			)
			const hasProductFilter = !!this.productFilter

			return !(hasTextSearch || hasDateSearch || hasProductFilter)
		},
	},
	methods: {
		handleSearch() {
			this.searchLoading = true

			const filters = {
				...this.prepareDateFilters(),
				...this.prepareTextFilters(),
				product: this.productFilter,
			}

			this.$emit('selected_date', { filters })

			setTimeout(() => {
				this.searchLoading = false
			}, 500)
		},

		prepareDateFilters() {
			const dateFilters = {}

			this.headers.forEach((header) => {
				if (header.isDate) {
					const from = this.internalDates[header.value].from
					const to = this.internalDates[header.value].to

					if (from || to) {
						dateFilters[header.value] = {
							op: 'between',
							from: from ? this.convertToGregorian(from) + ' 00:00:00' : null,
							to: to ? this.convertToGregorian(to) + ' 23:59:59' : null,
						}
					}
				}
			})

			return dateFilters
		},

		handleDateInput(field, type) {
			const date = this.internalDates[field][type]
			this.formattedDates[field][type] = date
				? moment(date).locale('fa').format('jYYYY/jMM/jDD')
				: ''
			this.datePickers[field][`${type}Menu`] = false
		},

		clearDate(field, type) {
			this.internalDates[field][type] = null
			this.formattedDates[field][type] = ''
		},

		convertToGregorian(persianDate) {
			return moment(persianDate).format('YYYY-MM-DD')
		},

		prepareTextFilters() {
			const textFilters = {}

			this.headers.forEach((header) => {
				if (header.searchable && this.searchValues[header.value]) {
					textFilters[header.value] = this.searchValues[header.value]
				}
			})

			return textFilters
		},
	},
	watch: {
		initialSearchValues: {
			handler(newVal) {
				this.searchValues = { ...newVal }
			},
			deep: true,
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
