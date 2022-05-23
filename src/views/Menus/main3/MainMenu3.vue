<template>
  <q-page padding class="bg-blue-grey-1">
    <top-sub-menu-bar />
    <div class="row">
      <q-page>
        <bread-crumbs />
        <router-view />
      </q-page>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import TopSubMenuBar from '/@/components/commons/TopSubMenuBar.vue';
import BreadCrumbs from '/@/components/Commons/BreadCrumbs.vue';
</script>
