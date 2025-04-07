<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user.ts'

const userStore = useUserStore()
const isLoading = ref<boolean>(true)

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      userStore.userId = user.uid
    } else {
      userStore.userId = ''
    }
    isLoading.value = false
  })
})

</script>

<template>
    <app-progress v-if="isLoading" />
    <div v-else class="container">
      <app-header />
      <RouterView class="content" />
    </div>
</template>

<style scoped>

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

</style>
