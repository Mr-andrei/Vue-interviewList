<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user.ts'
import type { ComputedRef } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
const userStore = useUserStore()

interface IMenuItem {
  label: string;
  icon: string;
  path: string;
  show: ComputedRef<boolean>;

}

const router = useRouter()
const items = ref<IMenuItem[]>([
  {
    label: 'Авторизация',
    icon: 'pi pi-user',
    path: '/auth',
    show: computed(() => !userStore.userId)
  },
  { label: 'Добавить', icon: 'pi pi-plus', path: '/', show: computed(() => !!userStore.userId) },
  {
    label: 'Список собеседований',
    icon: 'pi pi-list',
    path: '/list',
    show: computed(() => !!userStore.userId)
  },
  {
    label: 'Статистика',
    icon: 'pi pi-chart-pie',
    path: '/statistic',
    show: computed(() => !!userStore.userId)
  }
])

const signOutMethod = async () => {

  await signOut(getAuth())
  router.push('./auth')
}

</script>

<template>
  <app-menubar :model="items" class="menu">
    <template #item="{item, props}">
      <template v-if="item.show">
        <router-link :to="item.path" class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" class="p-menuitem-icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </router-link>
      </template>
    </template>

    <template #end>
      <span v-if="userStore.userId" @click="signOutMethod" class="flex align-item-center menu-exit">
        <span class="pi pi-sign-out p-menuitem-icon" />
        <span class="ml-2">Выход</span>
      </span>
    </template>


  </app-menubar>
</template>
<style scoped>

.menu {
  margin: 30px 0;
}

.menu-exit {
  cursor: pointer;
}

</style>
