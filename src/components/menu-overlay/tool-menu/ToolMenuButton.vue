<template>
  <div
    v-b-tooltip.hover.focus.right.d400 :title = "tooltip" :delay="2222"
    class = "tool-menu-button" v-bind:class="{
      'tool-menu-button--active': isActive
    }"
    @click="$emit('button-click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TopMenuButton',
  props: {
    isActive: Boolean,
    name: String,
    tooltip: String,
  },
  computed: {
    },
    methods: {
    }
}
</script>

<style>
  .tool-menu-button{
    border-top: solid 1px;
    border-bottom: solid 1px;
    border-color: #e9ecef;
    width: 8.55vh;
    height: 8vh;
    padding: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tool-menu-button:hover{
     background: #03A9F430;
    /* color: #0086C2;*/
    -webkit-transition: background 0.1s linear;
    -moz-transition: background 0.1s linear;
    -o-transition: background 0.1s linear;
    -ms-transition: background 0.1s linear;
    transition: background 0.1s linear;
    cursor: pointer;
  }
  .tool-menu-button--active{
    background: #03A9F480;
    /*color: #03A9F4;*/
  }
  .tool-menu-button--active:hover{
    background: #03A9F480;
    /*color: #03A9F4;*/
    cursor: pointer;
  }
    

</style>