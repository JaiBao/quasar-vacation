<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>

            <!-- <q-icon name="update" size="40px"/> -->

          <q-btn flat  to="/" size="lg"  id="cloud" >
            <img src="~/assets/A(60).png"
            v-if="isLogin">出缺勤管理系統雲 </q-btn>
        </q-toolbar-title>

        <q-btn
        v-if="!isLogin"
        outline
          class="q-mx-10"
          color="primary"
          to="/login"
          text-color="white"
          label="登入/註冊"
          name="login"
        />

        <q-btn v-if="isLogin" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer  v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated >
      <!-- drawer content -->
<aside class="q-drawer q-drawer--right q-drawer--bordered q-drawer--standard fixed" style="width: 300px; transform: translateX(0px);  bottom: 50px;">
  <div class="q-drawer__content fit scroll">
  <div class="q-scrollarea" style="height: calc(100% - 204px); margin-top: 204px;">
    <div class="q-scrollarea__container scroll relative-position fit hide-scrollbar">
      <div class="q-scrollarea__content absolute" >
  <div class="text-grey" style="padding: 25px 16px 16px;">
    <q-list bordered padding class="rounded-borders text-primary">

<q-item

  v-if="!isAdmin"
  clickable
  v-ripple
  :active="link === 'inbox'"
  @click="link = 'inbox'"
  to="/user"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="date_range" />
  </q-item-section>

  <q-item-section>行事曆</q-item-section>
</q-item>
<q-item
  v-if="isAdmin"
  clickable
  v-ripple
  :active="link === 'inbox'"
  @click="link = 'inbox'"
  to="/admin"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="date_range" />
  </q-item-section>

  <q-item-section>行事曆</q-item-section>
</q-item>
<!-- ------------------------------------ -->

<q-item
v-if="!isAdmin"
  clickable
  v-ripple
  :active="link === 'outbox'"
  @click="link = 'outbox'"
  to="/user/edit"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="account_circle" />
  </q-item-section>

  <q-item-section>使用者資料</q-item-section>
</q-item>
<q-item
v-if="isAdmin"
  clickable
  v-ripple
  :active="link === 'outbox'"
  @click="link = 'outbox'"
  to="/admin/user"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="manage_accounts" />
  </q-item-section>

  <q-item-section>會員管理</q-item-section>
</q-item>
<!-- ---------------------------------------------------- -->

<q-item
v-if="!isAdmin"
  clickable
  v-ripple
  :active="link === 'trash'"
  @click="link = 'trash'"
  to="/user/vacation"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="edit_document" />
  </q-item-section>

  <q-item-section>休假申請</q-item-section>
</q-item>
<q-item
v-if="isAdmin"
  clickable
  v-ripple
  :active="link === 'trash'"
  @click="link = 'trash'"
  to="/admin/limit"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="free_cancellation" />
  </q-item-section>

  <q-item-section>休假審核</q-item-section>
</q-item>
<!-- ------------------------------------------------------- -->
<q-item
v-if="isAdmin"
  clickable
  v-ripple
  :active="link === 'trash'"
  @click="link = 'trash'"
  to="/admin/limit"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="manage_history" />
  </q-item-section>

  <q-item-section>假單歷史紀錄</q-item-section>
</q-item>
<!-- ---------------------------------------------------------- -->
<q-item
v-if="isAdmin"
  clickable
  v-ripple
  :active="link === 'trash'"
  @click="link = 'trash'"
  to="/admin/Bulletin"
  active-class="my-menu-link"
>
  <q-item-section avatar>
    <q-icon name="format_list_bulleted_add" />
  </q-item-section>

  <q-item-section>公告管理</q-item-section>
</q-item>
<!-- ---------------------------------------------------------- -->
<q-separator spaced />

<q-item
v-if="isLogin"
  clickable
  v-ripple
  :active="link === 'help'"
  @click="link = 'help'"
  active-class="my-menu-link"
>

  <q-item-section> <q-btn

          class="q-mx-10"
          color="red"
          text-color="white"
          label="登出"
          name="logout"
          @click="logout"
          icon="logout"
          rounded
        /></q-item-section>
</q-item>
</q-list>
</div>
</div>
<!----></div>
<!---->
<div class="q-scrollarea__bar q-scrollarea__bar--v absolute-right q-scrollarea__bar--invisible" aria-hidden="true" >

</div>
<div class="q-scrollarea__bar q-scrollarea__bar--h absolute-bottom q-scrollarea__bar--invisible" aria-hidden="true"></div>
<div class="q-scrollarea__thumb q-scrollarea__thumb--v absolute-right q-scrollarea__thumb--invisible" aria-hidden="true" style="top: 0px; height: 196px;"></div>
<div class="q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom q-scrollarea__thumb--invisible" aria-hidden="true" style="left: 0px; width: 299px;"></div>
</div>
<div class="q-img q-img--menu absolute-top" role="img" style="height: 204px;"><div style="padding-bottom: 82.5195%;"></div>
<div class="q-img__container absolute-full">
  <img class="q-img__image q-img__image--with-transition q-img__image--loaded" loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false" src="https://cdn.quasar.dev/img/material.png" style="object-fit: cover; object-position: 50% 50%;" >
</div>
<div class="q-img__content absolute-full q-anchor--skip" >
  <div class="absolute-bottom bg-transparent" style="display: flex;
flex-direction: column;
justify-content: center;
align-items: center;">
    <div class="q-avatar q-mb-xl" style="font-size: 80px;margin: auto;">
      <div class="q-avatar__content row flex-center overflow-hidden">
        <img :src="`https://source.boringavatars.com/beam/${user.account}?colors=058789,503d2e,d54b1a,e3a72f,f0ecc9`"></div>
      </div>
      <div class="text-weight-bold">{{user.account}}</div>
      <div>{{user.phone}}</div>
    </div>
  </div>
</div>
</div>
</aside>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer id="footer" class="column justify-center items-center bg-grey-8  text-white">
   <p>2023</p>

  </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)
const router = useRouter()

const rightDrawerOpen = ref(false)

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const logout = async () => {
  await user.logout()
  router.push('/')
}
</script>

<style lang="scss">
.q-toolbar {
  height: 7vh;
}

#cloud{
  font-size: 30px !important;
img{
  width: 70px;
  height: 70px;
}

}
@media screen and (max-width: 768px) {
#cloud{
width: 100%;
font-size: 25px !important;
img{
width: 80px;
height: 80px;
}

}
}
</style>
