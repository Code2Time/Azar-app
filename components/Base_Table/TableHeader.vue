<template>
	<thead>
	  <tr>
		<th v-for="header in headers" :key="header.value">
		  <div class="header-container">
			<div class="header-title">{{ header.text }}</div>
			<v-text-field
			  v-if="header.searchable"
			  v-model="header.searchValue"
			  @input="onSearch(header.value, $event)"
			  dense
			  outlined
			  single-line
			  hide-details
			  class="search-field"
			  placeholder="جستجو..."
			/>
		  </div>
		</th>
	  </tr>
	</thead>
  </template>
  
  <script>
  export default {
	props: {
	  headers: {
		type: Array,
		required: true
	  }
	},
	methods: {
	  onSearch(column, value) {
		this.$emit('search', { column, value })
	  }
	}
  }
  </script>
  
  <style scoped>
  .header-container {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 8px;
  }
  
  .header-title {
	font-weight: 500;
  }
  
  .search-field {
	margin: 0;
  }
  
  .search-field >>> .v-input__control {
	min-height: 36px !important;
  }
  
  .search-field >>> .v-input__slot {
	margin-bottom: 0 !important;
  }
  </style>