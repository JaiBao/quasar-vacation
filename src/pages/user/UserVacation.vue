<template>
  <q-page>
<div class="move">
    <q-btn @click="openDialog" color="primary" outline class="q-m-auto" >我要申請休假</q-btn>
  </div>
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <h2 class="text-h5">休假申請</h2>
          <q-form @submit="submitForm">
            <q-input
              outlined
              v-model.trim="name"
              label="名稱"
              :rules="[val => !!val===user.name || '此欄位為必填']"
            readonly
            />
            <q-select
              outlined
              v-model="leaveType"
              label="請假類別"
              :options="leaveTypes"
              :rules="[val => !!val || '請選擇請假類別']"
            />
            <q-input
              outlined
              label="開始日期"
              v-model="startDate"
              mask="date"
            >
              <template v-slot:append>
                <q-icon name="calendar_today" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="startDate" today-btn>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="確定" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              outlined
              label="結束日期"
              v-model="endDate"
              mask="date"
              :rules="[(val) => (val && val >= startDate) || '需大於起始日期']"
            >
              <template v-slot:append>
                <q-icon name="calendar_today" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="endDate" today-btn>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="確定" color="primary" flat />

                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <div class="q-pa-md">
<!-- <div class="q-gutter-md row items-start">
  <q-uploader
    style="max-width: 600px"
    url="http://localhost:4444/upload"
    label="上傳附件"
    multiple
    accept=".jpg, image/*"
    @rejected="onRejected"
  />
</div> -->
</div>
            <q-btn
              color="primary"
              label="送出"
              type="submit"
              class="q-mt-md"
              @click="submitForm"
            />
            <q-btn
              color="red"
              label="取消"
              @click="showDialog = false"
              class="q-mt-md"
            />

          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-table
      id="table"
      title="請假明細"
      :rows="leaves"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user'

export default {
  setup () {
    const user = useUserStore()
    const name = ref(user.name)

    const leaveType = ref('')
    const startDate = ref('')
    const endDate = ref('')
    const success = ref('')
    const showDialog = ref(false)
    const openDialog = () => {
      showDialog.value = true
    }
    const leaveTypes = [
      '例假', '事假', '病假', '公假', '喪假', '育嬰假', '特休', '婚假', '生理假', '產假', '陪產檢及陪產假', '安胎假', '育嬰留職停薪假', '家庭照顧假'
    ]
    const leaves = reactive([])

    const columns = [
      {
        name: '姓名',
        field: 'name',
        label: '姓名'
      },
      {
        name: '假別',
        field: 'leaveType',
        label: '假別'
      },
      {
        name: '起始日期',
        field: 'startDate',
        label: '起始日期'
      },
      {
        name: '結束日期',
        field: 'endDate',
        label: '結束日期'
      },
      {
        name: '狀態',
        field: 'state',
        label: '狀態'
      }
    ]

    const getme = async () => {
      try {
        const result = await apiAuth.get(`users/vacation/${user.name}`)
        console.log(result.data.message)
        let i = 0
        for (i = 0; i < result.data.message.length; i++) {
          leaves.push({
            name: result.data.message[i].name,
            leaveType: result.data.message[i].leaveType,
            startDate: result.data.message[i].startDate,
            endDate: result.data.message[i].endDate,
            state: result.data.message[i].state

          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    getme()
    const $q = useQuasar()
    const submitForm = async () => {
      try {
        const newLeave = reactive({
          name: name.value,
          leaveType: leaveType.value,
          startDate: startDate.value,
          endDate: endDate.value,
          state: '審核中'

        })
        showDialog.value = false
        const result = await apiAuth.post('/users/vacation', newLeave)
        console.log(result.data)
        $q.notify({
          message: '申請成功',
          color: 'positive'
        })
        leaves.splice(0, leaves.length)
        getme()
        showDialog.value = false
      } catch (error) {
        console.log(error)
      }
    }

    return {
      name,
      leaveType,
      startDate,
      endDate,
      showDialog,
      openDialog,
      leaveTypes,
      leaves,
      columns,
      submitForm,
      success
    }
  }
}
</script>

<style lang="scss">
.q-card{
width: 500px;
margin: auto;

}
#table{
width: 75%;
margin: auto;
margin-top: 20px;
}
.move{
  margin: auto;
  margin-top: 30px;
  width:76%;
}

</style>
