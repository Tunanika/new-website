<script setup lang="ts">
import photos from "public/photos.json";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const sortOption = ref("date-desc");

const sortOptions = computed(() => [
  { value: "date-desc", label: t("global.sort.date_desc") },
  { value: "date-asc", label: t("global.sort.date_asc") },
  { value: "title-asc", label: t("global.sort.title_asc") },
  { value: "title-desc", label: t("global.sort.title_desc") },
]);

const sortedPhotos = computed(() => {
  const items = [...photos.items];

  switch (sortOption.value) {
    case "date-desc":
      return items.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "date-asc":
      return items.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    case "title-asc":
      return items.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return items.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return items;
  }
});
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

    <!-- Sort Dropdown -->
    <div class="mb-6 flex justify-end">
      <USelect
        v-model="sortOption"
        :options="sortOptions"
        variant="none"
        class="w-48"
        placeholder="Sort by..."
      />
    </div>

    <div
      class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div
        class="relative grid grid-cols-1 gap-4 sm:ml-4 sm:grid-cols-2 gap-x-4 gap-y-8"
      >
        <PhotosPhoto
          v-for="photo in sortedPhotos"
          :key="photo.title"
          :photo="photo"
        />
      </div>
    </div>
  </section>
</template>
