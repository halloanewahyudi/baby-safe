<script setup>
const home = useHome()


const swiperInstance = ref(null)

// Function untuk menangkap instance Swiper saat diinisialisasi
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const goNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const goPrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}
</script>
<template>

  <div>
    <Swiper class="border-2 border-dashed border-blue-200 rounded-xl" ref="swiper" :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true" :speed="1500" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" @swiper="onSwiper">
      <SwiperSlide v-for="(slide, index) in home[0].slideShow" :key="index">
        <img :src="slide.img" alt="" srcset="" class="rounded-lg h-[400px] w-full object-cover object-center">
      </SwiperSlide>
      <div class="flex gap-4 items-center p-3 absolute left-0 bottom-0 z-20">
      <button @click="goPrev" class="prev top-1/2 left-0"> <IconArrowLeft  class="text-brand  text-4xl"/> </button>
      <button @click="goNext" class="next">  <IconArrowRight  class="text-brand  text-4xl"/> </button>
    </div>
    </Swiper>

 
  </div>
</template>
<style scoped>
.swiper-pagination-bullet {
  width: 20px !important;
}
</style>