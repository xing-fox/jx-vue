<style lang="less" scoped>
  .swiper {
    width: 100%;
    height: 100vh;
    position: relative;
    .footer {
      width: 100%;
      height: .5rem;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      .name {
        color: rgba(58,63,58,1);
        font-size: .1rem;
      }
    }
  }
</style>

<template>
  <div id="swiper">
    <div class="footer">
      <ul>
        <li v-for="(item, index) in banner" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const Url = '@/assets/images/icon/'
export default {
  name: 'Index',
  data () {
    return {
      banner: [{
        icon: require(`${Url}hot.png`),
        icon_select: require(`${Url}hot.png`),
        name: '热销'
      }, {
        icon: require(`${Url}product.png`),
        icon_select: require(`${Url}product_select.png`),
        name: '产品'
      }, {
        icon: require(`${Url}me.png`),
        icon_select: require(`${Url}me_select.png`),
        name: '我的'
      }]
    }
  },
  methods: {}
}
</script>
