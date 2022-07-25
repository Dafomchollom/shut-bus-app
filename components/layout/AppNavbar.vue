<template>
  <div
    class="grid grid-cols-3 gap-3 w-full pt-4 px-4 items-center ease-in-out duration-500 drop-shadow-2xl bg-white dark:bg-black"
  >
    <div>
      <img
        class="p-1 rounded dark:bg-white"
        src="@/assets/images/logo.svg"
        width="110"
        alt=""
      />
    </div>
    <div class="flex justify-center">
      <div
        class="hidden lg:block text-sm font-medium text-center w-auto text-black border-b border-gray-200 dark:text-gray-100 dark:border-gray-700"
      >
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
              >1. Build trip</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >2. Review prices</a
            >
          </li>

          <li>
            <a
              class="inline-block p-4 text-gray-400 border-transparent rounded-t-lg cursor-not-allowed dark:text-gray-500"
              >3. Check out</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full flex gap-x-4 justify-end items-center">
      <!-- Dropdown button -->
      <div>
        <button
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          @click="dropdownToggle"
        >
          Dafom
          <svg
            class="ml-1 w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdownNavbar"
          class="absolute z-10 mt-2 w-40 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          :class="{ hidden: !dropDowm }"
        >
          <div class="py-1">
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
              >Sign out</a
            >
          </div>
        </div>
      </div>
      <button
        class="bg-gray-200 dark:bg-white p-2 rounded-full"
        @click="toggleTheme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'AppSidebar',
  data() {
    return {
      dropDowm: false as Boolean,
    }
  },
  methods: {
    dropdownToggle() {
      this.dropDowm = !this.dropDowm
    },
    ...mapActions({
      toggleTheme: 'theme/toggleTheme',
    }),
  },
})
</script>
