<template>
  <div class="q-pa-md">
    <q-btn @click="openDialog" color="primary" outline="" class="q-m-auto" >新增公告</q-btn>
    <q-dialog v-model="showAddBulletinDialog">
    <q-card>
      <q-card-title>
        增加新公告
      </q-card-title>
      <q-card-section>
        <q-form @submit="addBulletin">
          <q-input
            v-model="form.title"
            label="標題"
            required
          />
          <q-input
            v-model="form.content"
            label="內容"
            required
          class="content"
          />
          <q-input
          type="date"
      v-model="form.startDate"
      today-btn
    />
          <q-input
          type="date"
      v-model="form.endDate"
      today-btn
    />
    <!-- <q-select outlined v-model="form.actions" :options="options" label="Outlined" /> -->
    <q-btn type="submit" label="增加公告" color="primary" />
    <q-btn label="取消" color="red" @click="showAddBulletinDialog = false" />
  </q-form>
</q-card-section>

</q-card>
</q-dialog>
<q-table
      title="公告"
      :rows="bulletins"
      :columns="columns"
      row-key="id"
      v-model:selected="selected"
      virtual-scroll
      selection="single"
    />

  </div>
  <div class="row justify-end q-ma-lg">
    <q-btn

    icon="upload"
      color="green"
    label="上架"
    @click="submitFormUp"/>

    <q-btn

    icon="file_upload_off"
      color="primary"
    label="下架"
    @click="submitFormDown"/>

    <q-btn

    icon="delete"
    color="red"
    label="刪除"
    @click="deleteBulletin"></q-btn>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'//, onMounted
import { useQuasar } from 'quasar'
import { apiAuth } from 'src/boot/axios' // api,

const $q = useQuasar()
const title = ref('')
const startDate = ref('')
const endDate = ref('')
const content = ref('')
const id = ref('')
const selected = ref([])

// const options = ['進行中', '已結束']

// -------------------------------
const form = reactive({
  // startDate: '',
  // endDate: '',
  // actions: '',
  // title: '',
  // content: ''
}
)
const columns = [
  // { name: 'id', align: 'left', label: 'id', field: 'id' },
  { name: 'title', align: 'left', label: '標題', field: 'title' },
  { name: 'content', align: 'left', label: '內容', field: 'content' },
  { name: 'startDate', align: 'center', label: '發布日期', field: 'startDate' },
  { name: 'endDate', align: 'center', label: '截止日期', field: 'endDate' },
  { name: 'actions', align: 'center', label: '狀態', field: 'actions' }
]
const bulletins = reactive([])

const showAddBulletinDialog = ref(false)
const openDialog = () => {
  showAddBulletinDialog.value = true
}

const addBulletin = async () => {
  try {
    console.log(form)
    await apiAuth.post('/bulletin/create', form)
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '公告新增成功'
    })
    title.value = ''
    content.value = ''
    showAddBulletinDialog.value = false
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_off',
      message: error.message
    })
  }
}

const getBulletins = async () => {
  try {
    const data = await apiAuth.get('/bulletin')
    console.log(data)
    let i = 0
    for (i = 0; i < data.data.result.length; i++) {
      bulletins.push({
        startDate: data.data.result[i].startDate,
        endDate: data.data.result[i].endDate,
        title: data.data.result[i].title,
        content: data.data.result[i].content,
        actions: data.data.result[i].actions,
        id: data.data.result[i]._id

      })
    }
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_off',
      message: error.message
    })
  }
}
getBulletins()

// onMounted(getBulletins)

const submitFormUp = async () => {
  try {
    const newForm = reactive({
      id: selected.value[0].id,
      title: selected.value[0].title,
      content: selected.value[0].content,
      startDate: selected.value[0].startDate,
      endDate: selected.value[0].endDate,
      actions: '進行中'
    })
    const data = await apiAuth.patch('/bulletin/check', newForm)
    console.log(data)
    bulletins.splice(0, bulletins.length)
    getBulletins()
    id.value = ''
    title.value = ''
    content.value = ''
    startDate.value = ''
    endDate.value = ''
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: error.message || '發生錯誤'

    })
  }
}
const submitFormDown = async () => {
  try {
    const newForm = reactive({
      id: selected.value[0].id,
      title: selected.value[0].title,
      content: selected.value[0].content,
      startDate: selected.value[0].startDate,
      endDate: selected.value[0].endDate,
      actions: '已結束'

    })
    const data = await apiAuth.patch('/bulletin/check', newForm)
    console.log(data)
    bulletins.splice(0, bulletins.length)
    getBulletins()
    id.value = ''
    title.value = ''
    content.value = ''
    startDate.value = ''
    endDate.value = ''
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: error.message || '發生錯誤'

    })
  }
}
const deleteBulletin = async () => {
  const result = await apiAuth.delete(`/bulletin/delete/${selected.value[0]?.id}`)
  console.log(result)
  bulletins.splice(0, bulletins.length)
  getBulletins()
}

</script>

<style>
#content{
  height: 200px;
}
</style>
