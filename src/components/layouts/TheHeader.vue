<template>
    <div v-if="isLoggedIn">
        <header class="header">
            <nav>
                <ul class="nav">
                    <li><router-link to="/students">Students</router-link></li>
                    <li><router-link to="/">Contact</router-link></li>
                    <li><router-link to="/">About</router-link></li>
                    <li><router-link to="/">Help</router-link></li>
                    <li><router-link to="/authentication" v-if="isLoggedIn" @click="logout">Logout</router-link></li>
                </ul>
            </nav>

            <div class="profile">
                <img :src="logoImg">
                <p>{{loggedStudent}}</p>
            </div> 
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logoImg: 'data:image/png;base64,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',
       }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
        loggedStudent() {
            return this.$store.getters.activeStudent;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.replace('/authentication');
        },
    },
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: sans-serif;
  text-decoration: none;
}
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e9ebf0;
}
.nav {
  margin:30px;
}
.nav li{
  display: inline;
  margin: 0 20px;
}
.profile{
display: flex;
}
.profile img{
  height: 40px;
  border-radius: 8px;
  margin-top: 20px;
}
.profile p{
  margin: 30px 15px 0 10px;
}
</style>