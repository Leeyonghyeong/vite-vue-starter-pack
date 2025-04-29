<template>
  <TransitionRoot appear :show="dialogStore.isOpen" as="template">
    <Dialog as="div" @close="dialogStore.dialog.closeHandler" class="relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                {{ dialogStore.dialog.title }}
              </DialogTitle>
              <DialogDescription class="text-sm text-gray-500">{{ dialogStore.dialog.description }}</DialogDescription>

              <div v-if="!dialogStore.dialog.isConfirm" class="mt-4 flex justify-end">
                <div v-if="!dialogStore.dialog.isError" class="w-1/4">
                  <PrimaryToWhiteButton
                    :text="dialogStore.dialog.buttonText"
                    @click="dialogStore.dialog.closeHandler"
                  />
                </div>

                <div v-else class="w-1/4">
                  <SecondaryToWhiteButton
                    :text="dialogStore.dialog.buttonText"
                    @click="dialogStore.dialog.closeHandler"
                  />
                </div>
              </div>
              <div v-else class="mt-4 flex justify-end gap-2">
                <div class="w-1/4">
                  <SecondaryToWhiteButton text="취소" @click="dialogStore.dialog.cancelHandler" />
                </div>
                <div class="w-1/4">
                  <PrimaryToWhiteButton text="확인" @click="dialogStore.dialog.confirmHandler" />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import PrimaryToWhiteButton from '@/components/common/button/PrimaryToWhiteButton.vue'
import SecondaryToWhiteButton from '@/components/common/button/SecondaryToWhiteButton.vue'
import { useDialogStore } from '@/stores/dialogStore'
import { Dialog, DialogDescription, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const dialogStore = useDialogStore()
</script>

<style lang="scss" scoped></style>
