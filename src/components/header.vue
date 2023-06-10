<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import vueuse
import { useDark, useToggle } from '@vueuse/core';


let isDark = useDark();
const toggleDark = useToggle(isDark);

// header on scroll fixed
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('fixed', window.scrollY > 0);
  // header full width
  header.classList.toggle('w-full', window.scrollY > 0);

});

</script>

<template>
  <header class="h-12 antialiased   text-white
    bg-slate-900 flex items-center p-8 gap-5 justify-between">
       <div class="flex gap-5 items-center">
        <img class="w-24" src="../assets/img/logo.png" alt="">
      <nav class="flex gap-2">
        <RouterLink to="/#home" class="" >Home</RouterLink>
        <RouterLink to="/#skills" class="">Skills</RouterLink>
        <RouterLink to="/#clients" class="">Clients</RouterLink>
        <RouterLink to="/#contact" class="">Contact</RouterLink>
      </nav>
       </div>
      
       <font-awesome-icon @click="toggleDark()" class="hover:cursor-pointer" v-show="isDark" icon="fa-solid fa-moon" />
       <font-awesome-icon @click="toggleDark()" class="hover:cursor-pointer text-white" v-show="!isDark"  :icon="['fas', 'sun']" />

      </header>

  <RouterView />
</template>

