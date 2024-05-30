<template>
  <section aria-label="Dashboard page" class="w-full h-full">
    <nav aria-label="Breadcrumb" class="mb-8">
      <ol class="flex items-stretch gap-2 list-none">
        <li class="items-center gap-2 flex">
          <button
            type="button"
            @click="goChooseTemplate"
            :disabled="isChooseTemplate"
            :class="`${
              isChooseTemplate ? 'text-slate-400' : 'text-slate-600'
            } flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap transition-colors hover:text-emerald-500`"
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
            Choose your template
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="flex-none w-4 h-4 transition-transform stroke-slate-400 md:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
            role="graphics-symbol"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </li>
        <li
          v-if="isChooseTemplate"
          class="items-center gap-2 md:flex text-slate-400"
        >
          ...
        </li>
        <li
          v-if="isCreateTemplate"
          :class="`items-center gap-2 md:flex ${
            isCreateTemplate ? 'text-slate-400' : 'text-slate-600'
          }`"
        >
          Calculate your data
        </li>
      </ol>
    </nav>
    <article
      v-if="isChooseTemplate"
      aria-label="Choose template"
      class="w-full h-full"
    >
      <div class="mb-12">
        <h1 class="text-2xl text-slate-500">Please choose a template</h1>
        <p class="text-slate-400">
          Simularge is a tool that allows you to simulate the behavior of a
          template
        </p>
      </div>
      <div
        aria-label="Template is loading"
        v-if="templateStore.loading"
        class="w-full flex justify-center items-center h-full"
      >
        <div
          class="bg-white shadow h-80 flex py-6 w-60 rounded"
          for="freeUserOptionA"
        >
          <div class="flex w-full gap-x-4 justify-center">
            <div class="w-16 h-full">
              <h4
                class="w-full text-sm text-center h-4 animate-pulse bg-slate-300 mb-2 rounded"
              ></h4>
              <div
                class="w-full h-48 bg-slate-200 mb-2 rounded animate-pulse"
              ></div>
              <div
                class="bg-slate-300 w-full flex justify-center items-center px-2 py-3 text-sm text-slate-500 rounded animate-pulse"
              ></div>
            </div>
            <div class="w-16 h-full">
              <h4
                class="w-full text-sm text-center mb-2 rounded h-4 animate-pulse bg-slate-300"
              ></h4>
              <div class="w-full h-60 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <form
          role="form"
          @submit.prevent="submitTemplateForm"
          class="flex w-full justify-center flex-wrap h-auto gap-x-4"
        >
          <div class="w-full lg:w-auto mb-4 lg:mb-0">
            <input
              type="radio"
              id="freeUserOptionA"
              name="useroption"
              value="freeUserOptionA"
              v-model="templateForm.userOption"
              required
              :checked="templateStore.template.userOption === 'freeUserOptionA'"
              class="hidden useroption-radio"
            />
            <label
              class="bg-white shadow h-80 flex py-6 lg:w-60 w-full useroption-label rounded"
              for="freeUserOptionA"
            >
              <div class="flex w-full gap-x-4 justify-center">
                <div class="w-16 h-full">
                  <h4 class="w-full text-sm text-center mb-2">Inputs</h4>
                  <div class="w-full h-48 bg-slate-200 mb-2 rounded"></div>
                  <div
                    class="bg-slate-300 w-full flex justify-center items-center px-2 py-3 text-sm text-slate-500 rounded"
                  >
                    Button
                  </div>
                </div>
                <div class="w-16 h-full">
                  <h4 class="w-full text-sm text-center mb-2">Outputs</h4>
                  <div class="w-full h-60 bg-slate-200 rounded"></div>
                </div>
              </div>
            </label>
            <p class="text-slate-400 text-center mt-4">Free to use</p>
          </div>
          <div class="w-full lg:w-auto mb-4 lg:mb-0">
            <input
              type="radio"
              name="useroption"
              id="freeUserOptionB"
              value="freeUserOptionB"
              v-model="templateForm.userOption"
              required
              :checked="templateStore.template.userOption === 'freeUserOptionB'"
              class="hidden useroption-radio"
            />
            <label
              for="freeUserOptionB"
              class="bg-white flex shadow h-80 py-6 lg:w-60 w-full px-4 useroption-label rounded"
            >
              <div class="flex flex-col w-full gap-x-4 justify-center">
                <div class="w-full h-full">
                  <h4 class="w-full text-sm text-center mb-2">Inputs</h4>
                  <div class="w-full h-12 bg-slate-200 mb-2 rounded"></div>
                </div>
                <div class="w-full h-full mb-4">
                  <h4 class="w-full text-sm text-center mb-2 rounded">
                    Outputs
                  </h4>
                  <div class="w-full h-12 bg-slate-200 rounded"></div>
                </div>
                <div
                  class="bg-slate-300 w-full flex justify-center items-center px-2 py-3 text-sm text-slate-500 rounded"
                >
                  Button
                </div>
              </div>
            </label>
            <p class="text-slate-400 text-center mt-4">Free to use</p>
          </div>
          <div class="w-full lg:w-auto mb-4 lg:mb-0">
            <input
              type="radio"
              name="useroption"
              id="freeUserOptionC"
              value="freeUserOptionC"
              v-model="templateForm.userOption"
              :checked="templateStore.template.userOption === 'freeUserOptionC'"
              required
              class="hidden useroption-radio"
            />
            <label
              for="freeUserOptionC"
              class="bg-white flex shadow h-80 py-6 lg:w-60 w-full px-4 useroption-label rounded"
            >
              <div class="flex w-full h-full gap-x-4 justify-center">
                <div class="flex flex-col w-full h-full gap-y-2">
                  <div class="w-full h-auto">
                    <h4 class="w-full text-sm text-center mb-2">Inputs</h4>
                    <div class="w-full h-24 bg-slate-200 mb-2 rounded"></div>
                  </div>
                  <div class="w-full h-auto">
                    <h4 class="w-full text-sm text-center mb-2 rounded">
                      Outputs
                    </h4>
                    <div class="w-full h-24 bg-slate-200 rounded"></div>
                  </div>
                </div>
                <div
                  class="bg-slate-300 w-full h-60 mt-6 flex justify-center items-center px-2 py-3 text-sm text-slate-500 rounded"
                >
                  Button
                </div>
              </div>
            </label>
            <p class="text-slate-400 text-center mt-4">Free to use</p>
          </div>
          <div class="w-full lg:w-auto mb-4 lg:mb-0">
            <input
              type="radio"
              name="useroption"
              id="proUserOptionA"
              value="proUserOptionA"
              v-model="templateForm.userOption"
              :checked="templateStore.template.userOption === 'proUserOptionA'"
              required
              :disabled="userType !== 'pro'"
              class="hidden useroption-radio"
            />
            <label
              for="proUserOptionA"
              class="bg-white flex shadow h-80 py-6 lg:w-60 w-full px-4 useroption-label rounded"
            >
              <div class="flex w-full h-full gap-x-4 justify-center">
                <div class="flex flex-col w-full h-full gap-y-2">
                  <div class="w-full h-auto">
                    <h4 class="w-full text-sm text-center mb-2">Inputs</h4>
                    <div class="w-full h-20 bg-slate-200 mb-2 rounded"></div>
                  </div>
                  <div class="w-full h-auto">
                    <h4 class="w-full text-sm text-center mb-2 rounded">
                      Outputs
                    </h4>
                    <div class="w-full h-20 bg-slate-200 rounded"></div>
                  </div>
                  <div
                    class="bg-slate-300 w-full h-4 flex justify-center items-center px-2 py-3 text-sm text-slate-500 rounded"
                  >
                    Button
                  </div>
                </div>
                <div
                  class="bg-slate-300 w-full h-52 mt-6 flex justify-center items-center px-2 py-3 text-sm text-slate-500 rounded"
                >
                  Graph
                </div>
              </div>
            </label>
            <div
              class="flex items-center text-slate-400 gap-x-1 justify-center mt-4"
            >
              <svg
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
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <p>Pro User</p>
            </div>
          </div>
          <hr class="border-slate-200 my-8 w-full" />
          <button
            type="submit"
            class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>Create your template</span>
            <span v-if="templateStore.submitting" class="relative only:-mx-5">
              <svg
                class="w-5 h-5 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="graphics-symbol"
                aria-labelledby="title-10 desc-10"
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
      </template>
    </article>
    <template v-if="isCreateTemplate">
      <article aria-label="Create chart" :class="setLayout()">
        <div
          aria-label="Inputs"
          class="bg-white rounded shadow-md text-slate-500 shadow-slate-200 mb-4 lg:mb-0"
        >
          <div v-if="dataStore.loading" class="p-6 flex flex-col">
            <div
              class="w-full h-11 bg-slate-300 mb-8 rounded animate-pulse"
            ></div>
            <div
              class="w-full h-11 bg-slate-300 mb-8 rounded animate-pulse"
            ></div>
            <div
              class="w-full h-11 bg-slate-300 mb-8 rounded animate-pulse"
            ></div>
            <div class="w-full h-11 bg-slate-300 rounded animate-pulse"></div>
          </div>
          <template v-else>
            <div class="p-6 flex flex-col">
              <form role="form" novalidate @submit.prevent="submitInputForm">
                <div
                  v-for="(input, id) in dataStore.data
                    ? dataStore.data.inputs
                    : []"
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
                      :id="'input-' + id"
                      type="text"
                      :name="'input-' + id"
                      :placeholder="'Set ' + input.label + ' value'"
                      v-model="inputForm[id]"
                      :style="{ backgroundColor: input['bg-color'] }"
                      class="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                      :disabled="input.disabled"
                      maxlength="3"
                      pattern="^(100|[1-9]?[0-9])$"
                    />
                    <label
                      :for="'input-' + id"
                      class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                      Set {{ input.label }} value
                    </label>
                    <small class="text-slate-400 pl-2">
                      Please enter a number between 0 and 100
                    </small>
                  </template>
                </div>
                <div class="w-full flex justify-between gap-x-4">
                  <button
                    type="reset"
                    @click="cleanForms"
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
                    Clean Forms
                  </button>
                  <button
                    type="submit"
                    class="inline-flex w-full items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                  >
                    <svg
                      v-if="chartStore.submitting"
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
                    <svg
                      v-else
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
                        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    Execute & Save
                  </button>
                </div>
              </form>
            </div>
          </template>
        </div>
        <div
          aria-label="Outputs"
          class="bg-white rounded shadow-md text-slate-500 shadow-slate-200 mb-4 lg:mb-0"
        >
          <div v-if="dataStore.loading" class="p-6 flex flex-col">
            <div
              class="w-full h-11 bg-slate-300 mb-8 rounded animate-pulse"
            ></div>
            <div
              class="w-full h-11 bg-slate-300 mb-8 rounded animate-pulse"
            ></div>
            <div
              class="w-full h-11 bg-slate-300 mb-8 rounded animate-pulse"
            ></div>
            <div class="w-full h-11 bg-slate-300 rounded animate-pulse"></div>
          </div>

          <div v-else class="p-6 flex w-full h-full">
            <form
              role="form"
              class="w-full h-full flex flex-col form-showchart"
            >
              <div
                v-for="(output, id) in dataStore.data
                  ? dataStore.data.outputs
                  : []"
                :key="id"
                :class="
                  `relative last:mb-0 mb-8 last:mt-auto` +
                  (output.type === 'button' ? ' card-showchart' : '')
                "
              >
                <template v-if="output.type === 'textfield'">
                  <div
                    :style="{ backgroundColor: output['bg-color'] }"
                    class="text-xl font-medium text-slate-700 w-full py-2 px-4 rounded"
                  >
                    {{ output.label }} :
                    {{ outputForm[id] }}
                  </div>
                </template>
                <button
                  v-if="output.type === 'button'"
                  type="button"
                  @click="toggleChart"
                  :style="{
                    backgroundColor: showChart
                      ? output['bg-color2']
                      : output['bg-color'],
                  }"
                  :disabled="userType === 'free'"
                  class="inline-flex btn-showchart w-full items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
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
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>
                  {{ showChart ? output.label2 : output.label }}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          v-if="inputFormError !== '' || dataStore.error !== null"
          class="mt-4 flex items-center gap-x-1 text-red-600 justify-center"
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
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <small>
            {{ inputFormError || dataStore.error }}
          </small>
        </div>
      </article>
    </template>
    <ChartComponent
      :operations="operations"
      v-if="showChart && isCreateTemplate"
    />
  </section>
</template>
<script setup>
import { useDataStore } from "../stores/data";
import { useChartStore } from "../stores/chart";
import { useAuthStore } from "../stores/auth";
import { useTemplateStore } from "../stores/template";
import { onMounted, ref } from "vue";
import ChartComponent from "../components/ChartComponent.vue";

const chartStore = useChartStore();
const inputForm = ref({});
const outputForm = ref({});
const operations = ref([]);
const inputFormError = ref("");

async function submitInputForm(event) {
  const form = event.target;
  inputFormError.value = "";
  if (
    form.checkValidity() &&
    inputForm.value.ID1 !== undefined &&
    inputForm.value.ID1 !== "" &&
    inputForm.value.ID2 !== undefined &&
    inputForm.value.ID2 !== ""
  ) {
    const x = parseInt(inputForm.value.ID1);
    const y = parseInt(inputForm.value.ID2);
    outputForm.value.ID1 = x + y;
    outputForm.value.ID2 = x * y;

    operations.value.push({
      x: operations.value.length + 1,
      y: outputForm.value.ID1,
    });

    await chartStore.saveOperations(operations.value);

    if (operations.value.length > 5) {
      operations.value.shift();
    }
  } else {
    inputFormError.value = "Please fill the form";
  }
}

const showChart = ref(false);
function toggleChart() {
  if (
    outputForm.value.ID1 !== undefined ||
    outputForm.value.ID2 !== undefined
  ) {
    inputFormError.value = "";
    showChart.value = !showChart.value;
  } else {
    inputFormError.value = "Please fill the form";
  }
}

function cleanForms() {
  inputForm.value = {};
  outputForm.value = {};
  operations.value = [];
  showChart.value = false;
  inputFormError.value = "";
}

function setLayout() {
  const userOption =
    templateForm.value.userOption || templateStore.template.userOption;
  return {
    "option-free-a-layout": userOption === "freeUserOptionA",
    "option-free-b-layout": userOption === "freeUserOptionB",
    "option-free-c-layout": userOption === "freeUserOptionC",
    "option-pro-layout": userOption === "proUserOptionA",
  };
}

const isChooseTemplate = ref(false);
const isCreateTemplate = ref(false);
async function goChooseTemplate() {
  isChooseTemplate.value = true;
  isCreateTemplate.value = false;
  cleanForms();
  await templateStore.getChoosenTemplate();
}

const templateForm = ref({});
const templateStore = useTemplateStore();
async function submitTemplateForm(event) {
  const form = event.target;
  if (form.checkValidity()) {
    await templateStore.saveTemplate(templateForm.value);
    if (templateStore.error === null) {
      isChooseTemplate.value = false;
      isCreateTemplate.value = true;
      setLayout();
    }
  } else {
    console.log("form is invalid");
  }
}

const authStore = useAuthStore();
const dataStore = useDataStore();
const userType = ref("");

onMounted(async () => {
  try {
    const userAttributes = JSON.parse(
      authStore.user.reloadUserInfo.customAttributes
    );
    userType.value = userAttributes.userType;

    await templateStore.getChoosenTemplate();

    if (!templateStore.template.userOption) {
      isChooseTemplate.value = true;
      isCreateTemplate.value = false;
    } else {
      isChooseTemplate.value = false;
      isCreateTemplate.value = true;
      await dataStore.fetchData();
    }
  } catch (error) {
    console.error("Error during initialization:", error);
  }
});
</script>
