<template>
  <q-page padding class="bg-blue-grey-1">
    <bread-crumbs />
    <div class="row">
      <div class="col-3 q-pa-sm"><BasicCard /></div>
      <div class="col-6 q-pa-sm"><BasicCard /></div>
      <div class="col-3 q-pa-sm"><BasicCard /></div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import BreadCrumbs from '/@/components/Commons/BreadCrumbs.vue';
import BasicCard from '/@/components/cards/BasicCard.vue';
</script>
