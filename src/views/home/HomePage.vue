<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
console.log(t)
</script>

<template>
  <p>{{t('message.home')}}</p>
</template>

<style lang="scss" scoped>
  @import "@/styles/home/index.scss";
</style>
