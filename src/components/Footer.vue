<template>

  <div class="footer-container">
    <div id="footer" class="w-100">
      
      <img src="../assets/img/img-menu.png" class="logo-image"/>
      
      <div class="socials-strip">
        <b-icon icon="facebook"></b-icon>
        <b-icon icon="twitter"></b-icon>
        <b-icon icon="youtube"></b-icon>
      </div>

      <div class="info-strip">

        <b-icon icon="geo-alt-fill"></b-icon>
      <b-icon icon="envelope-fill"></b-icon>
      </div>

      <div class="location-container">
        <span class="font-title">Find Us:</span><br>
        <span>10 Hitchin Rd<br>Shefford<br>SG17 5JA</span>
      </div>
        
    </div>

    <div id="made-by" class="w-100">
      <span class="font-title">DEVELOPED BY CALLY.DEV</span>
    </div>

  </div>
  

</template>

<script>

export default {
  
  components: {
  }

}
</script>

<style scoped>

#footer {
  height: 100px;
  background-color: var(--indigo-blue);
  bottom:25px;
  left: 0px;
}

#made-by {
  height: 25px;
  background-color: var(--prussian-blue);
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}

#made-by span {
  float: right;
  color: white;
  font-size: 15px;
  line-height: 25px;
  margin-right: 10px;

}

#footer .logo-image {
  float: left;
  padding: 20px;
}

.socials-strip {
  float: left;
  height: 100%;
  width: 50px;
  background-color: var(--prussian-blue);
  padding-top: 15px;
}

.socials-strip svg {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 15px;
  fill: white;
  margin-bottom: 3px;
}

.info-strip {
  float: left;
  height: 100%;
  width: 50px;
  background-color: var(--golden-yellow);
  padding-top: 15px;
}

.info-strip svg {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 15px;
  fill: var(--prussian-blue);
  margin-bottom: 3px;
}

.location-container {
  padding-left: 25px;
  padding-top: 8px;
  color: white;
  float: left;
  height: 100%;
  width: 150px;
}

.location-container {
  font-size: 15px;
}

.location-container span {
  font-size: 15px;
}

.location-container .font-title {
  font-size: 20px;
  line-height: 12px;
}

</style>