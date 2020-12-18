import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:'#vue-app',
    data:{
            name:'kamel',
            country:'algeria',
            age:20,



    },

    methods: {
    
      add:function(nb){
          return this.age+=nb
      },

      sub:function(nb){
        return this.age-=nb
      }


    },





});