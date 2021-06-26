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
  },
  created () {
    window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
  methods: {
    handleResize() {
            this.$store.dispatch('setWindow', { width: window.innerWidth, height: window.innerHeight});
        }
  }
}
</script>

<style>
#app {
  margin-top: 100px;
  
  
}
</style>
