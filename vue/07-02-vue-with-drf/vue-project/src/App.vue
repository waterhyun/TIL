<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'ArticleView' }">Articles</RouterLink> |
      <RouterLink :to="{ name: 'SignUpView' }">SignUpView</RouterLink> |
      <RouterLink :to="{ name: 'LogInView' }">LogInView</RouterLink> | 
      <form @submit.prevent="logOut">
        <input type="submit" value="Logout">
      </form>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const logOut = function () {
  store.logOut()
}
</script>

<style scoped>
</style>
