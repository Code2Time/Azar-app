<template>
  <v-data-table class="elevation-1" :headers="headers" :items="items" :items-per-page="5">
    <table>
      <TableHeader :headers="headers" />
      <TableItems :items="items" :headers="headers" />
      <TableFooter :page="page" :page-count="pageCount" @page-change="updatePage" />
    </table>
  </v-data-table>
</template>

<script>
// import components 
import TableHeader from '~/components/Base_Table/TableHeader.vue';
import TableItems from '~/components/Base_Table/TableItems.vue';
import TableFooter from '~/components/Base_Table/TableFooter.vue';

export default {
  components: {
    TableHeader,
    TableItems,
    TableFooter
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 5
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  methods: {
    updatePage(newPage) {
      this.page = newPage;
    }
  }
};
</script>

<style scoped>
</style>