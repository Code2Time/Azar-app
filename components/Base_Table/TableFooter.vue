<template>
    <tfoot>
      <tr>
        <td colspan="headers.length">
          <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="5"
            @input="onPageChange"
          ></v-pagination>
        </td>
      </tr>
    </tfoot>
  </template>
  
  <script>
  export default {
    props: {
      page: {
        type: Number,
        required: true
      },
      pageCount: {
        type: Number,
        required: true
      }
    },
    methods: {
      onPageChange(newPage) {
        this.$emit('page-change', newPage);
      }
    }
  }
  </script>
  
  <style scoped>
  </style>