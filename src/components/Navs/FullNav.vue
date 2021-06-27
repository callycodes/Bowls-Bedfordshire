<template>
  
  <div id="full-nav" class="">
    <span class="close font-footer" @click="close">X</span>


  </div>

</template>

<script>

export default {
  methods: {
    close() {
      this.$store.dispatch('setMenu', null);
    }
  },
  components: {
    
  }

}
</script>

<style scoped>

#full-nav {
  position: fixed;
  background-color: var(--prussian-blue);
  z-index: 1100;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

}

.close {
  position: absolute;
  top: 20px;
  right: 0px;
  width: 100px;
  height: 100px;
  color: rgba(255, 255, 255, 1);

  font-size: 100px;
  line-height: 100px;
}

.close:hover {
  color: white;
}

</style>