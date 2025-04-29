import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useSearch = () => {
  const route = useRoute()
  const router = useRouter()

  const { searchKeyword: routeSearchKeyword } = route.query

  const searchKeyword = ref<string>(routeSearchKeyword ? routeSearchKeyword.toString() : '')

  const onClickSearchButton = () => {
    if (!searchKeyword.value) {
      router.push({
        path: route.path,
        query: { ...route.query, searchKeyword: undefined, page: 1 },
      })
      return
    }

    router.push({
      path: route.path,
      query: { ...route.query, searchKeyword: searchKeyword.value, page: 1 },
    })
  }

  return { searchKeyword, onClickSearchButton }
}
