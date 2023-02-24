<template>
  <div id="sm" class="row  q-pa-md">
    <!-- <q-card style="margin:auto" id="regis"> -->
    <div class="col-xs-12 col-md-6 text-center" id="regis">
      <h5>註冊</h5>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md"  >
        <q-input
          outlined
          type="text"
          v-model="form.name"
          label="姓名"
          hint="請輸入姓名"
          lazy-rules
          :rules="[(val) => (val && val.length >= 2) || '請輸入全名']"
        />
        <q-input
          outlined
          type="text"
          v-model="form.account"
          label="帳號"
          hint="請輸入帳號"
          lazy-rules
          :rules="[(val) => (val && val.length >= 4) || '最少4位數以上']"
        />
        <q-input
          outlined
          type="password"
          v-model="form.password"
          label="密碼"
          hint="請輸入密碼"
          lazy-rules
          :rules="[(val) => (val && val.length >= 4) || '最少4位數以上']"
        />
        <q-input
          outlined
          type="password"
          v-model="form.passwordConfirm"
          label="確認密碼"
          hint="請再次輸入密碼"
          lazy-rules
          :rules="[(val) => (val && val === form.password) || '密碼不一致']"
        />
        <q-input
          outlined
          type="string"
          v-model="form.phone"
          label="手機"
          hint="請輸入手機號碼"
          lazy-rules
          :rules="[(val) => (val && val.length >= 10) || '請輸入正確手機號碼']"
        />

        <div>

          <q-btn
            label="清除"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="送出" type="submit" color="primary"  />
        </div>
      </q-form>

      <q-btn id="register1" label="已擁有帳號" type="button" color="primary" to="/login" outline />
    </div>
  <!-- </q-card> -->
  </div>

</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, reactive } from 'vue'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const $q = useQuasar()

const form = reactive({
  name: '',
  account: '',
  password: '',
  phone: ''
})

const valid = ref(false)
const loading = ref(false)

const onSubmit = async () => {
  await api.post('/users', form)
  // if (!valid.value) return
  // loading.value = true
  try {
    await $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'check_circle',
      message: '創建成功，請登入'
    })
    router.push('/login')
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: error.message || '發生錯誤'
    })
  }
  loading.value = false
}

function onReset () {
  form.name = ''
  form.account = ''
  form.password = ''
  form.phone = ''
  valid.value = false
}
</script>

<style lang="scss">

#register1{
margin-top: 30px;
margin-left: 40px;

}
#sm{
width: 100vw;
margin-top: 50px;
.col-md-6{
margin: auto;
padding: 12px;
}

}
#regis{
background: #eeeeee;
padding: 20px;
border: 5px solid #eeeeee;
border-radius: 5%;

}
@media screen and (min-width: 768px) {
  #regis{
background: #eeeeee;
padding: 20px;
border: 5px solid #eeeeee;
border-radius: 5%;
width: 25%;
}
}

</style>
