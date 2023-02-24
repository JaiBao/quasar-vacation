import AdminLayout from 'layouts/AdminLayout.vue'
import MainLayout from 'layouts/MainLayout.vue'
import UserLayout from 'layouts/UserLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('src/pages/main/IndexPage.vue'),
        meta: {
          title: '出勤系統',
          login: false,
          admin: false
        }
      },
      {
        path: 'intro',
        name: 'intro',
        component: () => import('src/pages/main/IntroPage.vue'),
        meta: {
          title: '',
          login: false,
          admin: false
        }
      },

      {
        path: '/login',
        component: () => import('src/pages/main/LoginPage.vue'),
        meta: {
          title: '登入',
          login: false,
          admin: false
        }
      }, {
        path: '/register',
        component: () => import('src/pages/main/RegisterPage.vue'),
        meta: {
          title: '註冊',
          login: false,
          admin: false
        }
      }
    ]
  },

  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '/admin',
        component: () => import('pages/admin/AdminPage.vue'),
        meta: {
          title: '管理員',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/user',
        component: () => import('pages/admin/UserAdmin.vue'),
        meta: {
          title: '會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin//limit',
        component: () => import('pages/admin/LimitAdmin.vue'),
        meta: {
          title: '假單管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin//Bulletin',
        component: () => import('src/pages/admin/BulletinAdmin.vue'),
        meta: {
          title: '公告管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin//review',
        component: () => import('pages/admin/ReviewAdmin.vue'),
        meta: {
          title: '假單審核',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/user',
        component: () => import('pages/user/UserPage.vue'),
        meta: {
          title: '會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: '/user/edit',
        component: () => import('pages/user/EditPage.vue'),
        meta: {
          title: '編輯會員',
          login: true,
          admin: false
        }
      },
      {
        path: '/user/vacation',
        component: () => import('src/pages/user/UserVacation.vue'),
        meta: {
          title: '休假申請',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
