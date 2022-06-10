<template>
    <div>
        <h1>404</h1>
        <h2>oops! nothing was found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <router-link to="/students">Return to homepage</router-link>
    </div>
</template>

<style scoped>
div {
    text-align: center;
    margin-top:60px;
}
h1 {
    color: #fe9156;
    font-size:150px;
    font-weight: lighter;
}
h2 {
  text-transform: uppercase;
  font-size:  25px;
  letter-spacing: 4px;
  font-weight: lighter;
}
p {
    line-height: 4;
    opacity: 0.8;
}
a {
    text-decoration: none;
    opacity: 0.6;
    color:red;
}

</style>