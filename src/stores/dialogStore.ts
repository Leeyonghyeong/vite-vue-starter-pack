import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DialogController } from '@/types/dialog.Types'

export const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref<boolean>(false)
  const dialog = ref<DialogController>(new DialogController())

  function openDialog({
    title,
    description,
    buttonText,
    isError = false,
    isConfirm = false,
    closeHandler,
    cancelHandler,
    confirmHandler,
  }: {
    title: string
    description: string
    buttonText: string
    isError?: boolean
    isConfirm?: boolean
    closeHandler?: () => void
    cancelHandler?: () => void
    confirmHandler?: () => void
  }) {
    dialog.value.setTitle(title)
    dialog.value.setDescription(description)
    dialog.value.setButtonText(buttonText)
    dialog.value.setIsError(isError)
    dialog.value.setIsConfirm(isConfirm)

    if (closeHandler) {
      dialog.value.setCloseHandler(() => {
        closeHandler()
        closeDialog()
      })
    } else {
      dialog.value.setCloseHandler(() => {
        closeDialog()
      })
    }

    if (cancelHandler) {
      dialog.value.setCancelHandler(() => {
        cancelHandler()
        closeDialog()
      })
    } else {
      dialog.value.setCancelHandler(() => {
        closeDialog()
      })
    }

    if (confirmHandler) {
      dialog.value.setConfirmHandler(() => {
        confirmHandler()
        closeDialog()
      })
    } else {
      dialog.value.setConfirmHandler(() => {
        closeDialog()
      })
    }

    isOpen.value = true
  }

  function closeDialog() {
    isOpen.value = false
  }

  return { isOpen, dialog, openDialog, closeDialog }
})
