<template>
  <QItem tag="RouterLink" clickable :to="to">
    <QItemSection v-if="icon" avatar>
      <QIcon :name="icon" />
    </QItemSection>

    <QItemSection>
      <QItemLabel>{{ title }}</QItemLabel>
      <QItemLabel caption>{{ caption }}</QItemLabel>
    </QItemSection>
  </QItem>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  to: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
});
</script>
