import { defineStore } from 'pinia'

export const searchStore = defineStore('search', () => {
  const searchItem = {
    title: '',
    type: 'movie',
    number: 10,
    year: '',
    filters: [
      {
        name: 'type',
        items: ['movie', 'series', 'episode']
      },
      {
        name: 'number',
        items: [10, 20, 30]
      },
      {
        name: 'year',
        items: () => {
          const years = []
          const thisYear = new Date().getFullYear()
          for (let i = thisYear; i >= 1985; i--) {
            years.push(i)
          }
          return years
        }
      }
    ]
  }

  return {
    searchItem
  }
})
