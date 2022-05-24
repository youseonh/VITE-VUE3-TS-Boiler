<template>
  <q-page padding class="bg-blue-grey-1">
    <bread-crumbs />
    <p v-for="n in 15" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
      praesentium molestias a adipisci, dolore vitae odit, quidem consequatur
      optio voluptates asperiores pariatur eos numquam rerum delectus commodi
      perferendis voluptate?
    </p>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts" async>
import BreadCrumbs from '@components/Commons/BreadCrumbs.vue';
import { onMounted, onUpdated, onUnmounted } from 'vue';

onMounted(() => {
  console.log('mounted!');
});
onUpdated(() => {
  console.log('updated!');
});
onUnmounted(() => {
  console.log('unmounted!');
});
</script>

<style lang="scss"></style>
