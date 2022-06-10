<template>
<div v-if="showDialog" class="backdrop" @click="close"></div>
    <dialog open>
        <header>Edit Student</header>
        <form @submit.prevent="editStudent">
        <div :class="{invalid: !firstName.isValid}">
            <label>First Name</label>
            <input type="text" v-model.trim="firstName.value" placeholder="First Name" @blur="resetValidation('firstName')" />
            <p v-if="!firstName.isValid">Please enter your first name!</p>
        </div>
        <div :class="{invalid: !lastName.isValid}">
            <label>Last Name</label>
            <input type="text" v-model.trim="lastName.value" placeholder="Last Name" @blur="resetValidation('lastName')"  />
            <p v-if="!lastName.isValid">Please enter your last name!</p>
        </div>
        <div :class="{invalid: !birthDate.isValid}">
            <label>Birth Date</label>
            <input type="date" v-model.trim="birthDate.value" placeholder="Date of Birth" @blur="resetValidation('birthDate')" />
            <p v-if="!birthDate.isValid">Please enter your birthday!</p>
       </div>   
        <div :class="{invalid: !municipality.isValid}">
            <label>Municipality</label>
            <input type="text" v-model.trim="municipality.value" placeholder="Municipality" @blur="resetValidation('municipality')" />
            <p v-if="!municipality.isValid">Please enter your municipality!</p>
        </div>
        
        <footer>
            <button @click="close">Cancel</button>
            <button>Yes</button>
        </footer>
    </form>    
    </dialog>
</template>

<script>
export default {
    props:['index'],
    data() {
        return {
            firstName: { isValid:true, value: '' },
            lastName: { isValid:true, value: '' },
            birthDate: { isValid:true, value: null, },
            municipality: { isValid:true, value: '' },
            showDialog: true,
            validForm: true,
        }
    },
    methods: {
         dataValidation: function() {
            if(this.firstName.value === ''){
                this.firstName.isValid = false;
                this.validForm = false;
            }
            if(this.lastName.value === ''){
                this.lastName.isValid = false;
                this.validForm = false;
            }
            if(this.birthDate.value === null) {
                this.birthDate.isValid = false;
                this.validForm = false;
            }
            if(this.municipality.value === '') {
                this.municipality.isValid = false;
                this.validForm = false;
            }
        },
        resetValidation: function(inputValue) {
            this[inputValue].isValid = true;
        },
        editStudent() {
            this.dataValidation();
            if(!this.validForm){
                return;
               }

            const student = {
                index: this.index,
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                dateOfBirth: this.birthDate.value,
                municipality: this.municipality.value,
            }
            this.$store.dispatch('students/editStudent',student);
            this.$router.replace('/students')
        },
        close() {
            this.showDialog = false;
            this.$router.replace('/students');
        },
    }
}
</script>


<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.80);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  width: 90%;
  z-index: 100; 
  border-radius: 14px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.30);
  overflow: hidden;
  background-color: white;
}

header {
  width: 100%;
  padding: 16px;
  background-color: #103c82;
  color:white;
}

form {
  min-height: 300px;
  padding: 1rem;
  line-height: 2;
}

footer {
    width:100%;
    padding: 1rem 1rem 0 1rem;
    text-align: right;
}
footer button {
    width:120px;
    height:40px;
    margin:0.5rem;
    border:none;
    color:white;
    background-color: #103c82;
}
footer :nth-child(1){
    background-color: #efefef;
    color:black;
}

input{
    width:600px;
    height: 25px;
    outline:none;
    display: block;
}
.invalid label {
    color:red;
}
.invalid input {
    border: 1px solid red;
}

  dialog {
    left: 25rem;
    width: 40rem;
  }

</style>