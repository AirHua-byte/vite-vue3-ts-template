<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import { useRouter } from 'vue-router';
// import { getCurrentInstance } from 'vue'
// const router = useRouter()

// const {proxy}:any = getCurrentInstance()
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <el-button type="default">test</el-button>
    <router-link to="/home">首页</router-link>
    <router-link to="/mine">我的</router-link>
    <router-view></router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
