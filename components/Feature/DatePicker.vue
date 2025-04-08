<template>
	<div>
		<v-menu
			v-model="menu"
			:close-on-content-click="false"
			transition="scale-transition"
			offset-y
			min-width="auto"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-text-field
					v-model="selectedDate"
					label="تاریخ شمسی"
					prepend-icon="mdi-calendar"
					readonly
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<v-date-picker
				v-model="selectedDate"
				locale="fa"
				:first-day-of-week="0"
			/>
		</v-menu>
		<Button 
    value="logDate"
    @click="log_date"
    />
	</div>
</template>

<script>
import Button from '../Common/Button.vue'
export default {
	components: {
		Button,
	},
	data() {
		return {
			selectedDate: null,
			menu: false,
		}
	},
	methods: {
		log_date() {
			console.log(this.selectedDate)
		},
	},
}
</script>
