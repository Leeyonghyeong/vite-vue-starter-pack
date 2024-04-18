<script setup lang="ts">
import { reactive, ref, Ref } from 'vue'

defineProps<{ msg: string }>()
const divShow: Ref<boolean> = ref(false)
const state = reactive({
  countMet: {
    count: 0,
  },
})

const toggleDiv = () => {
  divShow.value = !divShow.value
}

const increment = () => {
  state.countMet.count += 12
}
</script>

<template>
  <div class="flex justify-center items-center h-10 py-10">
    <h1 data-testid="message-test" class="text-teal-400" v-if="divShow">{{ msg }}</h1>
    <p data-testid="count-test" class="text-3xl font-bold text-pink-200" v-else>{{ state.countMet.count }}</p>
  </div>

  <div class="h-10">
    <div class="flex justify-center gap-8">
      <button
        class="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        data-testid="show-message-test"
        type="button"
        @click="toggleDiv"
      >
        Toggle {{ divShow ? 'on' : 'off' }}
      </button>
      <button
        class="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        data-testid="increment-test"
        type="button"
        @click="increment"
        :disabled="divShow"
      >
        increment
      </button>
    </div>
    <p class="pt-4">{{ msg }}</p>
  </div>
</template>

```
