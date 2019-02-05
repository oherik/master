<template>
  <div class = "imageswitch-buttons">
    <b-button-group horizontal>
      <b-button @click="$store.commit('setBackgroundImage','logo.png')"> Vue-loggan </b-button>
      <b-button @click="$store.commit('setBackgroundImage','hej.png')"> Hej :D </b-button>
      <vue-slider ref="slider" v-model="value"></vue-slider>
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
   
  },
  data: function() {
    return {
        value: 1
      };
    }
}

</script>

<style>
  .mageswitch-buttons{
   
  }


</style>  