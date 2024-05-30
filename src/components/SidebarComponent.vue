<template>
  <aside
    role="complementary"
    class="bg-[#041536] h-full col-span-2 lg:pl-32 lg:pt-32 lg:flex flex-col hidden"
  >
    <div>
      <div class="mb-12">
        <h1 class="text-3xl text-white">Simularge</h1>
        <small class="text-gray-700"> Simple UI Generator </small>
      </div>
      <nav class="flex flex-col gap-y-6">
        <router-link
          to="/"
          class="text-white py-3 pl-4 rounded-l flex items-center gap-x-2 hover:bg-[#60b980] transition-colors"
          active-class="bg-[#60b980]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard</router-link
        >
        <div class="text-slate-500 py-3 pl-4 rounded-l flex items-center">
          More coming up
        </div>
      </nav>
    </div>
    <div class="border-t border-dashed border-gray-700 mt-auto py-8">
      <SignoutComponent />
    </div>
  </aside>
</template>
<script setup>
import SignoutComponent from "../components/SignoutComponent.vue";
</script>
