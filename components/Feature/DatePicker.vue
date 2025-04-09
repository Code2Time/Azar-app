<template>
	<div class="date-range-picker d-flex flex-row pa-5">
		<v-menu
			v-model="startDateMenu"
			:close-on-content-click="false"
			transition="scale-transition"
			offset-y
			min-width="auto"
			class="mr-3"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-text-field
					v-model="startDateFormatted"
					label="از تاریخ"
					prepend-icon="mdi-calendar"
					readonly
					outlined
					dense
					clearable
					v-bind="attrs"
					v-on="on"
					@click:clear="clearStartDate"
				/>
			</template>
			<v-date-picker
				v-model="startDate"
				locale="fa"
				:first-day-of-week="0"
				:max="endDate"
				@input="startDateMenu = false"
			/>
		</v-menu>

		<v-menu
			v-model="endDateMenu"
			:close-on-content-click="false"
			transition="scale-transition"
			offset-y
			min-width="auto"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-text-field
					v-model="endDateFormatted"
					label="تا تاریخ"
					prepend-icon="mdi-calendar"
					readonly
					outlined
					dense
					clearable
					v-bind="attrs"
					v-on="on"
					@click:clear="clearEndDate"
				/>
			</template>
			<v-date-picker
				v-model="endDate"
				locale="fa"
				:first-day-of-week="0"
				:min="startDate"
				@input="handleEndDateSelection"
			/>
		</v-menu>
	</div>
</template>

<script>
export default {
	name: 'DateRangePicker',
	data() {
		return {
			startDate: null,
			endDate: null,
			startDateMenu: false,
			endDateMenu: false,
		}
	},
	computed: {
		startDateFormatted() {
			return this.formatDate(this.startDate)
		},
		endDateFormatted() {
			return this.formatDate(this.endDate)
		},
		isDateRangeValid() {
			return this.startDate && this.endDate
		},
	},
	methods: {
		applyDateRange() {
			if (this.isDateRangeValid) {
				this.setDateRange({
					startDate: this.startDate,
					endDate: this.endDate,
				})
			}
		},

		clearStartDate() {
			this.startDate = null
			this.clearDateRange()
		},

		clearEndDate() {
			this.endDate = null
			this.clearDateRange()
		},
		formatDate(date) {
			if (!date) return ''
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('fa-IR', options)
		},
		clearStartDate() {
			this.startDate = null
		},
		clearEndDate() {
			this.endDate = null
		},
		handleEndDateSelection() {
			this.endDateMenu = false
			if (this.isDateRangeValid) {
				this.applyDateRange()
			}
		},
		applyDateRange() {
			console.log('بازه زمانی انتخاب شده:', {
				from: this.startDate,
				to: this.endDate,
			})
		},
	},
}
</script>

<style scoped>
.date-range-picker {
	width: 100%;
	gap: 20px;
	align-items: center;
	justify-content: center;
}

@media (max-width: 600px) {
	.date-range-picker {
		flex-direction: column;
		align-items: stretch;
	}
}
</style>
