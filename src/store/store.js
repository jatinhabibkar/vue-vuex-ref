import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/init'
import router from '@/router/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    smoothies: [],
    editsmoothie: null,
  },
  mutations: {
    deleteSmoothie: (state, id) => {
      db.collection('smoothies').doc(id).delete()
        .then(() => {
          state.smoothies = state.smoothies.filter(smoothie => {
            return smoothie.id != id
          })
        })
    },
    AddSmoothie: (state, theData) => {
      db.collection("smoothies").add(theData)
        .then(() => {
          router.push({
            name: "index"
          })
        }).catch(err => {
          console.log(err)
        })
    },
    getBySlug: (state, ref) => {
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              state.editsmoothie = doc.data()
              state.editsmoothie.id = doc.id
            })
          })

    }
  },
  actions: {
    deleteSmoothie: (context, id) => {
      context.commit('deleteSmoothie', id)
    },
    AddSmoothie: (context, theData) => {
      context.commit("AddSmoothie", theData)
    },
    getBySlug: (context, slug) => {
      let ref = db.collection('smoothies').where('slug', '==', slug)
      return context.commit("getBySlug", ref)
    },
    UpdateSmoothie: (context) => {
      db.collection("smoothies").doc(context.state.editsmoothie.id).update(context.state.editsmoothie)
        .then(() => {
          router.push({
            name: "index"
          })
        }).catch(err => {
          console.log(err)
        })
    } 
  },
  getters: {
    smoothies: state => {
      return state.smoothies
    },
    editsmoothie:state=>{
        return state.editsmoothie
    }
  }

})
