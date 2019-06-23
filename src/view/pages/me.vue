<style lang="less" scoped>
  #me {
    font-size: 0;
    position: relative;
    .header {
      width: 100%;
      height: 1.1rem;
      background-image: url('../../assets/images/me_bg.png');
      background-size: 100% 100%;
      .photo {
        width: .6rem;
        height: .6rem;
        background-image: url('../../assets/images/icon/icon_header.png');
        background-size: 100% 100%;
        position: absolute;
        top: .65rem;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
    .phone {
      color: #3A3F3A;
      font-size: .15rem;
      font-weight: bold;
      margin: .28rem 0 0 0;
      text-align: center;
    }
    .nav {
      display: flex;
      width: 100%;
      margin: .26rem 0 .5rem 0;
      li {
        flex: 1;
        text-align: center;
        i {
          display: inline-block;
          width: .48rem;
          height: .48rem;
          background-size: 100% 100%;
          &.icon-1 {
            background-image: url('../../assets/images/icon/icon_policy.png');
          }
          &.icon-2 {
            background-image: url('../../assets/images/icon/icon_collet.png');
          }
          &.icon-3 {
            background-image: url('../../assets/images/icon/icon_cliam.png');
          }
        }
        .name {
          color: #3A3F3A;
          font-size: .11rem;
        }
      }
    }
    .item {
      display: flex;
      height: .44rem;
      line-height: .44rem;
      margin: 0 .18rem;
      .icon {
        display: inline-block;
        width: .16rem;
        height: .16rem;
        margin: .14rem .05rem 0 0;
        background-size: 100% 100%;
        &.icon-1 {
          background-image: url('../../assets/images/icon/icon_wx.png');
        }
        &.icon-2 {
          background-image: url('../../assets/images/icon/icon_service.png');
        }
        &.icon-3 {
          background-image: url('../../assets/images/icon/icon_header_select.png');
        }
      }
      .name {
        flex: 1;
        color: #3A3F3A;
        font-size: .15rem;
        text-align: left;
      }
      .item-phone {
        color: #BFC0C3;
        font-size: .15rem;
        margin: 0 .05rem 0 0;
      }
      .arrow {
        display: inline-block;
        width: .1rem;
        height: .1rem;
        margin: .17rem 0 0 0;
        background-image: url('../../assets/images/icon/right.png');
        background-size: 100% 100%;
      }
    }
  }
</style>

<template>
  <div id="me">
    <div class="header">
      <div class="photo">
        <img src="">
      </div>
    </div>
    <div class="phone">18226626731</div>
    <ul class="nav">
      <li @click="changeFunc">
        <i class="icon icon-1" />
        <div class="name">我的保单</div>
      </li>
      <li>
        <i class="icon icon-2" />
        <div class="name">我的收藏</div>
      </li>
      <li>
        <i class="icon icon-3" />
        <div class="name">我的理赔</div>
      </li>
    </ul>
    <div class="item bor-1px-b">
      <i class="icon icon-1"></i>
      <span class="name">关注微信</span>
      <i class="arrow"></i>
    </div>
    <div class="item bor-1px-b">
      <i class="icon icon-2"></i>
      <span class="name">客服电话</span>
      <span class="item-phone">18226626731</span>
      <i class="arrow"></i>
    </div>
    <div class="item">
      <i class="icon icon-3"></i>
      <span class="name">关于集保</span>
      <i class="arrow"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  methods: {
    changeFunc () {
      this.$router.push({
        path: '/orderList'
      })
    }
  }
}
</script>
