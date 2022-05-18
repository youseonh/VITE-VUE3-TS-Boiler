<script setup lang="ts">
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
        <q-btn flat label="Title" />
        <q-space />
        <q-btn-dropdown stretch flat label="Dropdown">
          <q-list>
            <q-item-label header>Folders</q-item-label>
            <q-item
              v-for="n in 3"
              :key="n"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <q-btn stretch flat label="Link" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Link" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="메뉴1" />
        <q-route-tab to="/page2" label="메뉴2" />
        <q-route-tab to="/page3" label="메뉴3" />
      </q-tabs>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
    </q-drawer> -->

    <q-page-container>
      <!-- <router-view /> -->
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>alert 영역?</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
