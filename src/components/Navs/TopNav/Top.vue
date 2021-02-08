<template>
  
  <div id="top-nav" class="fixed-top w-100">
    <StatusBar/>
    <NavigationBar/>

  </div>

</template>

<script>
import StatusBar from './StatusBar'
import NavigationBar from './NavigationBar'

export default {
  
  components: {
    StatusBar,
    NavigationBar
  }

}
</script>

<style scoped>

#top-nav {
  display: block;
}

</style>