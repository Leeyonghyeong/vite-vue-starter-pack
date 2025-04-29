<template>
  <div :class="isPc ? 'page-pc' : 'page-mobile'">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useDevice } from '@/composables/useDevice'

const { isPc } = useDevice()
</script>

<style lang="scss" scoped></style>
