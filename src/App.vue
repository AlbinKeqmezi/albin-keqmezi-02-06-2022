<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
   components: {
       TheHeader,
   },
   computed: {
       autoLogout() {
           return this.$store.getters.autoLogout;
       },
   },
   watch: {
     autoLogout(currentValue, oldValue) {
         if(currentValue && currentValue !== oldValue) {
             this.$router.replace('/authentication');
         }
     }  
   },
   created() {
       this.$store.dispatch('tryLogin');
   }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
</style>