<style lang="less" scoped>
  #swiper {
    width: 100%;
    height: 100vh;
    .footer {
      width: 100%;
      height: .5rem;
      border-top: 1px solid #eee;
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      ul {
        width: 100%;
        height: .5rem;
        display: flex;
        .swiper-item {
          flex: 1;
          color: rgba(58,63,58,1);
          font-size: .1rem;
          height: .5rem;
          img {
            width: .24rem;
            height: .24rem;
            margin: .05rem 0 0 0;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="swiper">
    <router-view />
    <div class="footer">
      <ul>
        <li class="swiper-item" v-for="(item, index) in banner" :key="index" @click="pageChange(index)">
          <img v-if="!item.status" :src="item.icon">
          <img v-else :src="item.icon_select">
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      banner: [{
        status: false,
        icon: require(`@/assets/images/icon/hot.png`),
        icon_select: require(`@/assets/images/icon/hot_select.png`),
        name: '热销'
      }, {
        status: true,
        icon: require(`@/assets/images/icon/product.png`),
        icon_select: require(`@/assets/images/icon/product_select.png`),
        name: '产品'
      }, {
        status: false,
        icon: require(`@/assets/images/icon/me.png`),
        icon_select: require(`@/assets/images/icon/me_select.png`),
        name: '我的'
      }]
    }
  },
  methods: {
    pageChange (eq) {
      let Url = ['/hot', '/product', '/me']
      this.banner.map(item => {
        item.status = false
      })
      this.banner[eq].status = true
      this.$router.push({
        path: Url[eq]
      })
    }
  }
}
</script>
