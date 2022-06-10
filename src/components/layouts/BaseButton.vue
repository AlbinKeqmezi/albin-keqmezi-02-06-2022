<template>

    <button v-if="!link">
        <slot></slot>
    </button>

    <router-link v-else :to="to">
        <slot></slot>
    </router-link>
    
</template>

<script>
export default {
    props:{
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>

button, 
a {
    border:none;
    background-color: #103c82;
    color:white;
    border-radius: 5px;
    text-decoration: none;
    padding: 1rem;
    cursor: pointer;
    min-width: 120px;
}

</style>