<template>
  <div class="home">
    <navbar></navbar>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
// @ is an alias to /src

export default {
  components: { navbar },
  name: "Home",
  methods: {
    send() {
      this.$axios.getdata().then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
<style lang="less">
.home {
  display: flex;
  height: 100%;
  background: #333;
}
.box {
  height: 100%;
}
</style>
