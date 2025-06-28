<template>
  <div class="flex flex-col gap-2 shadow-xl/20 w-[80%]">
    <div class="text-white">READY</div>
    <div
      ref="map-ref"
      class="w-full h-[500px]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const mapRef = useTemplateRef('map-ref');

onMounted(() => {
  if (mapRef.value) {
    // eslint-disable-next-line no-console
    console.log('ready for integration');
  }
});
</script>
