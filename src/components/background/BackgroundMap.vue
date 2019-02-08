<template>
  <div class = "background-map">
    <div class = "image-wrapper">
      <img alt="" :src="require(`@/assets/${this.$store.state.backgroundImage}`)"  v-bind:style="{ opacity: this.$store.state.backgroundOpacity }">
    </div>
     <div class = "image-wrapper" v-if="$store.state.showTopography">
      <img alt="" :src="require(`@/assets/${this.$store.state.backgroundTopography}`)"  v-bind:style="{ opacity: this.$store.state.backgroundOpacity }">
    </div>
    <div class = "image-wrapper" v-for="image in imagePaths" :key="image">
      <img alt="" :src="require(`@/assets/${image}`)">
    </div>
   
  </div>
</template>

<script>


export default {
  name: 'background-map',
  components: {
   
  },
  computed: {
    imagePaths (){
      return this.$store.state.imageLayers;
    }
  }
}
</script>

<style>
  .background-map{
    height:100%;
    width: 100%;
    overflow: hidden;
  }
  .image-wrapper{
    position: absolute;
    height:100%;
    width: 100%;
    overflow: hidden;
  }
  img{
    position: absolute;
    display: block;
    min-height: 100%;
    min-width: 100%;
  }
</style>
