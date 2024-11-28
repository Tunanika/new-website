<script setup lang="ts">
import photos from "./content/photos.json";
console.log(photos);
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div
      class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div
        class="relative grid grid-cols-1 gap-4 sm:ml-4 sm:grid-cols-2 gap-x-4 gap-y-8"
      >
        <PhotosPhoto
          v-for="photo in photos.items"
          :key="photo.title"
          :photo="photo"
        />
      </div>
    </div>
  </section>
</template>
