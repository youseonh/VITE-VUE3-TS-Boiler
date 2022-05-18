<script setup lang="ts">
// setup 은 Component 가 생성되기 전에 Component 의 Option 으로 Composite API 의 진입점 역할을 도와주게 됩니다. this 를 호출할 수 없습니다.
import { ref, onMounted } from "vue";
// 다국어
import { useI18n } from "vue-i18n";
import { LocaleSupports } from "/@/locales/locales";

onMounted(() => {
  const { locale, t, n } = useI18n();
  const localeSupports = LocaleSupports;
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
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
