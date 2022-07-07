<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useI18n } from 'vue-i18n'

const value1 = ref('')
const { locale } = useI18n()
const elementLocale = ref(zhCn)
const changeLang = (language: any) => {
  elementLocale.value = language
  locale.value = (language.name === 'zh-cn' ? 'zh' : 'en')
}
</script>

<template>
<el-config-provider :locale="elementLocale">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/home">首页</router-link>
    <router-link to="/mine">我的</router-link>
    <el-button @click="changeLang(zhCn)">中文</el-button>
    <el-button @click="changeLang(en)">英文</el-button>
    <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    <router-view></router-view>
</el-config-provider>
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
