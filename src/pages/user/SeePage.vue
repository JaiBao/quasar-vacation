<template>
  <h4 class="text-center">預約查詢</h4>
  <div class="q-pa-xl">
  <q-table
        class="my-sticky-header-table"
        title=""
        :rows="rows"
        :columns="columns"
        row-key="name"
        flat
        bordered
        hide-header
      /></div>
  </template>
<script setup>
const columns = [
  {
    name: 'time',
    required: true,
    label: 'time',
    align: 'left',
    field: (row) => row.time,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'title',
    align: 'center',
    label: 'title',
    field: 'title',
    sortable: true
  },
  {
    name: 'todo',
    align: 'center',
    label: 'todo',
    field: 'todo',
    sortable: true
  }
]

const rows = [
  {
    title: 'Frozen Yogurt',
    time: '2022,1,1',
    todo: 'icon'
  },
  {
    title: 'Frozen Yogurt',
    time: '2022,1,1',
    todo: 'icon'
  },
  {
    title: 'Frozen Yogurt',
    time: '2022,1,1',
    todo: 'icon'
  },
  {
    title: 'Frozen Yogurt',
    time: '2022,1,1',
    todo: 'icon'
  },
  {
    title: 'Frozen Yogurt',
    time: '2022,1,1',
    todo: 'icon'
  }
]
</script>
