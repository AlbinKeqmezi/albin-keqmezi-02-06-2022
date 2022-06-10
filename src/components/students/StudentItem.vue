<template>
  <li>
    <div class="usersData">
        <div class="data">
          <img :src="profilePic" alt="">
            <p><b>{{index}}</b></p>
            <p><b>{{fullName}}</b></p>
            <p>{{birthDate}}</p>
            <p>{{municipality}}</p>
        </div>
        <div class="actions">
          <router-link :to="edit">Edit</router-link>
          <router-link :to="to">Delete</router-link>
        </div>
    </div>
  </li>
</template>

<script>

export default {
    props:['profilePic','index','firstName','lastName','birthDate','municipality'],
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
      to() {
      return '/students/' + this.index + '/delete';
      },
      edit() {
        return '/students/' + this.index + '/edit';
      }
    },
}
</script>

<style scoped>
*{
  list-style: none; 
  text-decoration: none;
  padding:0;
  margin:0;
}

.usersData {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 2px solid #eeeff4;
  padding: 0.5rem;
}
.data{
  width: 60%;
  display: flex;
  justify-content:space-between;
  line-height: 3;
  text-align: left;
}
.data img{
  margin-top:15px;
  height: 40px;
}

.data p {
  margin-top: 10px;
  width:120px;
}
.actions {
  margin-top: 25px;
}
.actions a {  
  border:none;
  border-radius: 5px;
}
.actions a:nth-child(1){
  color:white;
  background-color: #103c82;
  margin-right: 10px;
  padding: 0.6rem 1.5rem;
}
.actions a:nth-child(2){
  background-color: #fff;
  border: 1px solid black;
  padding: 0.5rem 1rem;
}


</style>