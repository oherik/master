<template>
 <div class = "type-menu">
   <area-menu v-if="this.$store.state.activeTool == 'area'"></area-menu>
   <line-menu v-if="this.$store.state.activeTool == 'line'"></line-menu>
  </div>
</template>

<script>
import AreaMenu from './AreaMenu.vue'
import LineMenu from './LineMenu.vue'

export default {
  name: 'TypeMenu',
  components: {
    AreaMenu,
    LineMenu,
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
  .type-menu{
    height: 100%;
    background: #f8fbfc; 
    color: rgba(0,0,0,0.87);
    border-right: solid 1px;
    border-color: #e9ecef;
    padding: 1vh;
  }
  

</style>