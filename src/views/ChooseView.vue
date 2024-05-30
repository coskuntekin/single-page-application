<template>
  <div class="bg-white rounded shadow-md text-slate-500 shadow-slate-200">
    <div class="p-6 flex flex-col">
      <form>
        <div
          v-for="(input, id) in dataStore.data ? dataStore.data.inputs : []"
          :key="id"
          class="relative mb-8"
        >
          <template v-if="input.type === 'textfield'">
            <div
              :style="{ backgroundColor: input['bg-color'] }"
              class="text-xl font-medium text-slate-700 w-full py-2 px-4 rounded"
            >
              {{ input.label }}
            </div>
          </template>
          <template v-if="input.type === 'input'">
            <input
              :id="id"
              :type="input.type"
              :name="id"
              :placeholder="'Set ' + input.label + ' value'"
              :style="{ backgroundColor: input['bg-color'] }"
              class="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              :disabled="input.disabled"
            />
            <label
              :for="id"
              class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Set {{ input.label }} value
            </label>
          </template>
        </div>
        <div class="w-full flex justify-between gap-x-4">
          <button
            type="reset"
            class="w-full text-sm text-slate-500 border border-slate-300 rounded flex items-center justify-center gap-x-2"
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
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
            Clear values
          </button>
          <button
            type="submit"
            class="inline-flex w-full items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>Execute</span>
            <span class="relative only:-mx-5">
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
        </div>
      </form>
    </div>
  </div>
  <div class="bg-white rounded shadow-md text-slate-500 shadow-slate-200">
    <div class="p-6 flex flex-col">
      <form>
        <div
          v-for="(output, id) in dataStore.data ? dataStore.data.outputs : []"
          :key="id"
          class="relative last:mb-0 mb-8"
        >
          <template v-if="output.type === 'textfield'">
            <div
              :style="{ backgroundColor: output['bg-color'] }"
              class="text-xl font-medium text-slate-700 w-full py-2 px-4 rounded"
            >
              {{ output.label }}
            </div>
          </template>
          <button
            v-if="output.type === 'button'"
            type="submit"
            :style="{ backgroundColor: output['bg-color'] }"
            class="inline-flex w-full items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>{{ output.label }}</span>
            <span class="relative only:-mx-5">
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
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from "../stores/data";
import { onMounted } from "vue";

const dataStore = useDataStore();
onMounted(async () => {
  await dataStore.fetchData();
});
</script>
