<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
    label:String,
    type:String
});
</script>
<template>
    <div class="flex flex-col gap-2" v-if="props.type == 'text' || props.type=='email'">
    <label :for="props.label" class="text-slate-900 dark:text-white" v-text="props.label"></label>
    <input :type="props.type" :name="props.label"  class=" border-b-2 border-b-slate-900 dark:border-white focus:rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition duration-300 ease-in-out">
  </div>

  <div class="flex flex-col gap-2" v-if="props.type == 'textarea'">
    <label :for="props.label" class="text-slate-900 dark:text-white" v-text="props.label"></label>
    <textarea :name="props.label" id="" cols="30" rows="10" class="border-b-2 border-b-slate-900  dark:border-white focus:rounded-md  p-2 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition duration-300 ease-in-out"></textarea>
  </div>
</template>