<template>
  <q-page padding class="bg-blue-grey-1">
    <bread-crumbs />
    <top-sub-menu-bar />
    <q-page>
      <router-view />
    </q-page>
  </q-page>
</template>
<script setup lang="ts">
import TopSubMenuBar from '/@/components/commons/TopSubMenuBar.vue';
import BreadCrumbs from '/@/components/Commons/BreadCrumbs.vue';
</script>
