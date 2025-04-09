<template>
  <div class="Base-container pa-5">
    <BaseTable
      :headers="headers"
      :items="userItems"
      :loading="loading"
      :initial-pagination="initialPagination"
    />
  </div>
</template>

<script>
import BaseTable from '~/components/Base_Table/BaseTable.vue'
import DatePicker from '~/components/Feature/DatePicker.vue'
import Button from '~/components/Common/Button.vue'

export default {
  components: {
    DatePicker,
    BaseTable,
    Button
  },
  data() {
    return {
      loading: false,
      initialPagination: {
        page: 1,
        itemsPerPage: 5,
      },
      headers: [
        {
          text: this.$i18n.t('Base_Table.Avatar'),
          value: 'avatar',
          searchable: false,
        },
        {
          text: this.$i18n.t('Base_Table.First_Name'),
          value: 'name',
          searchable: true,
        },
        {
          text: this.$i18n.t('Base_Table.Last_Name'),
          value: 'family',
          searchable: true,
        },
        {
          text: 'status',
          value: 'status',
          searchable: true,
        },
        {
          text: this.$i18n.t('Base_Table.Phone_Number'),
          value: 'phone',
          searchable: true,
        },
      ],
      userItems: [],
      get_date: [] 
    }
  },
  async mounted() {
    await this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.loading = true
      try {
        const response = await this.$api.post('/user')
        this.userItems = response.data.data.model.data.map((user) => {
          const userDate = user.created_at
          this.get_date.push(userDate)
          
          return {
            avatar: 'https://avatar.iran.liara.run/public/18',
            status: this.formatStatus(user.status),
            name: user.first_name,
            family: user.last_name || '------',
            phone: user.username,
          }
        })
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        this.loading = false
      }
    },
    formatStatus(status) {
      const statusMap = {
        active: 'در حال کار',
        inactive: 'غیرفعال',
        pending: 'در انتظار تایید',
        banned: 'مسدود شده',
      }
      return statusMap[status] || status
    },
    formatDate(dateString) {
      if (!dateString) return ''
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('fa-IR', options)
    },
  
  }
}
</script>

<style></style>