<template>

  <div id="competitions">
  <h1> wow</h1>
    <span v-for="c in main_competitions" :key="c.id">{{c.id}}</span>
    

  </div>
  
</template>

<script>

import { db } from '../firebase'

export default {
  data () {
    return {
      main_competitions: []
    }
  },
  methods: {
  
  },
  components: {
  },
  firestore () {
    return {
      main_competitions: db.collection('competitions').doc('Main').collection('events'),
    }
  }



}
</script>

<style scoped>

#competitions {
padding-top: 100px;
min-height: 800px;
}

</style>