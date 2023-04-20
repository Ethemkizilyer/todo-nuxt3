<template>
  <div class="mx-auto bg-red-300 border container">
    <header>
      <nav>
        <router-link to="/home">Todos</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
