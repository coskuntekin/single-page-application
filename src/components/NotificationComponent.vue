<template>
  <div
    ref="notificationRef"
    :class="notificationClass()"
    @animationend="listenAnimation"
  >
    <div class="flex-grow">
      <p>
        {{ message }}
      </p>
    </div>
    <button type="button" @click="closeNotification">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>
import { emit, ref } from "vue";

const props = defineProps({
  message: String,
  status: String,
});

const notificationRef = ref(null);
const listenAnimation = (event) => {
  if (event.animationName === "slideUp") {
    emit("close");
  }
};

const closeNotification = () => {
  notificationRef.value?.classList.remove("animate-slide-down");
  notificationRef.value?.classList.add("animate-slide-up");
};

setTimeout(() => {
  closeNotification();
}, 1400);

const notificationClass = () => {
  const baseClass =
    "animate-slide-down relative flex items-center border max-w-full bg-black gap-4 px-4 py-3 overflow-hidden text-sm rounded-full w-80";
  switch (props.status) {
    case "warning":
      return `${baseClass} text-yellow-500 border-yellow-500`;
    default:
      return `${baseClass} text-slate-500 border-slate-500`;
  }
};
</script>
