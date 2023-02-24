// const addBulletin = () => {
//   if (title.trim() === '' || content.trim() === '') {
//     return
//   }

//   const newBulletin = {
//     title,
//     content,
//     date: new Date().toLocaleString()
//   }

//   // 將新公告加入陣列中
//   bulletins.value.push(newBulletin)

//   // 清空表單輸入
//   title = ''
//   content = ''

//   // 關閉對話框
//   showAddBulletinDialog = false
// }

// import { ref } from 'vue'

// export default {
//   setup () {
//     const bulletins = ref([
//       { title: 'Bulletin 1', content: 'Content of Bulletin 1', date: '2023-02-14 11:00:00' },
//       { title: 'Bulletin 2', content: 'Content of Bulletin 2', date: '2023-02-14 12:00:00' },
//       { title: 'Bulletin 3', content: 'Content of Bulletin 3', date: '2023-02-14 13:00:00' }
//     ])

//     let title = ''
//     let content = ''
//     let showAddBulletinDialog = false

//     const columns = [
//       { name: 'title', align: 'left', label: 'Title', field: 'title' },
//       { name: 'content', align: 'left', label: 'Content', field: 'content' },
//       { name: 'date', align: 'left', label: 'Date', field: 'date' },
//       { name: 'actions', align: 'left', label: 'Actions' }
//     ]

//     const addBulletin = () => {
//       if (title.trim() === '' || content.trim() === '') {
//         return
//       }

//       const newBulletin = {
//         title,
//         content,
//         date: new Date().toLocaleString()
//       }

//       // 將新公告加入陣列中
//       bulletins.value.push(newBulletin)

//       // 清空表單輸入
//       title = ''
//       content = ''

//       // 關閉對話框
//       showAddBulletinDialog = false
//     }

//     return {
//       bulletins,
//       columns,
//       title,
//       content,
//       showAddBulletinDialog,
//       addBulletin
//     }
//   }
// }
