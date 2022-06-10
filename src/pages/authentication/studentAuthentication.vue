<template>
   <div class="background">
       <base-dialog :show="!!error" title="An error ocured" @close="handleError">
        <p>{{error}}</p>
       </base-dialog>
       <base-dialog :show="isLoading" title="Authenticating...">
        <p>Authenticating...</p>
       </base-dialog>
       
        <div class="cardContainer">
            <div class="card">
                <div class="header">
                    <h2>Welcome Back</h2>
                    <p>Enter your creditionals to access your account.</p>
                </div>
                <form @submit.prevent="submitForm">
                    <div>
                        <input type="email" id="email" v-model.trim="email.value" placeholder="Enter your email" @blur="resetValidation('email')" />
                    </div>
                    <p v-if="email.invalidInput" class="invalidInput">Please enter a valid email.</p>
                    <div>
                        <input type="password" id="password" v-model.trim="password.value" placeholder="Enter your password" @blur="resetValidation('password')" />
                    </div>
                    <p v-if="password.invalidInput" class="invalidInput">Password must be at least 8 characetrs.</p>
                    <button>{{buttonMode}}</button>
                </form>
            </div>
        </div>

    <div class="mode">
        <span v-if="mode === 'register'">Already have an account?</span>
        <span v-else>Not a user yet?</span>
        <button @click="authenticationMode">{{switchMode}}</button>
    </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            email: {
                value: '',
                invalidInput: false,
            },
            password: {
                value: '',
                invalidInput: false,
            },
            validForm: true,
            mode: 'login',
            isLoading: false,
            error: null,
            invalidEmail: false,
            invalidPassword: false,
        }
    },
    computed: {
        buttonMode() {
            if(this.mode === 'login') {
                return 'Login';
            }else{
                return 'Register';
            }
        },
        switchMode() {
            if(this.mode === 'login') {
                return 'Register';
            }else{
                return 'Login';
            }
        }
    },
    methods: {
        async submitForm() {
            this.validForm;
            if(this.email.value === '') {
                this.validForm = false;
                this.email.invalidInput = true;
            }
            if(this.password.value.length < 8) {
                this.validForm = false;
                this.password.invalidInput = true;
            }

            if(!this.validForm) {
                return;
            }
            this.isLoading = true;

            try{
                if(this.mode === 'login') {
                    await this.$store.dispatch('login',{
                    email: this.email.value,
                    password: this.password.value,   
                    })
            }else{
                await this.$store.dispatch('signup', {
                    email: this.email.value,
                    password: this.password.value,
                })
            }
            this.$router.replace('/students');
            }catch(err) {
                this.error = err.message || 'Failed to authenticate';
            }
            localStorage.setItem('studentEmail', this.email.value);
            this.isLoading = false;

            this.$store.commit('activeStudent', this.email.value);
        },
        authenticationMode() {
            if(this.mode === 'login') {
                this.mode = 'register';
            }else{
                this.mode = 'login';
            }
        },
        handleError() {
            this.error = null;
        },
        resetValidation(value) {
            this[value].invalidInput = false;
            if(this.email.invalidInput === false && this.password.invalidInput === false) {
                this.validForm = true;
            }
        }
    },
}
</script>


<style scoped>
.background { 
  width: 100vw;
  height: 100vh;
  background-color: #f1f5fe;
}
.card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
    padding: 16px;
    margin:  auto;
    width: 25rem;
    height: 22rem;
    background-color: #fff;
}
.cardContainer{
    padding-top: 130px;
}
form {
  margin: 1rem;
  padding: 1rem;
}
.header {
    text-align: center;
    padding: 2rem 2rem 0 2rem;
}
.header h2{
    color: #1c5996;
}
.header p{
    padding-top:10px;
    color: #a7abb6;
}
input {
  display: block;
  width: 20rem;
  height: 2rem;
  padding-left: 10px;
  margin-top:20px;
  outline: none;
  border-radius: 4px;
  border: 2px solid #d5d5d5;
}
form button {
    width: 21rem;
    margin: 2rem 0;
    height: 35px;
    border:none;
    color:white;
    background-color: #006ffc;
}
.mode {
    margin-top:10px;
    display: flex;
    justify-content: center;
    color: #778188;
}
button {
    border:none;
    background: transparent;
    margin-left: 10px;
    font-size: 15px;
    color: #426bcc;   
}
.invalidInput {
    color:red;
}
</style>