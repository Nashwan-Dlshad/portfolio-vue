<script setup>
const props = defineProps({
    class:String,
    title:String,
    description:String,
    image:String,
    link:String,
    x:Number
})
// props.image to url function



</script>
<template>
 <div class="flex justify-center gap-7 flex-col " :class="props.class"
 
 v-motion
  :initial="{
      scale: 1,
      x:props.x,
      opacity:0
    
  }"
  :visible="{
    scale: 1,
    transition: {
      delay: 500,
      duration:500
    },

    x:0,
    opacity:1
  }"
 >
        <div class="lg:w-1/3 w-full flex justify-center items-center p-10 bg-bprimary dark:bg-gprimary rounded-lg">
          <img :src="props.image" alt="">
        </div>
        <div class="lg:w-1/3 w-full flex gap-2 flex-col px-5">
          <h1 class="text-bprimary dark:text-gprimary lg:text-3xl text-xl" v-text="props.title"></h1>
          <p class="lg:text-xl text-md text-slate-900 dark:text-white text-justify leading-7 " v-text="props.description"></p>
          <a :href="props.link" class="bg-bprimary dark:bg-gprimary p-2 lg:w-1/4 w-1/2 lg:text-lg text-center text-white rounded-md  hover:bg-slate-900 transition duration-300 ease-in-out"  target="_blank" >Visit</a>
        </div>
      </div>
</template>