<template>
  <div id="app">

    <transition name="slide" >
      <FullNav v-if="getMenuState() != null"/>
    </transition>

    <TopNav/>

    

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <Footer/>

  </div>
</template>

<script>
import TopNav from './components/Navs/TopNav/Top'
import Footer from './components/Footer'
import FullNav from './components/Navs/FullNav'

export default {
  name: 'App',
  components: {
    TopNav,
    Footer,
    FullNav
  },
  created () {
    window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
  methods: {
    getMenuState() {
      return this.$store.state.menu;
    },
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

.slide-enter-active {
  animation: slide-in 0.25s ease-out;
}

.slide-leave-active {
  animation: slide-in 0.25s reverse;
}

@keyframes slide-in {
  0% {
    left: 100%;
  }
  100% {
   left: 0px;
  }
  
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
