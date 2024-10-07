<script setup>
import { useDebounceFn } from '@vueuse/core'
import { useSearch } from '~/composables/useSearch'
const menu = useMenu()

const openCategory = ref(false)
const selected = ref(null)
const search = ref()

// Reactive state for the search query
const searchQuery = ref('')

// Get the products from useProduct composable
const { products } = useProduct()

// Computed property to filter the products based on search query
const filteredProducts = computed(() => {
    // If products or search query are not defined, return an empty array
    if (!products.value || !searchQuery.value) {
        return []
    }

    // Filter products based on the search query
    return products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})

// Debounced input handler (optional)
const debounce = (func, delay) => {
    let timeout
    return (...args) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), delay)
    }
}

// Use debounce on search input to avoid too many updates (optional)
const onSearchInput = debounce(() => {
    filteredProducts.value // This will trigger reactivity
}, 300)

const active = ref(null)
const menuActive = (index) => {
    selected.value = index
    active[index].value = 'active'
    console.log(selected.value, active.value)
}

</script>
<template>
    <div class="navbar relative my-3 pt-7">
        <div class="py-2 px-4 border-2 border-blue-200 bg-white border-dashed rounded-xl ">
            <div class="">
                <div class="flex justify-between items-center gap-3 lg:gap-10 font-medium text-brand">
                    <div class="logo h-[50px] shrink-0">
                        <img src="public/logo.png" alt="" class="h-full">
                    </div>
                    <button class=" flex gap-2 items-center" @click="openCategory = !openCategory">
                        <IconMenu class="text-2xl" />
                        <span class="hidden lg:block"> Products</span>
                    </button>

                    <div
                        class="w-full relative hidden lg:flex justify-end items-center rounded-xl border px-2 bg-white">
                        <input v-model="searchQuery" @input="onSearchInput" type="search"
                            class="p-2 w-full border-none rounded-xl outline-none  ring-brand">
                        <IconSearch class="text-brand" />
                    </div>

                    <div class="flex items-center gap-3 text-2xl shrink-0">
                        <button class=""> <icon-shopee> </icon-shopee> </button>
                        <button class=""> <icon-tokopedia> </icon-tokopedia> </button>
                        <button class=""> <icon-instagram></icon-instagram> </button>
                    </div>
                </div>
            </div>
        </div> <!-- end menu utama -->

        <div>
                <transition>
                    <ul v-if="filteredProducts.length > 0"
                        class="flex flex-col divide-y-2 absolute z-30 w-full  bg-white  rounded-lg border border-blue-200">
                        <li v-for="product in filteredProducts" :key="product.name" class="flex gap-2 items-center p-2 hover:bg-orange-50  duration-300">
                            <img :src="product.image" :alt="product.name" class="w-7 h-7 rounded-full" />
                            <span class="font-medium text-brand">{{ product.name }}</span>
                        </li>
                    </ul>
                </transition>
            </div>

        <transition>
            <div v-if="openCategory" class=" absolute right-0 left-0 pt-6 mx-auto  z-40 ">
                <div class="p-6 rounded-xl bg-white border-2 border-blue-200 border-dashed ">
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
                        <div class="max-w-max">
                            <ul class="flex flex-col gap-4 font-medium text-brand">
                                <li v-for="(item, index) in menu[1].category" :key="index">
                                    <NuxtLink to="/" @click="menuActive(index)"  class="navlink "> {{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div v-if="menu[1].category[selected]">
                            <ul class="flex flex-col gap-4">
                                <li v-for="item in menu[1].category[selected].child" :key="item">
                                    <NuxtLink to="/">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div v-else class="lg:col-span-3 flex flex-col justify-end items-end">
                            <img src="https://www.babysafe.co.id/pic/bannerbottle_revisi4_content_312.jpg" alt="" class="w-full h-auto rounded-xl  object-contain object-top ">
                        </div>
                        <div class="lg:col-span-2 flex flex-col  items-end  rounded-r-xl ">
                            <div v-if="menu[1].category[selected]" class="bg-gradient-to-r from-white to-blue-200 h-full w-full flex flex-col justify-center items-end rounded-xl px-6" >
                                <img :src="menu[1].category[selected].image" alt="" class="max-w-[200px] h-[200px]  object-contain object-center ">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>

.navlink{
    @apply flex gap-2 items-center;
}
.navlink:focus::after{
   content: '';
   @apply w-3 h-3 bg-red-500 block rounded-full;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
    transform: translateY(0);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;

}

.v-enter-from {
    transform: translateY(100px);
}
</style>