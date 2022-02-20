<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- slot标签需要添加属性时，多套一层div,将属性写在div上 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
        return{
          // isActive: false
        }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true 
        // /home -> item2(/categoty) = false
        // /home -> item3(/profile) = false
        // /home -> item4(/shopcart) = false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        console.log("print")
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    background-color: #f6f6f6;
    font-size: 14px;
    
  }

  .tab-bar-item img {
    margin-top: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
</style>