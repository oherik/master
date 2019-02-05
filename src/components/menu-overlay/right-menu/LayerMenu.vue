<template>
 <div class = "layer-menu" v-if="this.$store.state.showLayerMenu">
    haj
  </div>
</template>

<script>

export default {
  name: 'LayerMenu',
  components: {
    
  },
  computed: {
      
  },
  methods: {
   
  }
}
//f8fbfc
//#03A9F4
</script>

<style>
  .layer-menu{
    background: #f8fbfc; 
    color: rgba(0,0,0,0.87);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    border-left: solid 1px;
    border-color: #e9ecef;
    z-index: 10;
  }
</style>