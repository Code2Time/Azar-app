<template>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="header in headers" :key="header.value">
          {{ item[header.value] }}
        </td>
      </tr>
    </tbody>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      headers: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* استایل های مربوط به Items در اینجا */
  </style>