<template>
    <base-card>
        <form @submit.prevent="sendData">
        <div>
            <legend>Student Registration Form</legend>
            
            <div :class="{invalid: !firstName.isValid}">
                <label>First Name:</label>
                <input type="text" v-model.trim="firstName.value" placeholder="First Name" @blur="resetValidation('firstName')" />
                <p v-if="!firstName.isValid">Please enter your first name!</p>
            </div>
            <div :class="{invalid: !lastName.isValid}">
                <label>Last Name:</label>
                <input type="text" v-model.trim="lastName.value" placeholder="Last Name" @blur="resetValidation('lastName')" />
                <p v-if="!lastName.isValid">Please enter your last name!</p>
            </div>
            <div :class="{invalid: !birthDate.isValid}">
                <label>Date of Birth:</label>
                <input type="date" v-model.trim="birthDate.value" placeholder="Date of Birth" @blur="resetValidation('birthDate')" />
                <p v-if="!birthDate.isValid">Please enter your birthday!</p>
            </div>
            <div :class="{invalid: !municipality.isValid}">
                <label>Municipality:</label>
                <input type="text" v-model.trim="municipality.value" placeholder="Municipality" @blur="resetValidation('municipality')" />
                <p v-if="!municipality.isValid">Please enter your municipality!</p>
            </div>
            <base-button>Submit</base-button>
        </div>
    </form>
    </base-card>
</template>

<script>
export default {
    emits: ['send-data'],
    data() {
        return {
            validForm: true,
            firstName: {
                value: '',
                isValid: true
            },
            lastName: {
                value: '',
                isValid: true
            },
            birthDate: {
                value: null,
                isValid: true
            },
            municipality: {
                value: '',
                isValid: true
            },
        }
    },
    methods: {
        dataValidation: function() {
            this.validForm = true;
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
        sendData: function() {
            this.dataValidation();
            if(!this.validForm){
                return;
               }
            const studentData = {    
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                dateOfBirth: this.birthDate.value,
                municipality: this.municipality.value
            }
            this.$emit('send-data', studentData);
        }
    }
}
</script>

<style scoped>
form {
line-height: 3;
}
legend {
    font-size: 30px;
    text-align: left;
}
label {
    font-weight: bold;
    display: block;
}
input {
    width: 95%;
    height: 30px;
    padding-left: 10px;
    outline: none;
}
.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
