<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el
        v-for="(routeObj, idx) in route.matched"
        :key="idx"
        :label="String(routeObj.name)"
        :to="routeObj.path"
      />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
// 라우터
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('[BreadCrumbs.vue > route] => ', route);
</script>
