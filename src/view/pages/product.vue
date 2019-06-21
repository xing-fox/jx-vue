<style lang="less" scoped>
  #product {
    width: 100%;
    .search {
      position: absolute;
      top: .11rem;
      left: 0;
      right: 0;
      z-index: 1;
      margin: 0 auto;
    }
    .swiper {
      width: 100%;
      height: 2.1rem;
      background: #6582ff;
      .swiper-item {
        width: 100%;
        height: 2.1rem;
        img {
          width: 100%;
        }
      }
    }
    .nav {
      width: 100%;
    }
    .content {
      padding: 0 0 .5rem 0;
    }
  }
</style>

<style lang="less">
  .vux-slider {
    .vux-swiper {
      height: 2.1rem !important;
    }
  }
</style>

<template>
  <div id="product">
    <search class="search" />
    <swiper class="swiper" @on-index-change="onSwiperItemIndexChange" :show-dots="false" :show-desc-mask="false">
      <swiper-item class="swiper-item">
        <img src="../../assets/images/banner_1.png">
      </swiper-item>
    </swiper>
    <navs class="nav" />
    <list class="content"/>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
import Navs from '@/components/pages/nav'
import Search from '@/components/pages/search'
import List from '@/components/pages/list'
export default {
  name: 'Product',
  data () {
    return {
      swiperItemIndex: ''
    }
  },
  components: {
    Navs,
    List,
    Swiper,
    Search,
    SwiperItem
  },
  methods: {
    onSwiperItemIndexChange () {}
  }
}
</script>
