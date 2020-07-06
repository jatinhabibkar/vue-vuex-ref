<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New smoothie Recipe</h2>
    <form @submit.prevent="AddSmoothie(title)">
        <div class="field title">
            <label for="title">Smoothie Title:</label>
            <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ing,index) in ingredients" :key="index">
            <label for="ingredient">ingredient:</label>
            <input type="text" name="ingredient" v-model="ingredients[index]">

        </div>
        <div class="field add-ingredient">
            <label for="add-ingredient">Add an ingredient:</label>
            <input type="text" name="add-ingredient"  @keydown.tab.prevent ="addIng" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
            <button class="btn pink">Add Smoothie</button>
        </div>
    </form>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
    name:"AddSmoothie",
    data(){
        return{
            title:null,
            another:null,
            ingredients:[],
            feedback:null,
        }
    },methods:{
      addIng(){
          if(this.another){
              
              this.ingredients.push(this.another)
              this.another=null
              this.feedback=null
              this.slug=slugify(this.title,{
                  replacement: "-",
                  remove: /[$*_+~.()'"!\-:@]/g,
                  lower: true
              })

          }else{
              this.feedback="you must enter a value to add ingredient"
          }
      },
      AddSmoothie(){
          if(this.title){
              this.feedback=null
              
              const thedata={
                  title:this.title,
                  ingredients:this.ingredients,
                  slug:this.slug
              }
              this.$store.dispatch("AddSmoothie",thedata)
          }else{
              this.feedback="you must enteer a smoothie title"
          }
      }
    }
}
</script>

<style>
.add-smoothie{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-smoothie {
font-size: 2em;
margin: 20px auto;

}
.add-smoothie .field{
    margin: 20px auto;
}
</style>