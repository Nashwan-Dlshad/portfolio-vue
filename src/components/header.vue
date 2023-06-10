<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import vueuse
import { useDark, useToggle } from '@vueuse/core';
  //import router
import { useRouter } from 'vue-router';


let isDark = useDark();
const toggleDark = useToggle(isDark);

// header on scroll fixed
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('fixed', window.scrollY > 0);
  // header full width
  header.classList.toggle('w-full', window.scrollY > 0);

});


// mobile menu pure js

const menu = ()=>{
const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('hidden');
}

const close = ()=>{
const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.add('hidden');
}

// on vue to route close menu
const router = useRouter();
router.afterEach(() => {
  close();
});


</script>

<template>
  <header class="h-12 antialiased   text-white
    bg-slate-900 flex items-center lg:p-8 py-8 px-3 gap-5 justify-between">
       <div class="flex gap-5 items-center">
        <img class="w-24" src="../assets/img/logo.png" alt="">
      <nav class="lg:flex gap-2 hidden">
        <RouterLink to="/#home" class="" >Home</RouterLink>
        <RouterLink to="/#skills" class="">Skills</RouterLink>
        <RouterLink to="/#clients" class="">Clients</RouterLink>
        <RouterLink to="/#contact" class="">Contact</RouterLink>
      </nav>



      <div class="hidden fixed top-0 left-0 w-full h-screen bg-slate-900 bg-opacity-90 z-50" id="mobile-menu">
        <div class="flex justify-between items-center px-3 py-3 bg-slate-900">
          <img class="w-24" src="/assets/img/logo.png" alt="">
          <font-awesome-icon @click="close()" class="text-2xl" :icon="['fas', 'times']" />
        </div>
        <div class="flex flex-col items-center justify-center h-full gap-5">
          <RouterLink to="/#home" class="text-2xl font-bold" >Home</RouterLink>
          <RouterLink to="/#skills" class="text-2xl font-bold">Skills</RouterLink>
          <RouterLink to="/#clients" class="text-2xl font-bold">Clients</RouterLink>
          <RouterLink to="/#contact" class="text-2xl font-bold">Contact</RouterLink>
        </div>
        </div>
       </div>
      <div class="flex item-center gap-4 justify-center">
         <font-awesome-icon @click="toggleDark()" class="hover:cursor-pointer text-2xl" v-show="isDark" icon="fa-solid fa-moon" />
       <font-awesome-icon @click="toggleDark()" class="hover:cursor-pointer text-white text-2xl" v-show="!isDark"  :icon="['fas', 'sun']" />
       <div @click="menu"><font-awesome-icon  class="lg:hidden text-2xl menu" :icon="['fas', 'bars']" /></div>

      </div>
      

      </header>

  <RouterView />
</template>

