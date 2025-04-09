<template>
    <div class="product-container pa-4">
      <BaseTable
        :headers="headers"
        :items="filteredProducts"
        :loading="loading"
        :initial-pagination="initialPagination"
      />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    components : {

    },
    data() {
      return {
        loading: false,
        initialPagination: { page: 1, itemsPerPage: 6 },
        headers: [
          { text: 'img', value: 'avatar', searchable: false },
          { text: 'product', value: 'name', searchable: true },
          { text: 'price', value: 'price', searchable: true },
        ],
        rawProducts: []
      }
    },
    computed: {
      ...mapGetters('filters', ['sortedItems']),
      filteredProducts() {
        return this.sortedItems(this.rawProducts)
      }
    },
    async mounted() {
      await this.fetchProducts()
    },
    methods: {
      async fetchProducts() {
        try {
          this.loading = true
          const response = await this.$api.post('/product')
          
          this.rawProducts = response.data.data.model.data.map((item) => ({
            ...item,
            created_at: item.created_at, 
            avatar: this.getImageUrl(item.main_picture_path),
            price: `${item.base_price} $`
          }))
        } catch (error) {
          console.error('Error fetching products:', error)
        } finally {
          this.loading = false
        }
      },
      getImageUrl(path) {
        return `https://api.sehregoli.com/${path}`
      }
    }
  }
  </script>