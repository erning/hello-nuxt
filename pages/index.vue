<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button>Default Button</el-button>
        <el-button type="primary">Primary Button</el-button>
        <el-button type="text">Text Button</el-button>
      </el-col>
    </el-row>

    <h1 class="red">Hello world!</h1>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<style scoped>
.red {
  color: #0000ff;
}
</style>

<script>
export default {
  head: {
    title: 'Home page 🚀',
  },
  data () {
    return {
    }
  }
}
</script>
