<script setup>
import clientsCard from '../clients-card.vue'
import {clients} from '../../stores/client'

const Clients = clients()

</script>
<template>
        <section class="flex flex-col items-center gap-8 py-5 overflow-x-hidden" id="clients">
      <div class="flex justify-center text-4xl text-bprimary dark:text-gprimary py-16 -mb-10">
      <h1>My clients</h1>
    </div>
    <div class="flex flex-col gap-96" v-for="(client, i) in Clients.data" :key="i">
             <div v-if="i%2==0" class="mt-10">
                <clientsCard class="lg:flex-row" :x="-100" :title="client.title" :image="client.image" :link="client.link" :description="client.description" />
             </div>

             <div v-else class="mt-10">
                <clientsCard class="lg:flex-row-reverse " :x="100" :title="client.title" :image="client.image" :link="client.link" :description="client.description" />
             </div>
            
    </div>
    </section>
</template>