<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <!-- <q-breadcrumbs-el
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        :label="breadcrumb.name"
        :to="breadcrumb.path"
      /> -->
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from "vue";

const currentInstance = getCurrentInstance();

onMounted(() => {
  if (currentInstance && currentInstance.proxy) {
    console.log(currentInstance.proxy.$router);
  }
});
</script>
