<template>
	<div class="custom-pagination">
	  <v-pagination
		v-model="internalPage"
		:length="totalPages"
		:total-visible="maxVisibleButtons"
		:disabled="disabled"
		:circle="circle"
		:prev-icon="prevIcon"
		:next-icon="nextIcon"
		@input="handlePageChange"
	  ></v-pagination>
	</div>
  </template>
  
  <script>
  export default {
	name: 'CustomPagination',
	
	props: {
	  value: {
		type: Number,
	  },
	  totalItems: {
		type: Number,
		required: true
	  },
	  itemsPerPage: {
		type: Number,
		default: 10
	  },
	  maxVisibleButtons: {
		type: Number,
		default: 7,
		validator: value => value >= 5 && value <= 15
	  },
	  disabled: {
		type: Boolean,
		default: false
	  },
	  circle: {
		type: Boolean,
		default: false
	  },
	  prevIcon: {
		type: String,
		default: 'mdi-chevron-left'
	  },
	  nextIcon: {
		type: String,
		default: 'mdi-chevron-right'
	  }
	},
  
	computed: {
	  totalPages() {
		return Math.ceil(this.totalItems / this.itemsPerPage)
	  },
	  internalPage: {
		get() {
		  return this.value
		},
		set(val) {
		  this.$emit('input', val)
		}
	  }
	},
  
	methods: {
	  handlePageChange(page) {
		this.$emit('page-changed', page)
	  }
	}
  }
  </script>
  
  <style scoped>
  .custom-pagination {
	margin-top: 20px;
	display: flex;
	justify-content: center;
  }
  </style>