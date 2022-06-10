<template>
    <div v-if="showDialog" class="backdrop" @click="close"></div>
       <div>
        <transition name="dialog">
        <dialog open v-if="showDialog">
        <header>
            <h2>Delete Confirmation</h2>
        </header>
        <section>
            <div>
                <p>Are you sure you want want to delete the selected user?</p>
                <p>This action cannot be undone.</p>
            </div>
        </section>
        <hr>
        <footer>
            <button @click="close">Cancel</button>
            <button @click="deleteStudent">Yes</button>
        </footer>
    </dialog>
    </transition>
  </div>
  
</template>

<script>
export default {
    props:['index'],
    data() {
        return {
            showDialog: true,
        }
    },
    computed: {
        students() {
            return this.$store.getters['students/students'];
        },
    },
    methods: {
        deleteStudent(index) {
            index=this.index;
            this.$store.dispatch('students/deleteStudent',index);
            this.$router.replace('/students');
            this.showDialog = false;
        },
        close() {
            this.showDialog = false;
            this.$router.replace('/students');
        },
    },
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

section {
  height: 150px;
  padding: 1rem;
}
section div {
    margin-top:3rem;
    line-height: 2;
}


footer {
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

  dialog {
    left: 25rem;
    width: 40rem;
}

</style>