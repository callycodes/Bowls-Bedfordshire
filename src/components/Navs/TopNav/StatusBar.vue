<template>
<div id="status-bar" class="w-100">
  <div id="socials-section" class="w-25">
    <div class="icon-list align-middle">
      <b-icon icon="facebook" color="white"></b-icon>
      <b-icon icon="facebook" color="white"></b-icon>
    </div>
  </div>

  <div id="updates-section" class="w-75">
  </div>
</div>
</template>

<script>

export default {
    name: "NewsHolder"
}
</script>

<style lang="css">

#status-bar {

  width: 100%;
  height: 35px;
  display: flex;
}

#socials-section {
  min-width: 25%;
  height: 100%;
  background-color: var(--royal-blue);
  text-align: center;
}

.icon-list {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
}

#updates-section {
  width: 75%;
  height: 100%;
  background-color: var(--golden-yellow);
}

</style>