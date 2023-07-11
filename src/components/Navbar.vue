<template>
  <nav class="bg-white">
    <div class="max-w-screen-md xl:max-w-screen-lg flex flex-wrap items-center justify-between mx-auto">
        <span class="text-2xl font-semibold text-gray-900 md:py-4">Company</span>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" class="block peer py-2 pl-3 pr-4 rounded md:p-0 md:py-5 text-gray-500 uppercase" aria-current="page">About</a>
              <div class="hidden peer-hover:flex hover:flex absolute flex-col bg-white drop-shadow-lg z-50 uppercase w-44">
                  <a class="px-5 py-3 hover:bg-[#212122] hover:text-white text-sm" href="#">History</a>
                  <a class="px-5 py-3 hover:bg-[#212122] hover:text-white text-sm" href="#">Vision Mission</a>
              </div>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:py-5 text-gray-500 uppercase" aria-current="page">Our Work</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:py-5 text-gray-500 uppercase" aria-current="page">Our Team</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:py-5 text-gray-500 uppercase" aria-current="page">Contract</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>
