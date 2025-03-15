<template>
	<div class="main-container">
		<v-container>
			<v-row>
				<v-col cols="6" align-self="center">
					<span class="ma-2 red--text"> a simple Select Component </span>
					<Select
						danse
						outlined
						label="Select an option"
						:items="options"
						v-model="selected_value1"
					/>
				</v-col>
				<v-col cols="6" align-self="center">
					<span class="red--text">this input just for test</span>
					<Input
						type="text"
						label="your number"
						:value="number"
						v-model="formattedNumber"
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<span class="ma-2 red--text"> a simple AutoComplate Component </span>
					<Autocompletes
						:items="options"
						label="search for a option"
						v-model="selected_value2"
						outlined
						dense
					/>
				</v-col>
			</v-row>
		</v-container>
		<v-divider />
		<v-container>
			<v-row>
				<v-col cols="12" align-self="center">
					<Button value="get data" @click="fetchData" />
				</v-col>
				<v-col>
					<ul class="d-flex">
						<li v-for="{ id, index } in user_id" :key="index" class="mx-4">
							{{ id }}
						</li>
					</ul>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<BaseTable :headers="headers" :items="items" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
// import component
import Autocompletes from '~/components/Common/Autocomplate.vue'
import BaseTable from '~/components/Feature/BaseTable.vue'
import Select from '~/components/Common/Select.vue'
import Button from '~/components/Common/Button.vue'
import Input from '~/components/Common/Input.vue'
// import isAuthenticated
import { isAuthenticated } from '~/utils/auth'
export default {
	name: 'SelectPage',
	components: {
		Select,
		Autocompletes,
		Input,
		Button,
		BaseTable,
	},
	data() {
		return {
			headers: [
				{ text: 'نام', value: 'name' },
				{ text: 'سن', value: 'age' },
				{ text: 'شغل', value: 'job' },
			],
			items: [
				{ name: 'علی', age: 25, job: 'برنامه‌نویس' },
				{ name: 'رضا', age: 30, job: 'طراح' },
				{ name: 'سارا', age: 28, job: 'مدیر پروژه' },
			],
			options: [
				{ text: 'option1', value: 1 },
				{ text: 'option2', value: 2 },
				{ text: 'option3', value: 3 },
				{ text: 'option4', value: 4 },
			],
			number: '',
			selected_value1: '',
			selected_value2: '',
			user_id: null,
		}
	},
	methods: {
		async fetchData() {
			try {
				const response = await this.$apiRequest(
					'photos?_start=0&_limit=20',
					{},
					'get'
				)
				this.user_id = response.data
			} catch (error) {
				console.error('Failed to fetch data:', error)
			}
		},
	},
	computed: {
		formattedNumber: {
			get() {
				return this.number ? Number(this.number).toLocaleString() : ''
			},
			set(value) {
				this.number = value.replace(/,/g, '')
			},
		},
	},
	mounted() {
		if (!isAuthenticated()) {
			this.$router.push('/login')
		}
	},
}
</script>
<style>
.main-container {
	width: 100%;
	height: 90vh;
}
.select-container {
	width: 50%;
	height: 50%;
	margin: 50px auto;
}
</style>
