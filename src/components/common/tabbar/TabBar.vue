<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    /* 定位到页面底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

  /*  界面过渡*/
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  }


</style>
