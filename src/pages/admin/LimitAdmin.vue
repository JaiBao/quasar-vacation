<template>
  <q-page>

        <q-table id="table"
      title="請假明細"
      :rows="leaves"
      :columns="columns"
      row-key="name"

    />
  </q-page>

  <!-- ------------------------------- -->

</template>

<script>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user'

export default {
  setup () {
    const user = useUserStore()
    const name = ref(user.account)
    const leaveType = ref('')
    const startDate = ref('')
    const endDate = ref('')
    const id = ref('')
    const leaveTypes = [
      '例假', '事假', '病假', '公假', '喪假', '育嬰假', '特休', '婚假', '生理假', '產假', '陪產檢及陪產假', '安胎假', '育嬰留職停薪假', '家庭照顧假'
    ]
    const leaves = reactive([])
    const selected = ref([])
    const columns = [
      {
        name: 'id',
        field: 'id',
        label: 'id',
        align: 'center'
      },
      {
        name: '姓名',
        field: 'name',
        label: '姓名',
        align: 'center'
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
        label: '狀態',
        sortable: true
      }
    ]
    const getme = async () => {
      try {
        const result = await apiAuth.get('users/allvacation')
        console.log(result.data)
        let i = 0
        for (i = 0; i < result.data.message.length; i++) {
          leaves.push({
            name: result.data.message[i].name,
            leaveType: result.data.message[i].leaveType,
            startDate: result.data.message[i].startDate,
            endDate: result.data.message[i].endDate,
            state: result.data.message[i].state,
            id: result.data.message[i]._id

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
          id: selected.value[0].id,
          name: selected.value[0].name,
          leaveType: selected.value[0].leaveType,
          startDate: selected.value[0].startDate,
          endDate: selected.value[0].endDate,
          state: '已核准'
        })
        const result = await apiAuth.patch('/users/vacation/check', newLeave)
        console.log(result)
        leaves.splice(0, leaves.length)
        getme()
        id.value = ''
        name.value = ''
        leaveType.value = ''
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

    return {
      name,
      leaveType,
      startDate,
      endDate,
      leaveTypes,
      leaves,
      columns,
      submitForm,
      selected,
      id
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
margin-top: 32px;
}

</style>
