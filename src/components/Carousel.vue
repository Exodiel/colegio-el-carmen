<template>
  <a-layout-content>
    <div class="box">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="(item,index) in numbers" :key="item" :class="'slide-' + (index+1)"></swiper-slide>
        
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide v-for="(item,index) in numbers" :key="item" :class="'slide-' + (index+1)"></swiper-slide>
      </swiper>
    </div>
  </a-layout-content>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      swiperOptionTop: {
        spaceBetween: 10,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #212121;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  @for $i from 1 through 14 {
    &.slide-#{$i} {
      background-image: url("../assets/carousel/#{$i}.jpg");
    }
  }
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.box {
  @media (min-width: 320px) and (max-width: 480px) {
    height: 300px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    height: 500px;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    height: 800px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 800px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 800px;
  }
  @media (min-width: 1281px) {
    height: 800px;
  }
}
</style>