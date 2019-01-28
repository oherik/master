<template>
  <div class = "top-menu-button" v-bind:class="{
    'top-menu-button--active': isActive,
    'top-menu-button--disabled': isDisabled
    }"
    @click="$emit('button-click')">
    <div class = "top-menu-button__image">
      <slot></slot>
    </div>
    <div class = "top-menu-button__text">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'TopMenuButton',
  props: {
    name: String,
    isActive: Boolean,
    isDisabled: Boolean,
  },
  computed: {
    },
    methods: {
    }
}
</script>

<style>
  .top-menu-button{
    border-left: solid 1px;
    border-right: solid 1px;
    border-color: #ffffff40;
    display: flex;
    flex-direction: column;
    width: 8vh;
    padding: 1vh;
  }
  .top-menu-button:hover{
    background: #03A9F440;
    -webkit-transition: background 0.1s linear;
    -moz-transition: background 0.1s linear;
    -o-transition: background 0.1s linear;
    -ms-transition: background 0.1s linear;
    transition: background 0.1s linear;
    cursor: pointer;
  }
  .top-menu-button--active{
    background: #03A9F4;
  }
  .top-menu-button--active:hover{
    background: #03A9F4;
    cursor: pointer;
  }
  .top-menu-button--disabled{
    color: #ffffff40;
  }
  .top-menu-button--disabled:hover{
    background: #00000000;
    cursor: not-allowed;
  }

  .top-menu-button__image{
    flex: 2;
    width: 100%;
  }

  .top-menu-button__text{
    flex: 1;
    width: 100%;
  }
    
    

</style>