<script setup lang="ts">
import { useFetch } from '../../composables/useFetch'
import { User } from '../../types/api.Types'

const { data: users, error: fetchUserError } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
</script>

<template>
  <h1 class="font-bold py-8" data-testid="hello-world-test">Hello World</h1>
  <div>
    <p v-if="fetchUserError">{{ fetchUserError }}</p>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="person in users"
        :key="person.id"
        class="relative flex items-center space-x-3 rounded-lg border bg-white/10 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:bg-teal-700"
      >
        <div class="flex-shrink-0">
          <!-- <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" /> -->
        </div>
        <div class="min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-white">{{ person.name }}</p>
            <p class="truncate text-sm text-gray-300">{{ person.email }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
