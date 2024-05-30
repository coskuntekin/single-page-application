<template>
  <div class="flex w-full h-screen">
    <div
      class="bg-[#041536] flex items-center flex-col justify-center h-full lg:w-1/3 w-full 2xl:px-44 lg:px-8 px-4"
    >
      <div class="w-full">
        <h1 class="text-3xl mb-2 text-white">
          Welcome back to <span class="text-[#60b980]"> Simularge </span>
        </h1>
        <p class="text-lg text-slate-500">Login to access the dashboard</p>
      </div>
      <div class="w-full">
        <form role="form" @submit.prevent="submitForm" novalidate>
          <div class="relative my-6">
            <input
              id="useremail"
              type="email"
              name="useremail"
              placeholder="Your email"
              v-model="loginForm.email"
              required
              class="relative w-full h-10 px-4 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              for="useremail"
              class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >E-mail</label
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              role="graphics-symbol"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div class="relative my-6">
            <input
              id="password"
              type="password"
              name="password"
              minlength="8"
              maxlength="20"
              placeholder="Your password"
              v-model="loginForm.password"
              required
              class="relative w-full h-10 px-4 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              for="password"
              class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >Password</label
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <button
            type="submit"
            :disabled="authStore.loading"
            class="inline-flex w-full items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-[#60b980] hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span> Login to Simularge </span>
            <span class="relative only:-mx-6" v-if="authStore.loading">
              <svg
                class="w-5 h-5 text-white animate-spin"
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
            </span>
          </button>
        </form>
        <div v-if="authStore.error">
          <small class="text-red-800">
            {{ authStore.error ? authStore.error : "" }}
          </small>
        </div>
      </div>
    </div>
    <div class="bg-[#60b980] w-2/3 hidden lg:flex flex-col pb-12 items-center">
      <div class="w-1/2 mt-24 mb-12">
        <h3 class="text-emerald-950 font-bold text-4xl mb-8">
          <span class="text-white"> Simularge </span>
          UI Generator is a tool that helps you generate UI components
        </h3>
        <p class="text-emerald-900">
          It is a tool that helps you generate UI components for your project
          without having to write the code yourself. It is a tool that helps you
          generate UI components for your project without having to write the
          code yourself.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="980"
        height="489.48"
        viewBox="0 0 980 489.48"
        preserveAspectRatio="xMidYMid meet"
        class="mt-auto w-full h-auto"
      >
        <path
          fill="#60b980"
          d="M207.06 0a205.979 205.979 0 0 0-77.685 15.067c-.993.407-1.99.816-2.988 1.235A206.78 206.78 0 0 0 0 207.06V433a9.01 9.01 0 0 0 9 9l.179.016c173.467 31.502 342.106 47.465 501.372 47.465q3.581 0 7.156-.011c156.555-.477 308.994-16.44 453.083-47.447L971 442a9.01 9.01 0 0 0 9-9V9a9.01 9.01 0 0 0-9-9Z"
        />
        <path
          fill="#3f3d56"
          d="M745.8 180.193a5.947 5.947 0 0 0 0 11.892h149.085a5.947 5.947 0 1 0 .195-11.892q-.097-.002-.195 0Z"
        />
        <path
          fill="#fff"
          d="M928.694 178.537a1.17 1.17 0 0 0 0 1.655l5.023 5.023h-12.386a1.17 1.17 0 1 0 0 2.34h12.386l-5.023 5.023a1.17 1.17 0 1 0 1.655 1.654l7.02-7.02a1.17 1.17 0 0 0 0-1.655l-7.02-7.02a1.17 1.17 0 0 0-1.655 0ZM711.927 178.537a1.17 1.17 0 0 1 0 1.655l-5.022 5.023h12.385a1.17 1.17 0 1 1 0 2.34h-12.385l5.022 5.023a1.17 1.17 0 0 1-1.654 1.654l-7.02-7.02a1.17 1.17 0 0 1 0-1.655l7.02-7.02a1.17 1.17 0 0 1 1.654 0Z"
        />
        <g fill="#fff" opacity=".4">
          <circle cx="751.82" cy="50.39" r="6.39" />
          <circle cx="778.445" cy="50.39" r="6.39" />
          <circle cx="805.069" cy="50.39" r="6.39" />
          <circle cx="831.694" cy="50.39" r="6.39" />
          <circle cx="858.318" cy="50.39" r="6.39" />
          <circle cx="884.943" cy="50.39" r="6.39" />
          <circle cx="911.567" cy="50.39" r="6.39" />
          <circle cx="751.82" cy="70.625" r="6.39" />
          <circle cx="778.445" cy="70.625" r="6.39" />
          <circle cx="805.069" cy="70.625" r="6.39" />
          <circle cx="831.694" cy="70.625" r="6.39" />
          <circle cx="858.318" cy="70.625" r="6.39" />
          <circle cx="884.943" cy="70.625" r="6.39" />
          <circle cx="911.567" cy="70.625" r="6.39" />
          <circle cx="751.82" cy="90.859" r="6.39" />
          <circle cx="778.445" cy="90.859" r="6.39" />
          <circle cx="805.069" cy="90.859" r="6.39" />
          <circle cx="831.694" cy="90.859" r="6.39" />
          <circle cx="858.318" cy="90.859" r="6.39" />
          <circle cx="884.943" cy="90.859" r="6.39" />
          <circle cx="911.567" cy="90.859" r="6.39" />
          <circle cx="751.82" cy="111.094" r="6.39" />
          <circle cx="778.445" cy="111.094" r="6.39" />
          <circle cx="751.82" cy="131.329" r="6.39" />
          <circle cx="778.445" cy="131.329" r="6.39" />
          <circle cx="805.069" cy="131.329" r="6.39" />
          <circle cx="805.069" cy="111.094" r="6.39" />
          <circle cx="831.694" cy="111.094" r="6.39" />
          <circle cx="858.318" cy="111.094" r="6.39" />
          <circle cx="884.943" cy="111.094" r="6.39" />
          <circle cx="911.567" cy="111.094" r="6.39" />
        </g>
        <path
          fill="#3f3d56"
          d="M660.157 375.459a35.272 35.272 0 1 1 35.273-35.272 35.313 35.313 0 0 1-35.273 35.272Zm0-68.545a33.272 33.272 0 1 0 33.273 33.273 33.31 33.31 0 0 0-33.273-33.273Z"
        />
        <path
          fill="#fff"
          d="M673.68 336.806h-10.142v-10.143a3.38 3.38 0 0 0-6.761 0v10.143h-10.143a3.38 3.38 0 0 0 0 6.761h10.143v10.143a3.38 3.38 0 0 0 6.761 0v-10.143h10.143a3.38 3.38 0 1 0 0-6.761Z"
        />
        <g fill="#fff" opacity=".4">
          <circle cx="54.024" cy="374.766" r="5.024" />
          <circle cx="54.024" cy="353.833" r="5.024" />
          <circle cx="54.024" cy="332.9" r="5.024" />
          <circle cx="54.024" cy="311.967" r="5.024" />
          <circle cx="54.024" cy="291.034" r="5.024" />
          <circle cx="54.024" cy="270.101" r="5.024" />
          <circle cx="54.024" cy="249.168" r="5.024" />
          <circle cx="69.933" cy="374.766" r="5.024" />
          <circle cx="69.933" cy="353.833" r="5.024" />
          <circle cx="69.933" cy="332.9" r="5.024" />
          <circle cx="69.933" cy="311.967" r="5.024" />
          <circle cx="69.933" cy="291.034" r="5.024" />
          <circle cx="69.933" cy="270.101" r="5.024" />
          <circle cx="69.933" cy="249.168" r="5.024" />
          <circle cx="85.842" cy="374.766" r="5.024" />
          <circle cx="85.842" cy="353.833" r="5.024" />
          <circle cx="85.842" cy="332.9" r="5.024" />
          <circle cx="85.842" cy="311.967" r="5.024" />
          <circle cx="85.842" cy="291.034" r="5.024" />
          <circle cx="85.842" cy="270.101" r="5.024" />
          <circle cx="85.842" cy="249.168" r="5.024" />
          <circle cx="101.751" cy="374.766" r="5.024" />
          <circle cx="101.751" cy="353.833" r="5.024" />
          <circle cx="117.66" cy="374.766" r="5.024" />
          <circle cx="117.66" cy="353.833" r="5.024" />
          <circle cx="117.66" cy="332.9" r="5.024" />
          <circle cx="101.751" cy="332.9" r="5.024" />
          <circle cx="101.751" cy="311.967" r="5.024" />
          <circle cx="101.751" cy="291.034" r="5.024" />
          <circle cx="101.751" cy="270.101" r="5.024" />
          <circle cx="101.751" cy="249.168" r="5.024" />
        </g>
        <path
          fill="#3f3d56"
          d="M497.408 33.002H163.666a6.189 6.189 0 0 0-6.182 6.183v285.383a6.189 6.189 0 0 0 6.182 6.182h333.742a6.189 6.189 0 0 0 6.183-6.182V39.185a6.189 6.189 0 0 0-6.183-6.183Zm3.705 291.566a3.718 3.718 0 0 1-3.705 3.716H163.666a3.71 3.71 0 0 1-3.704-3.716V39.185a3.71 3.71 0 0 1 3.704-3.717h333.742a3.718 3.718 0 0 1 3.705 3.717Z"
        />
        <path
          fill="#fff"
          d="M240.702 280.006c0 .44-.011.88-.034 1.309a25.175 25.175 0 0 1-50.281 0 24.33 24.33 0 0 1-.035-1.309 25.175 25.175 0 1 1 50.35 0Z"
        />
        <path
          fill="#3f3d56"
          d="M471.475 263.22H273.663a4.197 4.197 0 0 0 0 8.393h197.812a4.197 4.197 0 0 0 0-8.394Z"
        />
        <path
          fill="#fff"
          d="M358.78 288.4h-85.117a4.191 4.191 0 0 0 0 8.382h85.117a4.191 4.191 0 1 0 0-8.382ZM576.698 233.581h-333.74a8.559 8.559 0 0 1-8.549-8.55V78.57a8.559 8.559 0 0 1 8.549-8.549h333.74a8.559 8.559 0 0 1 8.55 8.55V225.03a8.559 8.559 0 0 1-8.55 8.55ZM242.958 73.02a5.555 5.555 0 0 0-5.549 5.55V225.03a5.556 5.556 0 0 0 5.549 5.55h333.74a5.556 5.556 0 0 0 5.55-5.55V78.57a5.555 5.555 0 0 0-5.55-5.549Z"
        />
        <path
          fill="#fff"
          d="M310.924 123.44a4.196 4.196 0 1 0 0 8.391h197.808a4.196 4.196 0 1 0 0-8.392ZM310.924 147.752a4.196 4.196 0 0 0 0 8.392h197.808a4.196 4.196 0 0 0 0-8.392ZM310.924 171.77a4.196 4.196 0 0 0 0 8.392h85.117a4.196 4.196 0 0 0 0-8.392ZM631.724 295.633l-33.52-47.307 10.85 2.26a1.501 1.501 0 1 0 .613-2.939l-16.17-3.366-2.183 16.37a1.501 1.501 0 1 0 2.976.397l1.463-10.993 33.523 47.312a1.5 1.5 0 1 0 2.448-1.734Z"
        />
        <path
          fill="#3f3d56"
          d="M449.666 433.32H211.409a4.417 4.417 0 0 1-4.412-4.412v-59.101a4.417 4.417 0 0 1 4.412-4.412h238.257a4.417 4.417 0 0 1 4.412 4.412v59.101a4.417 4.417 0 0 1-4.412 4.413Zm-238.257-66.16a2.65 2.65 0 0 0-2.647 2.647v59.101a2.65 2.65 0 0 0 2.647 2.648h238.257a2.65 2.65 0 0 0 2.647-2.648v-59.101a2.65 2.65 0 0 0-2.647-2.647Z"
        />
        <circle cx="248.429" cy="397.09" r="17.973" fill="#fff" />
        <path
          fill="#fff"
          d="M289.938 385.108a2.995 2.995 0 1 0 0 5.991h141.215a2.995 2.995 0 1 0 0-5.99ZM289.938 403.08a2.995 2.995 0 1 0 0 5.992h60.765a2.995 2.995 0 1 0 0-5.991Z"
        />
        <path
          fill="#3f3d56"
          d="M764.024 222.756h105.893a4.417 4.417 0 0 1 4.412 4.412V337.45a4.417 4.417 0 0 1-4.412 4.413H764.024a4.417 4.417 0 0 1-4.412-4.413V227.168a4.417 4.417 0 0 1 4.413-4.412Zm105.893 117.342a2.65 2.65 0 0 0 2.647-2.648V227.168a2.65 2.65 0 0 0-2.647-2.647H764.024a2.65 2.65 0 0 0-2.647 2.647V337.45a2.65 2.65 0 0 0 2.648 2.648Z"
        />
        <path
          fill="#fff"
          d="M847.353 319.12a2.995 2.995 0 0 0 0-5.99h-60.765a2.995 2.995 0 0 0 0 5.99ZM847.353 301.472a2.995 2.995 0 1 0 0-5.991h-60.765a2.995 2.995 0 1 0 0 5.99ZM816.97 245.498a18.855 18.855 0 1 1-18.855 18.855 18.876 18.876 0 0 1 18.855-18.855Z"
        />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
import router from "../router";

const loginForm = ref({
  email: "",
  password: "",
});

const authStore = useAuthStore();
async function submitForm(event) {
  const form = event.target;
  if (form.checkValidity()) {
    await authStore.login(loginForm.value.email, loginForm.value.password);
    if (!authStore.error) {
      router.push("/");
    }
  } else {
    console.log("form is invalid");
  }
}
</script>
