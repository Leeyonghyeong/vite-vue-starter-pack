<template>
  <button
    class="w-full h-10 flex justify-center items-center bg-white text-primary rounded-md cursor-pointer font-semibold transition-all duration-700 box-border border-[1px] border-white hover:bg-primary hover:text-white"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  text: string
}>()
</script>

<style lang="scss" scoped></style>
