<script setup>
const props = defineProps({
    name:String,
    percent:Number,
    icon:Array,
    class:String
})
</script>

<template>
    <div class="card bg-slate-900 w-64 p-8 flex flex-col gap-5 rounded-lg"  
    v-motion
  :initial="{
      scale: 1,
      y:100,
      opacity:0
    
  }"
  :visible="{
    scale: 1,
    transition: {
      delay: 500,
      duration:500
    },
    y:0,
    opacity:1
  }"
  >
      <div class="card_image text-7xl text-center" >
        <font-awesome-icon class='hover:cursor-pointer text-white duration-1000 fadeinout'  :icon="props.icon" />
      </div>
      <div class="card_header">
        <h2 class="dark:text-gprimary text-bprimary text-center text-2xl" v-text="props.name"></h2>
      </div>
      <div class="card_body">
       <div class="flex flex-col gap-2">
        <div class="progress flex items-center gap-2">
          <div class="bg-slate-500 w-full h-2">
            <div class="progress-done  bg-bprimary dark:bg-gprimary h-2 " :class="props.class"></div>
          </div>
          <p class="text-white"  v-text="props.percent+'%'"></p>
       </div>
       </div>
      </div>
    </div>
</template>

<style scoped>
@keyframes fadeinout {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fadeinout {
  animation: fadeinout 3s ease-in-out infinite;
}
</style>