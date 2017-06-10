<template>
  <div id="app">

  <div class="container">
    <div class="row" >
  <NavMenu class="col-xs-3 col-sm-3 col-md-2" id="navbar"></NavMenu>
  <router-view class="col-xs-9 col-sm-9 col-md-10" id="mainview"></router-view>
    
  </div>
  </div>

  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'
// import NavDropdown from './NavDropdown.vue'
export default {
  name: 'app',
  components: {
    NavMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

html,
body {
    overflow: hidden;
    margin: 0px;
    width: 100%;
    height: 100%;
}

#mainview {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100vh;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: auto;
    -webkit-overflow-scrolling : touch;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  /*margin-top: 60px;*/
}

.container {
  width: 100%
}

.navbar {
  background-color: #efefef;
  height: 100vh;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

@media(max-width:575px) {
  .navbar {
    height: 50px;
    width: 100%;
  }
  .navbar span {
    display: none;
  }
}

</style>
