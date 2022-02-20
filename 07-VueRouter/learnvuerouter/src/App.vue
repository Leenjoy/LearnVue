<template>
  <div id="app">
    <!-- tag会更改标签,默认就是<a>标签 -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>

    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about">关于</router-link>
    

    <button @click="homeBtn">首页</button>
    <button @click="aboutBtn">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + userId">用户</router-link>
    <router-link
      :to="{
        path: '/profile',
        query: {
          name: 'why',
          age: 18,
          height: 1.88,
        },
      }"
      >我的</router-link
    > -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 33133,
    };
  },
  methods: {
    homeBtn() {
      this.$router.push("/home");
    },
    aboutBtn() {
      this.$router.push("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: 'kobe',
          age: 17,
          height: 1.88
        }
      })
    }
  },
};
</script>

<style>
.router-link-active {
  color: #f00;
}
.active {
  color: rgb(162, 221, 51);
}
</style>
