<template>
  <div class="container">
    <q-splitter v-model="splitterModel" class="splitter">

      <template v-slot:after>
        <div class="table-container">
          <q-table class="table"
            title="請假人員"
            :rows="leaves"
            :columns="columns"
            row-key="startDate"
            :filter="filter"
          >
            <template v-slot:top-right>
              <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-avatar>
<q-img :src="`https://source.boringavatars.com/beam/${props.row.name}?colors=058789,503d2e,d54b1a,e3a72f,f0ecc9`"/></q-avatar>
        </q-td>
      </template>
          </q-table>
        </div>
      </template>

      <template v-slot:before>
        <div class="q-ma-xl seeit" >
          <q-date
          id="userdate"
            v-model="filter"
            :events="events"
            event-color="red"
            today-btn
          />
        </div>
      </template>

    </q-splitter>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'

const splitterModel = ref(50)

const events = reactive([])
const filter = ref('')

const leaves = reactive([])
const columns = [
  {
    name: 'image',
    label: '頭貼',
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
  }
]
const getme = async () => {
  try {
    const result = await apiAuth.get('users/allvacation')
    console.log(result.data)
    let i = 0
    for (i = 0; i < result.data.message.length; i++) {
      events.push(result.data.message[i].startDate)
      leaves.push({
        name: result.data.message[i].name,
        leaveType: result.data.message[i].leaveType,
        startDate: result.data.message[i].startDate,
        endDate: result.data.message[i].endDate

      })
    }
    console.log(events[0])
  } catch (error) {
    console.log(error)
  }
}
getme()
</script >

<style lang="scss">

.container {
  height: 450px;
}

.splitter {
  display: flex;
  flex-direction: column;

}

.table-container {
  height: 100%;
}
.table{
width: 75%;
height: 300PX;
margin: auto;
margin-top: 20px;
}

#q-app
{.q-layout {

.q-page-container
{
  .container{
  .q-splitter {
  .q-splitter__panel
  {
  width: 100%  !important;
}
}}}}}
#userdate{
  margin-left: 35%;
  width: 100%;

}
.seeit {
  width: 1000px;
}
@media screen and (max-width: 768px) {
  .table{
    width: 100%;
    margin-left: 0;
  }
  #userdate {
    width: 100%;
    margin-left: 0;
  }

  .seeit {
    width: 100%;
    margin-left: 0;
  }
}
@media screen and (max-width: 992px) {
  .table{
    width: 100%;
    margin-left: 0;
    height: 100%;
  }
  #userdate {
    width: 100%;
    margin-left: 0;
  }

  .seeit {
    width: 100%;
    margin-left: 0;
  }
}
</style>
