<template>
  <div id="app">
    <TopNav/>
    <router-view/>
  </div>
</template>

<script>
import TopNav from './components/Navs/TopNav/Top'

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>
#app {
  margin-top: 100px;
  
  
}
</style>
