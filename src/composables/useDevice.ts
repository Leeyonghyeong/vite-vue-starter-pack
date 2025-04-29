import { onMounted, ref } from 'vue'

export const useDevice = () => {
  const deviceWidth = ref<number>(0)
  const isPc = ref<boolean>(false)

  deviceWidth.value = window.innerWidth

  const setWindowDeviceType = () => {
    if (deviceWidth.value < 1140) {
      isPc.value = false
    } else {
      isPc.value = true
    }
  }

  setWindowDeviceType()

  onMounted(() =>
    window.addEventListener('resize', () => {
      deviceWidth.value = window.innerWidth

      setWindowDeviceType()
    })
  )

  return { isPc }
}
