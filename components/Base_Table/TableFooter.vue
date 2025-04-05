<template>
  <v-card-actions>
    <v-spacer />
    <v-pagination
      v-model="page"
      :length="totalPages"
      :total-visible="7"
      @input="handlePageChange"
    />
    <v-spacer />
  </v-card-actions>
</template>

<script>
export default {
  name: 'TableFooter',
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
  },
  methods: {
    handlePageChange(page) {
      this.$emit('update:page', page)
    },
  },
}
</script>