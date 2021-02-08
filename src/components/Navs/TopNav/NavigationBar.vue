<template>
<div id="navigation-bar" class="w-100">
  <div id="logo-section">
    <div class="logo-image"></div>
    <div class="logo-text">
      Bowls<br>Bedfordshire
      </div>
   
  </div>

  <div id="menu-section">
  </div>
</div>
</template>

<script>

export default {
}
</script>

<style lang="css">

#navigation-bar {
  height: 80px;
  display: flex;
  background-color: white;
  border-bottom: 1px solid black;
  /*background-image: url('/assets/svg/TopNavBG.svg')*/
}

#logo-section {
  height: 100%;
  width: 35%;
  text-align: center;
  margin: auto;
}

.logo-image {
  background-color: grey;
  width: auto;
  max-height: 100%;
  background-image: url('../../../assets/img/logo.png') cover
}

.logo-text {
  text-align: left;
}

#menu-section {
  height: 100%;
  width: 65%;
  background-color: purple;
}

</style>