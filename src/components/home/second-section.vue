<script setup>
import SkillCard from '../skills-card.vue'
import {skills} from '../../stores/skills';
 const Skills = skills()
</script>

<template>
     <section class="w-full h-max lg:px-12 p-5 py-16" id="skills"> 
    <div class="flex justify-center text-4xl text-bprimary dark:text-gprimary py-7">
      <h1>My Skills</h1>
    </div>
 <div class="flex flex-col gap-2">
    <div class="flex justify-center flex-wrap gap-3">
    <div v-for="skill in Skills.fe" :key="skill">
        <SkillCard :name=" skill.name " :percent=" skill.percent " :class=" skill.class " :icon=" skill.icon " />
    </div>
   </div>
   <div class="flex justify-center flex-wrap gap-3">
    <div v-for="skill in Skills.be" :key="skill">
        <SkillCard :name=" skill.name " :percent=" skill.percent " :class=" skill.class " :icon=" skill.icon " />
    </div>
   </div>
 </div>
  </section>
</template>

<style scoped>
</style>