<template>
  <div id="home">
    <div class="welcome-image w-100">
      <img :src="photos.main"/>
    </div>

    <!--<div v-html="getDB.collection('information').doc('home').get().data()"></div>-->
    <h1>Test: <span v-html="information.welcome"></span></h1>
    
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    <h1>Wow</h1>
    
    <h1>Wow</h1>

  </div>
  
</template>

<script>

import { db } from '../firebase'

export default {
  data () {
    return {
      information: 'nice',
      photos: []
    }
  },
  methods: {
  
  },
  components: {
  },
  firestore () {
    return {
      information: db.collection('information').doc('home'),
      photos: db.collection('photos').doc('home')
    }
  }



}
</script>

<style scoped>

.welcome-image {
  height: 40em;
  background-size: cover;
  width: 100%;
  overflow: hidden;
}

.welcome-image img {
  height: 100%;
  width: 100%;
  object-fit:cover;
}
</style>