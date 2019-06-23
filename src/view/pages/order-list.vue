<style lang="less" scoped>
#order {
  font-size: 0;
  width: 100%;
  padding: 0.62rem 0 0 0;
  .title {
    display: flex;
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    li {
      flex: 1;
      color: #3a3f3a;
      font-size: 0.15rem;
      &.active {
        color: #f7923c;
        font-weight: bold;
        position: relative;
        &:before {
          content: "";
          width: 0.24rem;
          height: 0.02rem;
          background: #f7923c;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
        }
      }
    }
  }
  .list {
    width: 100%;
    li {
      width: 100%;
      margin: 0 0 .18rem 0;
      .type {
        display: flex;
        height: 0.44rem;
        line-height: 0.44rem;
        padding: 0 .18rem;
        .name {
          flex: 1;
          color: #3a3f3a;
          font-size: 0.15rem;
          font-weight: bold;
          padding: 0 0 0 .08rem;
          text-align: left;
          position: relative;
          &:before {
            content: "";
            width: 0.02rem;
            height: 0.15rem;
            background: #f7923c;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto 0;
          }
        }
        .value {
          flex: 1;
          font-size: 0.13rem;
          text-align: right;
          &.color-1 {
            color: #3F86F7;
          }
          &.color-2 {
            color: #F7923C;
          }
          &.color-3 {
            color: #F85336;
          }
          &.color-4 {
            color: #0DDB5C;
          }
        }
      }
      .content {
        display: flex;
        padding: .18rem .18rem .16rem .18rem;
        .order-image {
          width: .8rem;
          height: .8rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .order-info {
          flex: 1;
          margin: .03rem 0 0 .18rem;
          .order-info-list {
            display: flex;
            font-size: .13rem;
            width: 100%;
            height: .18rem;
            line-height: .18rem;
            margin: 0 0 .12rem 0;
            &:nth-last-child(1) {
              margin: 0;
            }
            .list-key {
              color: #3A3F3A;
              text-align: left;
            }
            .list-value {
              flex: 1;
              color: #7E817E;
              text-align: right;
            }
          }
        }
      }
      .time {
        color: #7E817E;
        font-size: .13rem;
        text-align: right;
        padding: 0 .18rem .16rem .18rem;
        span {
          color: #3A3F3A;
        }
      }
      .footer {
        display: flex;
        justify-content : flex-end;
        padding: .11rem .18rem .11rem 0;
        text-align: right;
        .button {
          display: table;
          color: #7E817E;
          font-size: .13rem;
          width: .78rem;
          height: .28rem;
          text-align: center;
          margin: 0 0 0 .09rem;
          border: 1px solid #BFC0C3;
          border-radius: .17rem;
          box-sizing: border-box;
          span {
            display: table-cell;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div id="order">
    <ul class="title">
      <li
        v-for="(item, index) in navData"
        :class="{active: item.status}"
        :key="index"
        @click="change(index )"
      >{{ item.name }}</li>
    </ul>
    <ul class="list">
      <li>
        <div class="type bor-1px-b">
          <span class="name">美亚境外旅游险</span>
          <span class="value color-1">保障中</span>
        </div>
        <div class="content">
          <div class="order-image">
            <img src="../../assets/images/product/1.png">
          </div>
          <ul class="order-info">
            <li class="order-info-list">
              <div class="list-key">订单号：</div>
              <div class="list-value">BC0000000001</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">投保人：</div>
              <div class="list-value">张三</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">被保人：</div>
              <div class="list-value">李四</div>
            </li>
          </ul>
        </div>
        <div class="time">
          <span>投保时间：</span>2019-06-17 18:12
        </div>
        <div class="footer bor-1px-t">
          <div class="button">
            <span>再次购买</span>
          </div>
          <div class="button">
            <span>快速理赔</span>
          </div>
          <div class="button">
            <span>保单下载</span>
          </div>
        </div>
      </li>
      <li>
        <div class="type">
          <span class="name">美亚境外旅游险</span>
          <span class="value color-2">已到期</span>
        </div>
        <div class="content">
          <div class="order-image">
            <img src="../../assets/images/product/1.png">
          </div>
          <ul class="order-info">
            <li class="order-info-list">
              <div class="list-key">订单号：</div>
              <div class="list-value">BC0000000001</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">投保人：</div>
              <div class="list-value">张三</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">被保人：</div>
              <div class="list-value">李四</div>
            </li>
          </ul>
        </div>
        <div class="time">
          <span>投保时间：</span>2019-06-17 18:12
        </div>
        <div class="footer bor-1px-t">
          <div class="button">
            <span>再次购买</span>
          </div>
          <div class="button">
            <span>快速理赔</span>
          </div>
          <div class="button">
            <span>保单下载</span>
          </div>
        </div>
      </li>
      <li>
        <div class="type">
          <span class="name">美亚境外旅游险</span>
          <span class="value color-3">待支付</span>
        </div>
        <div class="content">
          <div class="order-image">
            <img src="../../assets/images/product/1.png">
          </div>
          <ul class="order-info">
            <li class="order-info-list">
              <div class="list-key">订单号：</div>
              <div class="list-value">BC0000000001</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">投保人：</div>
              <div class="list-value">张三</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">被保人：</div>
              <div class="list-value">李四</div>
            </li>
          </ul>
        </div>
        <div class="time">
          <span>投保时间：</span>2019-06-17 18:12
        </div>
        <div class="footer bor-1px-t">
          <div class="button">
            <span>再次购买</span>
          </div>
          <div class="button">
            <span>快速理赔</span>
          </div>
          <div class="button">
            <span>保单下载</span>
          </div>
        </div>
      </li>
      <li>
        <div class="type">
          <span class="name">美亚境外旅游险</span>
          <span class="value color-4">已生效</span>
        </div>
        <div class="content">
          <div class="order-image">
            <img src="../../assets/images/product/1.png">
          </div>
          <ul class="order-info">
            <li class="order-info-list">
              <div class="list-key">订单号：</div>
              <div class="list-value">BC0000000001</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">投保人：</div>
              <div class="list-value">张三</div>
            </li>
            <li class="order-info-list">
              <div class="list-key">被保人：</div>
              <div class="list-value">李四</div>
            </li>
          </ul>
        </div>
        <div class="time">
          <span>投保时间：</span>2019-06-17 18:12
        </div>
        <div class="footer bor-1px-t">
          <div class="button">
            <span>再次购买</span>
          </div>
          <div class="button">
            <span>快速理赔</span>
          </div>
          <div class="button">
            <span>保单下载</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      navData: [{
        name: '全部',
        status: true
      }, {
        name: '保障中',
        status: false
      }, {
        name: '已到期',
        status: false
      }, {
        name: '待支付',
        status: false
      }, {
        name: '已生效',
        status: false
      }]
    }
  },
  methods: {
    change (eq) {
      this.navData.map(item => {
        item.status = false
      })
      this.navData[eq].status = true
    }
  }
}
</script>
