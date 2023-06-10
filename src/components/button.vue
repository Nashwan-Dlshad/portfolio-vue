<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

const props = defineProps({
    placeholder: String,
    class:String,
    to:String
});


</script>
<template>
  <RouterLink :to="props.to" class="relative text-center  lg:px-20 px-5 lg:py-3 py-3 rounded-full lg:w-1/2 w-full text-white" :class="props.class">
    <span class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 shadow-xl rounded-full transition duration-300"></span>
  {{ props.placeholder }}
  </RouterLink>
</template>