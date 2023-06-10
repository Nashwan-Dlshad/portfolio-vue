<script setup>
import FirstSection from '../components/home/first-section.vue'
import SecondSection from '../components/home/second-section.vue';
import ThirdSection from '../components/home/third-section.vue'
import FourthSection from '../components/home/fourth-section.vue'
import toTop from '../components/to-top.vue'

</script>

<template>
  <main class="h-screen w-full absolute top-0 left-0 -z-10 " >
    <FirstSection/>
    <SecondSection />
    <ThirdSection />
    <FourthSection />
   
    <section class="footer py-2 text-center flex justify-center flex-col items-center gap-2" id="footer">
      <img src="../assets/img/logo.png" alt="" class="lg:w-32 w-16">
      <p class="text-slate-900 dark:text-white lg:text-xl text-xs ">All rights reserved for <a href="https://www.facebook.com/nashwan.hama.1" target="_blank" class="text-bprimary dark:text-gprimary font-bold">Nashwan Dlshad</a> @ 2023</p>
    </section>

    <toTop />
    
  </main>
</template>

