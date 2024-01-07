<template>
  <QLayout view="lHh Lpr lFf">
    <QHeader elevated>
      <QToolbar>
        <QBtn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleDrawer"
        />

        <QToolbarTitle> Danx App </QToolbarTitle>

        <div>Quasar v{{ $q.version }}</div>
      </QToolbar>
    </QHeader>

    <QDrawer v-model="isNavOpen" show-if-above bordered>
      <MainNavigation />
    </QDrawer>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import MainNavigation from 'components/Navigation/MainNavigation.vue';
// import { getItem, setItem } from 'src/helpers/storage';

const isNavOpen = ref(false); //getItem('main-nav-open'));

function toggleDrawer() {
  isNavOpen.value = !isNavOpen.value;
  // setItem('main-nav-open', isNavOpen.value);
}
</script>
