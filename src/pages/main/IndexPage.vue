<template>
  <div class="q-pa-md ">
    <div class="row ">
      <!-- <iframe width="2000" height="600" src="https://www.youtube.com/embed/xQabajpFq1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
    <q-parallax
      src="~/assets/rest.jpg"
    >
    <h1 class="text-white">Basic</h1>
  </q-parallax>

    </div>
  </div>
  <section style="display: flex; flex-direction: row; height: 100%">
  <div style="flex-grow: 1;">
    <q-table
      title="最新消息"
      :rows="bulletins"
      :columns="columns"
      row-key="name"
      style="height: 100%;"
    />
  </div>
  <div style="flex-grow: 2;">
  <q-row class="q-mt-xs" style="height: 100%;">

    <q-carousel animated v-model="slide" arrows navigation infinite style="height: 100%;">
      <q-carousel-slide
      :name="1"

      > <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/8kX8zC3gklU"
        />
      </q-carousel-slide>
      <q-carousel-slide
      :name="2"

      > <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/lxlTjAAQbnA"
        />
      </q-carousel-slide>
      <q-carousel-slide
      :name="3"

      > <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/onfyGmu2VSM"
        />
      </q-carousel-slide>
    </q-carousel>
  </q-row>
</div>
</section>

    <div id="info" class="row q-mb-md text-center justify-center items-center">
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <a href="https://ilabor.ntpc.gov.tw/page/reporting-on-implementation-of-unpaid-leave">
        <q-img ratio="1" class="col-5" src="~/assets/勞保.jpg" />
      </a>
            <q-card-section>
              <h4 class="shrink-text">勞保、就保、國保
                <hr>
                試算系統</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <a href="https://labweb.mol.gov.tw/monthly/index.html#disasterSet=false%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse&holidaySet=false%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&monthlyPay=36000&regularDayOffWorkReason=disaster&restDayOffWorkReason=restLaborAgree&specialDayOffWorkReason=specialLaborAgree&workhours=8%2C8%2C8%2C8%2C8%2C0%2C0">
        <q-img ratio="1" class="col-5" src="~/assets/加班費.jpg" />
      </a>

            <q-card-section>
              <h4 class="shrink-text">加班費
                <hr>
                試算系統</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <a href="https://www.mol.gov.tw/1607/28162/28166/28218/nodelist">
        <q-img ratio="1" class="col-5" src="~/assets/規定.jpg" />
      </a>
            <q-card-section>
              <h4 class="shrink-text">勞保局
                <hr>
                休假相關規定</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3">
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <a href="https://ilabor.ntpc.gov.tw/page/reporting-on-implementation-of-unpaid-leave">
        <q-img ratio="1" class="col-5" src="~/assets/勞保.png" />
      </a>
      <q-card-section>
        <h4 class="shrink-text">特殊傳染性肺炎
          <hr>
          協助專區</h4>
      </q-card-section>
    </q-card-section>
  </q-card>
</div>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

const slide = ref(1)
const $q = useQuasar()
const columns = [
  // { name: 'title', align: 'left', label: '標題', field: 'title' },
  { name: 'content', align: 'left', label: '內容', field: 'content' },
  // { name: 'startDate', align: 'center', label: '發布日期', field: 'startDate' },
  { name: 'endDate', align: 'center', label: '截止日期', field: 'endDate' }

]
const bulletins = reactive([])

const getBulletins = async () => {
  try {
    const data = await api.get('/bulletin')
    console.log(data)
    let i = 0
    for (i = 0; i < data.data.result.length; i++) {
      if (data.data.result[i].actions === '進行中') {
        bulletins.push({
          startDate: data.data.result[i].startDate,
          endDate: data.data.result[i].endDate,
          title: data.data.result[i].title,
          content: data.data.result[i].content

        })
      }
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
</script>

<style lang="scss">
q-parallax{
  width: 100vw;
  height: 100vh;
}
// q-row {
//   width: 100vw;
//   flex-wrap: nowrap;
//   display: flex;
//   flex-direction: row;
// }
#info {
  // width: 100vw;
  // img {
  //   max-width: 100%;

  // }
  max-width: 100vw;
  margin: 0 auto;
}
#info2 {
  min-height: 40vh;
  max-height: 200vh;
  width: 100vw;
  img {
    width: 100%;
    height: 100%;
  }
}
section {
  background: #eee;
  // width: 100vw;
  // padding: 20px 10px;
}
// .q-table__container {
//   min-width: 50%;
//   max-width: 50%;
//   height: 100%;
// }
.q-carousel {
  img {
    max-width: 100%;
    ; max-height: 100%;
    object-fit: contain

  }
}
#info {
  .q-img {
    object-fit: cover;
    border: 1px solid rgb(13, 13, 13);
  }
}
.q-parallax{
  width: 100vw;
}
.shrink-text {
  font-size: 1.3rem; /* set your desired font size */
}
</style>
