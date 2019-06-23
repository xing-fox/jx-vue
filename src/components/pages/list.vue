<style lang="less" scoped>
  .data {
    width: 100%;
    .data-list {
      display: flex;
      padding: 0 0 .18rem 0;
      margin: .18rem .2rem 0 .18rem;
      .list-img {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        border-radius: .08rem;
      }
      .list-product {
        flex: 1;
        text-align: left;
        margin: .08rem 0 0 .18rem;
        .product-title {
          color: #3a3f3a;
          font-size: .15rem;
          .flag {
            height: .15rem;
            margin: 0 0 0 .1rem;
            vertical-align: middle;
          }
        }
        .product-intro {
          color: #7e817e;
          font-size: .13rem;
          margin: .03rem 0 .08rem 0;
        }
        .product-price {
          color: #F7923C;
          font-size: .15rem;
          font-weight: bold;
        }
      }
      .list-arrow {
        width: .12rem;
        height: .12rem;
        margin: .34rem 0;
        vertical-align: middle;
      }
    }
  }
</style>

<template>
  <ul class="data">
    <li class="data-list bor-1px-b" @click="changeDetails">
      <img class="list-img" src="../../assets/images/product/1.png">
      <div class="list-product">
        <div class="product-title">
          美亚境外旅游险
          <img class="flag" src="../../assets/images/product/tag.png">
        </div>
        <div class="product-intro">简单描述，字体大小13pt</div>
        <div class="product-price">￥30元起</div>
      </div>
      <img class="list-arrow" src="../../assets/images/icon/right.png">
    </li>
    <li class="data-list bor-1px-b" @click="changeDetails">
      <img class="list-img" src="../../assets/images/product/2.png">
      <div class="list-product">
        <div class="product-title">美亚境外旅游险</div>
        <div class="product-intro">简单描述，字体大小13pt</div>
        <div class="product-price">￥30元起</div>
      </div>
      <img class="list-arrow" src="../../assets/images/icon/right.png">
    </li>
    <li class="data-list bor-1px-b" @click="changeDetails">
      <img class="list-img" src="../../assets/images/product/3.png">
      <div class="list-product">
        <div class="product-title">美亚境外旅游险</div>
        <div class="product-intro">简单描述，字体大小13pt</div>
        <div class="product-price">￥30元起</div>
      </div>
      <img class="list-arrow" src="../../assets/images/icon/right.png">
    </li>
    <li class="data-list bor-1px-b" @click="changeDetails">
      <img class="list-img" src="../../assets/images/product/1.png">
      <div class="list-product">
        <div class="product-title">
          美亚境外旅游险
          <img class="flag" src="../../assets/images/product/tag.png">
        </div>
        <div class="product-intro">简单描述，字体大小13pt</div>
        <div class="product-price">￥30元起</div>
      </div>
      <img class="list-arrow" src="../../assets/images/icon/right.png">
    </li>
    <li class="data-list bor-1px-b" @click="changeDetails">
      <img class="list-img" src="../../assets/images/product/2.png">
      <div class="list-product">
        <div class="product-title">美亚境外旅游险</div>
        <div class="product-intro">简单描述，字体大小13pt</div>
        <div class="product-price">￥30元起</div>
      </div>
      <img class="list-arrow" src="../../assets/images/icon/right.png">
    </li>
    <li class="data-list" @click="changeDetails">
      <img class="list-img" src="../../assets/images/product/3.png">
      <div class="list-product">
        <div class="product-title">美亚境外旅游险</div>
        <div class="product-intro">简单描述，字体大小13pt</div>
        <div class="product-price">￥30元起</div>
      </div>
      <img class="list-arrow" src="../../assets/images/icon/right.png">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  methods: {
    changeDetails () {
      this.$router.push({
        path: '/pdetails'
      })
    }
  }
}
</script>
