import { defineStore } from 'pinia'



export const clients = defineStore('clients',{
  state:()=>({
    data:[
      {
        title:"Tulip Cinema",
        description:" A non-governmental organization operates independently in the field of cinema, both physically and online.The organization was founded in 2018 and has been operating since then. I was responsible for the development of the backend of the website, which was developed using the Laravel framework. ",
        image:"../..//src/assets/img/tulip.png",
        link:"https://tulipcinema.com/",
      },

      {
        title:"Kawel Co",
        description:"Kawel Company is one of the major distributors of imported foods and beverages with well known brand from over the world. Our company has more than 45 years of experience in the distribution business as well as supermarket chains. We dominate the supermarket, convenience and horeca markets.  I was responsible for the development of the backend of the website, which was developed using the Laravel framework. ",
        image:"/src/assets/img/kawel.png",
        link:"https://kawel.co/",
      },
    ]
  }),

  getters:{
    oddClients(){
      return this.data.filter((item, index)=>index%2==1)
    },

    evenClients(){
      return this.data.filter((item, index)=>index%2==0)
    }
  }
})
