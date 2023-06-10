import { defineStore } from 'pinia'

export const skills = defineStore('skills',{
  state:()=>({
    fe:[
      {
        name:"HTML",
        percent:90,
        icon:['fab', 'html5'],
        class:"w-[90%]"
      },
      {
        name:"CSS",
        percent:70,
        icon:['fab', 'css3'],
        class:"w-[70%]"
      },
      {
        name:"Javascript",
        percent:80,
        icon:['fab', 'square-js'],
        class:"w-[80%]"
      },
      {
        name:"Vue",
        percent:80,
        icon:['fab', 'vuejs'],
        class:"w-[80%]"
      },
    ],
    be:[
      {
        name:"PHP",
        percent:80,
        icon:['fab', 'php'],
        class:"w-[80%]"
      },
      {
        name:"Laravel",
        percent:80,
        icon:['fab', 'laravel'],
        class:"w-[80%]"
      },
      {
        name:"Node",
        percent:60,
        icon:['fab', 'node'],
        class:"w-[60%]"
      },
      {
        name:"MySQL",
        percent:80,
        icon:['fas', 'database'],
        class:"w-[80%]"
      },
    ],
    tools:[
      {
        name:"Git",
        percent:80,
        icon:['fab', 'css3'],
        class:"w-[80%]"
      },

    ],
  })
})
