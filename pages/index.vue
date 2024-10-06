<script lang="ts" setup>
const { products } = useProduct()
const home = useHome()
</script>

<template>
        <div>
                <Slideshow class="pt-6" />
                <section class="my-16">
                        <h2 class="text-xl lg:text-5xl font-bold text-brand mb-5 font-indie">Favorite</h2>
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 mb-10">
                                <product-item v-for="(item, index) in products" :key="index" :image="item.image"
                                        :title="item.name"> </product-item>
                        </div>
                        <NuxtLink to="/" class="btn flex items-center gap-5 max-w-max mx-auto group"> Selengkapnya <IconArrowRight class="text-2xl group-hover:translate-x-2 duration-300" /> </NuxtLink>
                </section>
                <section class="pb-16">
                        <img :src="home[0].banner" alt="" class="rounded-xl">
                </section>
                <section class="pb-16">
                        <h2 class="text-xl lg:text-4xl font-bold text-brand mb-16 font-indie text-center max-w-screen-md mx-auto"> "Discover the world of Babysafe, where our concern for safety give parents a peace of mind"</h2>
               <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                <div v-for="item in home[0].articles" :key="item" >
                 <div class="bg-white rounded-xl overflow-hidden h-full ">
                <img :src="item.cover" alt="" srcset="" class="w-full h-52 object-cover object-center">
                <div class="relative  p-6 pt-10 flex flex-col max-h-max">
                   <img :src="item.image" alt="" class="w-20 h-20 rounded-full object-cover object-center bg-white p-3 absolute -top-10">
                   <h4 class="font-semibold text-xl text-brand">{{ item.title }}</h4>
                   <p>{{ item.description }}</p>
                </div>
                 </div>
                </div>
               </div>
               
                        </section>

        </div>
</template>