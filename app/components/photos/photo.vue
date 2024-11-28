<template>
  <div v-if="photo">
    <img
      :src="'/photos/' + photo.image"
      :alt="photo.title"
      class="rounded-lg border-4 border-muted"
    />
    <div class="flex items-center justify-between flex-row mt-2">
      <h1>{{ photo.title }}</h1>
      <p class="text-gray-400">{{ photo.date }}</p>
    </div>
    <h1 class="text-muted mt-1 text-xs">{{ photo.description }}</h1>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

type photoType = {
  title: string;
  description: string;
  image: string;
  date: string;
};

const props = defineProps({
  photo: {
    type: Object as PropType<photoType>,
    required: true,
  },
});
</script>

<style></style>
