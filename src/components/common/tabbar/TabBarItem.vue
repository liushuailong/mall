<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
<!--    <slot></slot>-->
  </div>
</template>

<script lang="ts">
  export default {
    name: "TabBarItem",
    data () {
      return {
        // isActive: true
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red',
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive():boolean {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle():object {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .active {
    color: red;
  }

</style>
