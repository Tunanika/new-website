<template>
  <div v-if="photo">
    <div @click="showModal = true" class="cursor-pointer">
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

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="showModal = false"
    >
      <div class="relative max-w-4xl max-h-[90vh]" @click.stop>
        <img
          :src="'/photos/' + photo.image"
          :alt="photo.title"
          class="max-h-[90vh] max-w-full object-contain"
        />
        <button
          @click="showModal = false"
          class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 w-6 h-6 text-center items-center justify-center flex"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
const showModal = ref(false);

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

// TODO: Add more photos and make photos clickable to open in a modal
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
