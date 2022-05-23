<template>
  <!-- <q-page-sticky expand position="top"> -->
  <q-toolbar class="GPLAY__sticky bg-white q-px-xl shadow-1">
    <q-tabs align="left">
      <q-route-tab to="/menu3/submenu1" label="서브메뉴1" />
      <q-route-tab to="/menu3/submenu2" label="서브메뉴2" />
      <q-route-tab to="/menu3/submenu3" label="서브메뉴3" />
    </q-tabs>
    <q-space />
    <q-btn icon="help" dense flat size="12px" class="GPLAY__sticky-help" />
    <q-btn
      icon="settings"
      dense
      flat
      class="GPLAY__sticky-settings q-ml-md"
      size="12px"
    />
  </q-toolbar>
  <!-- </q-page-sticky> -->
</template>

<script setup lang="ts"></script>
