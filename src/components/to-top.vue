<script setup>
import $ from 'jquery'

// show to_top
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.to_top').fadeIn();
  } else {
    $('.to_top').fadeOut();
  }
});
</script>
<template>
  <div class="to_top fixed w-fit bg-bprimary hidden dark:bg-gprimary bottom-5 end-5 p-5 rounded-full text-white hover:text-slate-900 dark:text-slate-900 duration-300 dark:hover:text-white cursor-pointer">
    <router-link  to="/#home" >
      <svg xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="scrollToTop()">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 11l7-7 7 7M5 19l7-7 7 7" />
      </svg>
    </router-link>
  </div>
</template>