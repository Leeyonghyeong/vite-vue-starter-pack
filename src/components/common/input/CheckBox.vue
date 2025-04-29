<template>
  <div class="relative flex items-center overflow-visible">
    <input
      v-model="model"
      :id
      type="checkbox"
      class="cursor-pointer size-5 appearance-none border-[1px] bg-white rounded checked:border-primary checked:bg-[url('/icon/checkbox.png')] bg-center bg-cover bg-no-repeat disabled:bg-gray-200"
      :disabled
    />

    <div
      v-if="isError"
      class="absolute bg-[rgba(194,29,35,0.6)] left-1 top-[30px] text-white px-2 py-1 rounded shadow-lg text-xs font-black z-10 whitespace-nowrap"
    >
      <div
        class="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-[rgba(194,29,35,0.6)] top-[-6px] left-2"
      ></div>
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    id: string
    disabled?: boolean
    isError?: boolean
    errorMessage?: string
  }>(),
  {
    disabled: false,
    isError: false,
    errorMessage: '',
  }
)

const model = defineModel<boolean>({ required: true })
</script>

<style lang="scss" scoped></style>
