<template>
  <QList>
    <QItemLabel header> Danx Menu</QItemLabel>
    <EssentialLink v-for="link in navList" :key="link.title" v-bind="link" />
  </QList>
</template>
<script setup lang="ts">
import EssentialLink from 'components/Navigation/EssentialLink.vue';
import navList from 'components/Navigation/main.nav';
</script>
