<template>
  <div>
    <h2>休假申請</h2>
    <form @submit.prevent="submitForm">
      <label for="name">名稱:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="leaveType">請假類別:</label>
      <select id="leaveType" v-model="leaveType" required>
        <option value="">請選擇請假類別</option>
        <option v-for="type in leaveTypes" :key="type" :value="type">{{ type }}</option>
      </select>
      <label for="startDate">起始日期:</label>
      <input type="date" id="startDate" v-model="startDate" required>
      <label for="endDate">結束日期:</label>
      <input type="date" id="endDate" v-model="endDate" required>
      <button type="submit">送出</button>
    </form>
    <q-card v-if="leaves.length > 0">
      <q-card-section>
        <h3>請假明細</h3>
        <table>
          <thead>
            <tr>
              <th>姓名</th>
              <th>假別</th>
              <th>起始日期</th>
              <th>結束日期</th>
              <th>狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="leave in leaves" :key="leave.id">
              <td>{{ leave.name }}</td>
              <td>{{ leave.leaveType }}</td>
              <td>{{ leave.startDate }}</td>
              <td>{{ leave.endDate }}</td>
            </tr>
          </tbody>
        </table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const name = ref('')
    const leaveType = ref('')
    const startDate = ref('')
    const endDate = ref('')

    const leaveTypes = [
      '例假', '事假', '病假', '公假', '喪假', '育嬰假', '特休', '婚假', '生理假', '產假', '陪產檢及陪產假', '安胎假', '育嬰留職停薪假', '家庭照顧假'
    ]

    const leaves = ref([])

    const submitForm = () => {
      const newLeave = {
        id: Date.now(),
        name: name.value,
        leaveType: leaveType.value,
        startDate: startDate.value,
        endDate: endDate.value
      }
      leaves.value.push(newLeave)
      name.value = ''
      leaveType.value = ''
      startDate.value = ''
      endDate.value = ''
    }

    return {
      name,
      leaveType,
      startDate,
      endDate,
      leaveTypes,
      leaves,
      submitForm
    }
  }
}
</script>
