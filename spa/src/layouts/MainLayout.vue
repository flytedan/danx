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

    <QDrawer v-model="isNavOpen" bordered>
      <MainNavigation />
    </QDrawer>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<script lang="ts" setup>
import { getItem, setItem } from 'src/helpers/storage';
import MainNavigation from 'components/Navigation/MainNavigation.vue';
import { ref } from 'vue';

const isNavOpen = ref(getItem('main-nav-open'));

function toggleDrawer() {
  isNavOpen.value = !isNavOpen.value;
  setItem('main-nav-open', isNavOpen.value);
}
</script>
