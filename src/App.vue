<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <h3>來坐 Come Sit</h3>
    </div>
    <router-view />
=======
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
>>>>>>> e70bf68... init
  </div>
</template>

<style lang="scss">
#app {
<<<<<<< HEAD
  font-family: "Avenir", Helvetica, Arial, sans-serif;
=======
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
>>>>>>> e70bf68... init
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
<<<<<<< HEAD
  padding: 0px;
=======
  padding: 30px;
>>>>>>> e70bf68... init

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
