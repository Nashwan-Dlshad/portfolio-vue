<script setup>
import Input from '../input.vue'
import FormBtn from '../form-btn.vue'
</script>
<template>
 <section class=" flex flex-col items-center gap-5  py-2 h-max bg-bprimary dark:bg-gprimary" id="contact">
      <div class="flex justify-center text-4xl text-white dark:text-slate-900 py-8 ">
      <h1>Contact Me</h1>
    </div>

    <div class="flex flex-col justify-center lg:w-1/3 w-full">
      <div class="form bg-white dark:bg-slate-900 rounded-xl">
<form action="" class="flex flex-col gap-5 p-5">
    <Input label="name" type="text" />
    <Input label="Email" type="email"/>
    <Input label="Message" type="textarea" />
    <FormBtn />
</form>
      </div>
    </div>

    <div class="flex flex-col gap-2">
        <h5 class="lg:text-3xl text-xl text-white text-center dark:text-slate-900">Social Media</h5>
        <div class="flex gap-2 lg:text-md text-xs items-center justify-center">
            <a href="https://www.facebook.com/nashwan.hama.1" target="_blank" class=" lg:text-4xl text-lg  rounded-full">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="https://www.instagram.com/_nashwan.dlshad_/" target="_blank" class="lg:text-4xl text-lg  p-2 rounded-full">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="https://www.linkedin.com/in/nashwan-dlshad-745a8a211" target="_blank" class="lg:text-4xl text-lg  p-2 rounded-full">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </a>
        </div>
    </div>
    </section>
</template>