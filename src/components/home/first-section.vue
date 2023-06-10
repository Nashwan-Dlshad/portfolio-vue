<script setup>
import Button from '../button.vue'
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import $ from 'jquery'
const target = ref(null);
const {elementX, elementY, isOutside, elementHeight, elementWidth} = useMouseInElement(target);
const cardTransform = computed(()=>{
const MAX_ROTATION = 6;

const rx = (
  (elementY.value / elementHeight.value) * MAX_ROTATION*2
).toFixed(4);
const ry = (
  (elementX.value / elementWidth.value) * MAX_ROTATION*2
).toFixed(4);
return isOutside.value?'':`perspective(${elementWidth.value}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
});

// animateChange text using jquery

const texts = ['Fullstack Developer', 'Frontend Developer', 'Backend Developer'];
let i = 0;
setInterval(() => {
  i++;
  if (i >= texts.length) {
    i = 0;
  }
  // jquery
  $(document).ready(function () {
    $('.fade').fadeOut(500, function () {
      $(this).text(texts[i]).fadeIn(500);
    });
  });
}, 4000);
</script>
<template>
   <section class="flex flex-col-reverse lg:flex-row " id="home">
    <div class="lg:w-1/2 w-full h-max lg:h-screen flex flex-col gap-5 items-start lg:px-12 p-5 justify-center">
      <h1 class="text-bprimary dark:text-gprimary lg:text-4xl text-2xl ">About me:</h1>
      <p class="text-black dark:text-white text-md leading-7 text-justify lg:text-lg text-xs md:text-sm">
        I have worked on websites for 3 years and have experience with everything from the front
        to the back of a website. I have a certificate in IT and I am now studying Information
        Systems Engineering in college. I am committed to getting better all the time. I work well
        with a team and can deal with pressure easily. I am flexible and can easily learn new
        things. I am good at talking and working with different kinds of people. I am very good at
        solving problems and can quickly find solutions to difficult problems. I am good at paying
        close attention when people speak and figuring out what they need. I am good at leading
        people and helping them do their best. I am really good at working with people from
        different cultures.
      </p>

        <div class="flex justify-start gap-10 w-full flex-wrap lg:flex-nowrap">
          <Button to="#contact" placeholder="Contact me" class="bg-bprimary dark:bg-gprimary" />
        <Button to="#skills" placeholder="My skills" class="bg-slate-400" />
        
        </div>

    </div>
    <div
      class="lg:w-1/2 w-full bg-bprimary dark:bg-gprimary h-full lg:h-screen lg:py-0 py-8 justify-center flex flex-col gap-5 items-center"
    >
     
        <img ref="target" :style="{transform:cardTransform, transition:'transform 0.25s ease-out'}" src="../../assets/img/nashwan.png" alt="" class="lg:w-1/2 w-full rounded-full" />
      <div class="flex flex-col gap-1 text-center">
        <h1 class="lg:text-3xl text-xl text-white letterbyletter">Nashwan Dlshad</h1>
        <h5 class="animateChange  fade text-sm"></h5>
      </div>
    </div>
    
  </section>
</template>


<style scoped>
@keyframes float1 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.triangle-float1 {
  animation: float1 5s infinite;
}

@keyframes float2 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.triangle-float2 {
  animation: float2 4s infinite;
}

@keyframes float3 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.triangle-float3 {
  animation: float3 6s infinite;
}

.blob {
  width: 300px;
  height: 300px;
  background-image: url('../../assets/img/logo.png');
  background-size: fill;
  -webkit-clip-path: url('../../assets/img/logo.png');
  background-color: red;
  clip-path: url('#blob-clip');
}

.letterbyletter {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  animation: letterbyletter 2s steps(40, end) 1s 1 normal both,
    reverse 2s steps(40, end) 3s 1 normal both;
}

@keyframes letterbyletter {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.fade{
  animation: fade 3s ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>