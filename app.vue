<template>
  <div class="mx-auto fluid bg-red-300 border min-h-[100vh]">
    <header>
      <nav>
        <router-link class="px-4 rounded-r-lg bg-red-500 text-white font-bold p-2 hover:bg-red-700" to="/home">BAKAR</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
