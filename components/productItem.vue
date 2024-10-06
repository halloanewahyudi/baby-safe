<script  setup>
const props = defineProps({
    image:String,
    title:String,
    description:String
})
</script>

<template>
    <div class="rounded-xl p-6 hover:shadow-xl duration-300  border-2 border-blue-200 bg-white border-dashed ">
        <img :src="props.image" alt="" srcset="" class="w-full h-[230px] object-contain ">
        <div class="text-center">
            <h4 class="text-xl font-semibold text-brand mb-3"> {{ props.title }}</h4>
            <p>{{ props.description }}</p>
        </div>
    </div>
</template>
