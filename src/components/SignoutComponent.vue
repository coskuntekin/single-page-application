<template>
  <button
    type="button"
    aria-label="Logout"
    @click="logout"
    :disabled="authStore.loading"
    class="flex items-center gap-x-2 text-white hover:text-gray-300 transition-colors"
  >
    <svg
      v-if="authStore.loading"
      class="size-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="graphics-symbol"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
      />
    </svg>
    Logout
  </button>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import router from "../router";

const authStore = useAuthStore();
const logout = async () => {
  await authStore.logout();
  if (!authStore.error) {
    router.push("/login");
  }
};
</script>
