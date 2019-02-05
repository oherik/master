<template>
  <div class = "background-map">
    <img alt="" :src="require(`@/assets/${this.$store.state.backgroundImage}`)"  v-bind:style="{ opacity: this.$store.state.backgroundOpacity }">
  </div>
</template>

<script>


export default {
  name: 'background-map',
  components: {
   
  }
}
</script>

<style>
  .background-map{
    height:100%;
    width: 100%;
  }
</style>
