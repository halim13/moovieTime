<template>
  <header class="bg-[#ffffff0d]">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-0">
      <div class="flex p-4 items-center justify-between gap-8">
        <div class="md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="#">
            <span class="sr-only">Home</span>
            <img src="@/assets/logo/moovietime-logo@2x.png" alt="moovie time logo" class="h-8">
          </a>
        </div>

        <div class="flex items-center flex-1">
          <div class="hidden md:block flex-1">
            <div class="items-center rounded-md border border-[#00000021] flex">
              <button type="button" class="size-12 leading-10 transition hover:opacity-75 bg-[#00000021] p-2">
                <img src="@/assets/icon/movie-icon@2x.png" alt="movie icon">
              </button>

              <input type="text"
                class="rounded h-12 border-transparent [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none bg-[#00000021] placeholder-[#E5E5E5] text-[#E5E5E5] focus:outline-none flex flex-1"
                placeholder="Find movie" />

              <button type="button" class="size-12 leading-10 transition hover:opacity-75 bg-[#00000021] p-3">
                <img src="@/assets/icon/search-icon@2x.png" alt="search movie">
              </button>
            </div>
          </div>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <div class="flex flex-row justify-center items-center gap-2">
                  <img src="@/assets/icon/grid-icon@2x.png" alt="search movie" class="h-6">
                  <a class="text-[#E5E5E5] transition hover:text-gray-500 uppercase" href="#">Categories</a>
                </div>
              </li>

              <li>
                <a class="text-[#E5E5E5] transition hover:text-gray-500 uppercase" href="#">Movies</a>
              </li>

              <li>
                <a class="text-[#E5E5E5] transition hover:text-gray-500 uppercase" href="#">TV Shows</a>
              </li>

              <li>
                <a class="text-[#E5E5E5] transition hover:text-gray-500 uppercase" href="#">Login</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="block md:hidden">
          <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>