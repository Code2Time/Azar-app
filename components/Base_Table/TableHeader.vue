<template>
	<v-card-title
	  class="px-2 py-1 dark-blue-header justify-center align-center"
	  dir="rtl"
	  style="overflow-x: auto;"
	>
	  <div class="d-flex align-center" style="gap: 20px; min-height: 56px;">
		
		<div style="flex-shrink: 0;">
		  <Button
			:value="$i18n.t('Base_Table.Search')"
			@click="handleButtonSearch"
			:loading="searchLoading"
			:disabled="isSearchDisabled"
		  />
		</div>
  
		<!-- Datepicker ها -->
		<template v-for="header in headers">
		  <div
			v-if="header.isDate"
			:key="header.value"
			class="d-flex align-center"
			style="gap: 8px; flex-shrink: 0;"
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
				  label="از تاریخ"
				  prepend-icon="mdi-calendar"
				  readonly
				  clearable
				  v-bind="attrs"
				  v-on="on"
				  @click:clear="clearDate(header.value, 'from')"
				  style="width: 100px;"
				  dense
				  hide-details
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
				  label="تا تاریخ"
				  prepend-icon="mdi-calendar"
				  readonly
				  clearable
				  v-bind="attrs"
				  v-on="on"
				  @click:clear="clearDate(header.value, 'to')"
				  style="width: 100px;"
				  dense
				  hide-details
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
  
			<v-btn
			  icon
			  color="primary"
			  @click="searchByDate(header.value)"
			  :disabled="!isDateSelected(header.value)"
			  style="flex-shrink: 0;"
			>
			  <v-icon>mdi-magnify</v-icon>
			</v-btn>
		  </div>
		</template>
  
		<!-- فیلدهای جستجو -->
		<template v-for="header in headers">
		  <div
			v-if="header.value !== 'avatar' && header.searchable && !header.isDate"
			:key="header.value"
			style="flex-shrink: 0"
		  >
			<Input
			  v-model="search[header.value]"
			  :label="header.text"
			  :hide-details="true"
			  :persistent-hint="false"
			  :single-line="true"
			  @enter="applySearch(header.value)"
			  @input="handleInputChange(header.value)"
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
import Input from '~/components/Common/Input.vue'
import Button from '~/components/Common/Button.vue'


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
		// Initialize date pickers data structure
		const datePickers = {}
		const internalDates = {}
		const formattedDates = {}

		this.headers.forEach((header) => {
			if (header.isDate) {
				datePickers[header.value] = {
					fromMenu: false,
					toMenu: false,
				}
				internalDates[header.value] = {
					from: null,
					to: null,
				}
				formattedDates[header.value] = {
					from: null,
					to: null,
				}
			}
		})

		return {
			search: { ...this.searchValues },
			lastSearchField: null,
			inputChanges: {},
			datePickers,
			internalDates,
			formattedDates,
			searchLoading: false,
		}
	},
	computed: {
		isSearchDisabled() {
			// Check if any search field has value
			return (
				!Object.values(this.search).some((val) => val) &&
				!Object.values(this.internalDates).some((date) => date.from || date.to)
			)
		},
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
		isDateSelected(field) {
			return this.internalDates[field]?.from && this.internalDates[field]?.to
		},
		handleDateInput(field, type) {
			this.datePickers[field][`${type}Menu`] = false
			this.formatDate(field, type)
		},
		formatDate(field, type) {
			if (this.internalDates[field][type]) {
				const date = new Date(this.internalDates[field][type])
				this.formattedDates[field][type] = date.toLocaleDateString('fa-IR')
			} else {
				this.formattedDates[field][type] = null
			}
		},
		clearDate(field, type) {
			this.internalDates[field][type] = null
			this.formattedDates[field][type] = null
		},
		searchByDate(field) {
			if (this.internalDates[field].from && this.internalDates[field].to) {
				const dateObj = {
					filters: {
						[field]: {
							op: 'between',
							from: this.internalDates[field].from+" 00:00:00",
							to: this.internalDates[field].to+" 00:00:00",
						},
					},
				}

				console.log('Date filter object:', dateObj)
				this.$emit('selected_date', dateObj)
			}
		},
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
					if (
						header.searchable &&
						this.search[header.value] &&
						!header.isDate
					) {
						searchResult[header.value] = this.search[header.value]
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
