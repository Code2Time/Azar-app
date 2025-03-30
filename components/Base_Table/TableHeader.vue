<template>
	<thead>
		<tr>
			<th v-for="header in headers" :key="header.value">
				{{ header.text }}
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	props: {
		headers: {
			type: Array,
		},
	},
}
</script>

<style scoped>
/* استایل های مربوط به Header در اینجا */
</style>
