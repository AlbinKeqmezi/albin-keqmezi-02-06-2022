<template>
    <div>
        <registration-form @send-data="sendData">
        </registration-form>
    </div>
</template>

<script>
import RegistrationForm from '../../components/students/RegistrationForm.vue'

export default {
   components: {
      RegistrationForm 
   },
   methods:{
       sendData(data){
           this.$store.dispatch('students/registerStudent', data);
           this.$router.replace('/students');
       }
   },
}
</script>