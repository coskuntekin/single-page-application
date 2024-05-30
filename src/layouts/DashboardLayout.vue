<template>
  <section class="w-full lg:h-screen h-full lg:grid grid-cols-8">
    <SidebarComponent />
    <main
      role="main"
      class="col-span-6 w-full h-full lg:px-12 lg:pt-12 lg:overflow-y-auto p-4"
    >
      <header role="banner" class="w-full flex justify-between items-center lg:mb-12 mb-8">
        <h1 class="lg:text-3xl text-xl font-semibold text-gray-800">
          Dashboard
        </h1>
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-x-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="lg:size-8 size-5"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="text-gray-500">
              {{ authStore.user ? authStore.user.email : "" }}
            </p>
          </div>
          <div class="bg-black py-2 rounded px-2 block lg:hidden">
            <SignoutComponent v-if="isMobileView" />
          </div>
        </div>
      </header>
      <section class="w-full h-auto">
        <router-view></router-view>
      </section>
    </main>
  </section>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import SidebarComponent from "../components/SidebarComponent.vue";
import SignoutComponent from "../components/SignoutComponent.vue";
import { onMounted, ref } from "vue";

const authStore = useAuthStore();

const isMobileView = ref(false);
onMounted(() => {
  const handleResize = () => {
    isMobileView.value = window.innerWidth <= 810;
  };
  handleResize();
  window.addEventListener("resize", handleResize);
});
</script>
