import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/init'
import router from '@/router/index'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        smoothies:[]
    },
    mutations:{
        deleteSmoothie: (state,id) =>{
            db.collection('smoothies').doc(id).delete()
            .then(()=>{
                state.smoothies=state.smoothies.filter(smoothie=>{
                    return smoothie.id !=id
                })
            })
        },
        AddSmoothie:(state,theData)=>{
            db.collection("smoothies").add({
                title:theData.title,
                ingredients:theData.ingredients,
                slug:theData.slug
            }).then(()=>{
                router.push({name:"index"})
            }).catch(err=>{
                    console.log(err)
                }
            )
        }
    },
    actions:{
        deleteSmoothie:(context,id)=>{
            context.commit('deleteSmoothie',id)
        },
        AddSmoothie:(context,theData)=>{
            context.commit("AddSmoothie",theData)
        }
    },
    getters:{
        smoothies:state=>{
            return state.smoothies
        }
    }

})

 