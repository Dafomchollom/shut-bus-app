<template>
  <div class="footer rounded bg-white max-w-2xl mx-auto relative">
    <div class="h-28 w-full header border-b-4 border-blue-500 px-10 py-5">
      <h3 class="font-bold text-xl">Need help with your booking</h3>
      <p class="">
        <a class="text-blue-500" href="#chat">Chat with us</a> or call 1 (855)
        428-7266.
      </p>
    </div>
    <div class="p-5 grid grid-cols-3">
      <div class="flex">
        <div>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="text-black flex items-center bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pb-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path
                d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
              ></path>
            </svg>
            Need help booking
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdown"
            class="z-10 w-44 bg-white rounded divide-y divide-gray-100 dark:bg-gray-700 block"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
            style="
              position: absolute;
              inset: 0px auto auto 0px;
              margin: 0px;
              transform: translate3d(327px, 70px, 0px);
            "
          >
            <ul
              class="py-1 pl-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Connect with one of our booking specialists today</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex">
        <div>
          <button
            id="dropdownDefault1"
            data-dropdown-toggle="dropdown1"
            class="text-black flex items-center bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pb-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
              ></path>
              <polygon points="12 15 17 21 7 21 12 15"></polygon>
            </svg>
            Payment and policies
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdown1"
            class="z-10 w-44 bg-white rounded divide-y divide-gray-100 dark:bg-gray-700 block"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
            style="
              position: absolute;
              inset: 0px auto auto 0px;
              margin: 0px;
              transform: translate3d(327px, 70px, 0px);
            "
          >
            <ul
              class="py-1 pl-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Book now, pay later</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >what's included in my bus rentals?</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Changing or Canceling Your Trip</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex">
        <div>
          <button
            id="dropdownDefault2"
            data-dropdown-toggle="dropdown2"
            class="text-black flex items-center bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pb-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
            Common questions
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdown2"
            class="z-10 w-44 bg-white rounded divide-y divide-gray-100 dark:bg-gray-700 block"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
            style="
              position: absolute;
              inset: 0px auto auto 0px;
              margin: 0px;
              transform: translate3d(327px, 70px, 0px);
            "
          >
            <ul
              class="hidden py-1 pl-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >How does Bus.com work?</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >How do i know which bus type is right for me?</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >How are prices calculated?</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >why do prices expire?</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter',
  components: {},
})
</script>

<style>
.header {
  background: url('@/assets/images/helpimage.jpeg');
  background-size: cover;
  background-position: top;
}
</style>
