<template>
  <div
    class="relative w-full border-[1px] p-2 flex items-center gap-x-2 rounded-md"
    :class="{
      'border-black': isFocus,
      'border-secondary-900': isError,
      'flex-row-reverse': isReverse,
      'bg-gray-200': isDisabled,
    }"
  >
    <input
      class="flex-1 bg-inherit border-none h-[22px]"
      :class="isPc ? 'text-base' : 'text-sm'"
      v-model="model"
      :id
      :type
      :placeholder
      autocomplete="off"
      :disabled="isDisabled"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <div
      v-if="isError"
      class="absolute bg-[rgba(194,29,35,0.6)] left-1 top-[35px] text-white px-2 py-1 rounded shadow-lg text-xs font-black z-10"
    >
      <div
        class="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-[rgba(194,29,35,0.6)] top-[-6px] left-2"
      ></div>
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDevice } from '@/composables/useDevice'
import { ref } from 'vue'
withDefaults(
  defineProps<{
    type: string
    placeholder?: string
    id?: string
    isError?: boolean
    errorMessage?: string
    isReverse?: boolean
    isDisabled?: boolean
  }>(),
  { isError: false, errorMessage: '', isReverse: false, isDisabled: false }
)

const { isPc } = useDevice()

const model = defineModel<number>({ required: true })

const isFocus = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
