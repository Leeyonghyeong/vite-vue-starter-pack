<template>
  <button
    class="w-full h-10 flex justify-center items-center bg-primary-900 text-white rounded-md cursor-pointer font-semibold transition-all duration-700 box-border border-[1px] border-primary-900 hover:bg-white hover:text-primary-900"
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
