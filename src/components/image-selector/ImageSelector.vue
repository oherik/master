<template>
  <div class = "imageswitch-buttons">
    <b-button-group horizontal>
      <b-button @click="$store.commit('setActiveImagePath','logo.png')"> Vue-loggan </b-button>
      <b-button @click="$store.commit('setActiveImagePath','hej.png')"> Hej :D </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'ImageSelector',
  components: {
    
  },
  computed: {
      
  },
  methods: {
   
  }
}

</script>

<style>
  .mageswitch-buttons{
   
  }


</style>  