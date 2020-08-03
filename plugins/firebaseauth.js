/* import { auth } from '~/plugins/firebase.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {

        
         // take everything from user object
     
         store.commit('SET_USER', user)
         resolve()
       })

  })
} */