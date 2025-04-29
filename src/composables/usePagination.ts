import { Page } from '@/types/page.Types'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export const usePagination = () => {
  const route = useRoute()

  const pageIndex = ref<number>(1)
  const pageSize = ref<number>(10)
  const page = ref<Page>()

  const totalPage = computed(() => (page.value ? page.value.totalPage : 0))

  function updatePaginationFromRoute() {
    const { page: routePage, size: routeSize } = route.query

    pageIndex.value = routePage ? parseInt(routePage.toString()) : 1
    pageSize.value = routeSize ? parseInt(routeSize.toString()) : 10
  }

  // 라우트 변경될 때마다 pageIndex, pageSize 업데이트
  watch(() => route.query, updatePaginationFromRoute, { immediate: true })

  return { pageIndex, pageSize, page, totalPage, updatePaginationFromRoute }
}
