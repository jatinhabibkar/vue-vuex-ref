<template>
  <div v-if='editsmoothie' class="edit-smoothie container">
      <h2 class="center-align indigo-text" >Edit a smoothie {{editsmoothie.title}}</h2>
      <form @submit.prevent="EditSmoothie(editsmoothie.title)">
        <div class="field title">
            <label for="title">Smoothie Title:</label>
            <input type="text" name="title" v-model="editsmoothie.title">
        </div>
        <div v-for="(ing,index) in editsmoothie.ingredients" :key="index">
            <label for="ingredient">ingredient:</label>
            <input type="text" name="ingredient" v-model="editsmoothie.ingredients[index]">
        </div>
        <div class="field add-ingredient">
            <label for="add-ingredient">Add an ingredient:</label>
            <input type="text" name="add-ingredient"  @keydown.tab.prevent ="addIng" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
            <button class="btn pink">Update Smoothie</button>
        </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import {mapActions,mapGetters} from 'vuex'

export default {
    data(){
        return{
            another:null,
            feedback:null
        }
    },
    name:"EditSmoothie",
    created(){
        this.$store.dispatch("getBySlug",this.$route.params.smoothie_slug)
    },
    computed:{
        ...mapGetters([
            "editsmoothie"
        ])
    },methods:{
         addIng(){
          if(this.another){
              this.editsmoothie.ingredients.push(this.another)
              this.another=null
              this.feedback=null
          }else{
              this.feedback="you must enter a value to add ingredient"
          }
      },
      EditSmoothie(){
          if(this.editsmoothie.title){
              this.feedback=null
              this.$store.dispatch("UpdateSmoothie")
          }else{
              this.feedback="you must enteer a smoothie title"
          }
      
      }
    }
}
</script>

<style>

</style>