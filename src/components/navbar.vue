<template>
  <div class="navbar">
    <el-menu
      default-active="/about"
      class="el-menu-vertical-demo"
      background-color="rgba(0,0,0,0)"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu :index="item.path" v-for="item in list" :key="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>
        <template v-if="item.children">
          <el-menu-item-group>
            <el-menu-item
              :index="e.path"
              v-for="e in item.children"
              :key="e.path"
              @click="to(e.path)"
            >{{ e.name }}</el-menu-item>
          </el-menu-item-group>
        </template>
      </el-submenu>
    </el-menu>
    <!-- <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>-->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      list: [
        {
          name: '主页',
          path: '/',
          children: [
            {
              name: '关于我们',
              path: '/about'
            },
            {
              name: 'dasd',
              path: '/us'
            }
          ]
        },
        {
          name: '黑河',
          path: '/hello'
        },
        {
          name: 'hi',
          path: '/hi'
        }
      ]
    }
  },
  methods: {
    to(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  width: 250px;
  height: 100%;
  background: #666;
}
.el-menu {
  border: none;
}
.el-menu-vertical-demo {
  border: 1px solid red;
}
</style>
