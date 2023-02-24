<template>
  <div class="q-pa-md">
    <q-table
      title="預約管理"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left"><q-btn label="刪除"/></div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <h4 class="text-center">我要預約</h4>
    <div class="q-pa-md text-center">
      <q-input outlined v-model="form.name" placeholder="姓名" hint="姓名" :dense="dense" />
    <q-input outlined v-model="form.member" placeholder="人數" hint="人數" :dense="dense" />
    <q-select v-model="form.time" :options="options" label="時間" />
    <q-btn @click="submit" label="預約" color="primary" class="q-mt-xl"/></div>
</div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from 'src/stores/user'
const user = useUserStore()
const form = reactive({
  name: '',
  member: '',
  time: ''
})
const dense = ref(false)

const options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
const submit = async () => {
  try {
    console.log('asd')
  } catch (error) {
    console.log('asdf')
  }
}
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
    title: user.name,
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
