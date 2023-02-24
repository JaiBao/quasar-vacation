import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import { apiAuth } from 'src/boot/axios' // api,

export const useUserStore = defineStore(
  'user',
  () => {
    const name = ref('')
    const account = ref('')
    const phone = ref('')
    const tokens = ref('')
    const role = ref(0)
    const reserve = ref('')
    const _id = ref('')

    const isLogin = computed(() => {
      return tokens.value.length > 0
    })
    const isAdmin = computed(() => {
      return role.value === 1
    })
    // const avatar = computed(() => {
    //   return `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
    // })

    const $q = useQuasar()
    const login = async (form) => {
      try {
        const { data } = await apiAuth.post('/users/login', form)
        _id.value = data.result._id
        tokens.value = data.result.token
        account.value = data.result.account
        name.value = data.result.name
        phone.value = data.result.phone
        role.value = data.result.role

        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '登入成功'
        })
      } catch (error) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'info',
          message: '登入失敗'
        })
      }
    }
    // router 要改成function
    const logout = async () => {
      try {
        await apiAuth.delete('/users/logout')
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '登出成功'
        })
      } catch (error) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_off',
          message: error.message
        })
      }
      tokens.value = ''
      account.value = ''
      name.value = ''
      phone.value = ''
      role.value = ''
      reserve.value = ''
    }
    return {
      _id,
      tokens,
      account,
      name,
      phone,
      role,
      login,
      isLogin,
      isAdmin,
      reserve,
      logout

    }
  },
  {
    persist: {
      key: '20230201',
      paths: ['tokens', 'account', 'phone', 'name', '_id', 'role']
    }
  },
  {}
)
