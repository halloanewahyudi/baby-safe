// composables/useSearch.js
import { ref } from 'vue'

export const useSearch = () => {
  const searchResults = ref([])

  const fetchSearchResults = async (query) => {
    if (!query) {
      searchResults.value = []
      return
    }

    try {
      // Memanggil API atau logika lain untuk mendapatkan data pencarian
      const response = await fetch(`/api/search?q=${query}`)
      const data = await response.json()
      searchResults.value = data.results
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return {
    searchResults,
    fetchSearchResults
  }
}
