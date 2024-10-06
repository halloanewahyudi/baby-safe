<script setup>
const menu  = useMenu()
</script>
<template>
    <div class="footer py-16 bg-brand text-blue-200 w-screen relative -translate-x-1/2 left-1/2 ">
       <div class="max-w-screen-xl px-6 lg:px-14 mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <div>
               <div class="flex flex-col gap-2">
                <h4 class="font-semibold text-xl">PT. LYNEA PRIMISIMA</h4>
              <p><span> After seles services </span> <span> +62 878-8223-5848</span></p>
              <p><span> Welcome Reseller </span> <span> +62 859-7416-1839 </span></p>
                <p><span> email  </span> <span> : csbabysafe@lynea.co.id </span></p>
                <p class="flex gap-4 items-center text-2xl mt-6">
                    <IconInstagram /> 
                    <IconShopee />
                    <IconTokopedia />
                </p>
               </div>
            </div>
            <div>
                <ul class="flex flex-col gap-2">
                    <li v-for="item in menu[1].category" :key="item" >
                        <NuxtLink to="/"> {{ item.name }} </NuxtLink>
                        
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-3">
                <ul class="flex flex-col gap-2">
                    <li v-for="item in menu[0].primaryMenu" :key="item" >
                        <NuxtLink to="/"> {{ item.name }} </NuxtLink>
                        
                    </li>
                </ul>

                <p class="mt-auto">Babysafe  © 2024 | Powered by proweb</p>
            </div>
        </div>
       </div>
    </div>
</template>
<style scoped>
.footer{
    padding-bottom: 200px;
    @apply  border-t-2 border-dashed border-light;
}
.footer::after{
    content: '';
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    background-image: url('/bg-footer.png');
    background-repeat: repeat-x;
    background-position: left bottom;
}
</style>