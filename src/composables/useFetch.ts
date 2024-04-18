import { ref } from 'vue'

// Data is the type of the data we want to fetch (e.g. a list of users) T generic

export function useFetch<Data>(url: string) {
  const data = ref<Data | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref<boolean>(true)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données.')
      }
      data.value = await response.json()
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Oops! Something went wrong.'
      }
    } finally {
      isLoading.value = false
    }
  }

  fetchData()

  return { data, error, isLoading }
}
