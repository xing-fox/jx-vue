<style lang="less" scoped>
  #details {
    font-size: 0;
    width: 100%;
    .header {
      width: 100%;
      height: 2.74rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .logo {
        width: 1.28rem;
        height: .24rem;
        position: absolute;
        top: .14rem;
        right: .18rem;
      }
    }
    .content {
      width: 100%;
      margin: .18rem 0 0 0;
      padding: 0 0 1.18rem 0;
      .title {
        display: flex;
        height: .5rem;
        line-height: .5rem;
        padding: 0 .18rem;
        border-bottom: 1px solid #eee;
        .name {
          flex: 1;
          color: #3A3F3A;
          font-size: .15rem;
          font-weight: bold;
          text-align: left;
          padding: 0 0 0 .05rem;
          position: relative;
          &:before {
            content: '';
            width: .02rem;
            height: .15rem;
            background: #F7923C;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto 0;
          }
        }
        .more {
          color: #3F86F7;
          font-size: .13rem;
          text-align: right;
        }
      }
      .lists {
        padding: .15rem .18rem;
        li {
          display: flex;
          margin: 0 0 .12rem 0;
          .name {
            flex: 1;
            color: #3A3F3A;
            font-size: .13rem;
            text-align: left;
          }
          .value {
            flex: 1;
            color: #7E817E;
            font-size: .13rem;
            text-align: right;
          }
        }
      }
      .info {
        color: #7E817E;
        font-size: .13rem;
        height: .18rem;
        line-height: .18rem;
        span {
          display: inline-block;
          vertical-align: middle;
        }
        img {
          display: inline-block;
          width: .1rem;
          height: .1rem;
          margin: 0 0 0 .03rem;
          vertical-align: middle;
        }
      }
      .footer {
        width: 100%;
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        .fypfee {
          display: flex;
          height: .5rem;
          line-height: .5rem;
          padding: 0 .18rem;
          .name {
            flex: 1;
            color: #3A3F3A;
            font-size: 15px;
            font-weight: bold;
            text-align: left;
          }
          .value {
            flex: 1;
            text-align: right;
            .box {
              display: inline-block;
              color: #fff;
              font-size: .13rem;
              letter-spacing: .01rem;
              width: .9rem;
              height: .34rem;
              line-height: .34rem;
              margin: .08rem 0 0 0;
              border-radius: .05rem;
              text-align: center;
              vertical-align: top;
              background: #f85336;
            }
          }
        }
        .submit {
          display: flex;
          width: 100%;
          height: .49rem;
          margin: .19rem 0 0 0;
          .left {
            width: .58rem;
            border-top: 1px solid #eee;
            img {
              display: inline-block;
              width: .24rem;
              height: .24rem;
              margin: .04rem 0 0 0;
              vertical-align: top;
            }
            .name {
              color: #3A3F3A;
              font-size: .1rem;
              height: .14rem;
              line-height: .14rem;
              margin: .02rem 0 0 0;
              vertical-align: top;
            }
          }
          .middle {
            flex: 1;
            color: #3A3F3A;
            font-size: .15rem;
            font-weight: bold;
            line-height: .49rem;
            text-align: left;
            padding: 0 0 0 .15rem;
            border-top: 1px solid #eee;
            position: relative;
            &:before {
              content: '';
              width: .01rem;
              height: .25rem;
              background: #eee;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              margin: auto 0;
            }
          }
          .right {
            color: #fff;
            font-size: .15rem;
            letter-spacing: .01rem;
            width: 1.5rem;
            height: .49rem;
            line-height: .49rem;
            background: #f7923c;
          }
        }
      }
      .modal {
        width: 100%;
        padding: .4rem 0 0 0;
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: .68rem;
        z-index: 1;
        .close {
          width: .28rem;
          height: .28rem;
          background-image: url('../../assets/images/icon/icon_close.png');
          background-size: 100% 100%;
          position: absolute;
          top: .12rem;
          right: .12rem;
        }
        .item {
          display: flex;
          height: .44rem;
          line-height: .44rem;
          margin: 0 .18rem;
          border-bottom: 1px solid #eee;
          &.bor-null {
            border-bottom: none;
          }
          .name {
            flex: 1;
            color: #3A3F3A;
            font-size: .15rem;
            text-align: left;
          }
          .value {
            flex: 1;
            color: #7E817E;
            font-size: .15rem;
            text-align: right;
          }
        }
        .list {
          line-height: .44rem;
          margin: 0 .18rem;
          border-bottom: 1px solid #eee;
          .name {
            color: #3A3F3A;
            font-size: .15rem;
            text-align: left;
          }
          ul {
            width: 100%;
            text-align: left;
            li {
              display: inline-block;
              color: #BFC0C3;
              font-size: .13rem;
              width: .75rem;
              height: .32rem;
              line-height: .32rem;
              margin: 0 .13rem 0 0;
              border-radius: .02rem;
              text-align: center;
              border: 1px solid #BFC0C3;
              border-radius: .02rem;
              box-sizing: border-box;
              &.on {
                color: #F7923C;
                border: 1px solid #F7923C;
              }
              &:nth-last-child(1) {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div id="details">
    <div class="header">
      <img src="../../assets/images/details.png">
      <img class="logo" src="../../assets/images/logo_1.png">
    </div>
    <div class="content">
      <div class="title">
        <div class="name">保障计划</div>
        <div class="more">查看详情</div>
      </div>
      <ul class="lists">
        <li>
          <div class="name">意外身故保险金</div>
          <div class="value">30万</div>
        </li>
        <li>
          <div class="name">意外全残补助金</div>
          <div class="value">30万</div>
        </li>
        <li>
          <div class="name">猝死保险金</div>
          <div class="value">30万</div>
        </li>
        <li>
          <div class="name">意外伤残保险金</div>
          <div class="value">30万</div>
        </li>
        <li>
          <div class="name">投保年龄</div>
          <div class="value">16-65周岁</div>
        </li>
        <li>
          <div class="name">保险期限</div>
          <div class="value">1年</div>
        </li>
      </ul>
      <div class="info">
        <span>查看更多</span>
        <img src="../../assets/images/icon/down.png">
      </div>
      <div class="footer">
        <div class="fypfee" v-if="false">
          <div class="name">30.00元 (保费)</div>
          <div class="value">
            <div class="box">
              保费试算
            </div>
          </div>
        </div>
        <div class="submit">
          <div class="left">
            <img src="../../assets/images/icon/product.png">
            <div class="name">产品</div>
          </div>
          <div class="middle">
            <span>￥30</span>
          </div>
          <div class="right">
            <span>立即投保</span>
          </div>
        </div>
      </div>
      <div class="modal">
        <div class="close"></div>
        <div class="item">
          <div class="name">投保计划</div>
          <div class="value">美亚境外旅游险</div>
        </div>
        <div class="item">
          <div class="name">投保年龄</div>
          <div class="value">60天 - 90周岁</div>
        </div>
        <div class="list">
          <div class="name">投保期限</div>
          <ul>
            <li class="on">1-3天</li>
            <li>4-7天</li>
            <li>8-15天</li>
            <li>15-30天</li>
          </ul>
        </div>
        <div class="item bor-null">
          <div class="name">可够份数</div>
          <div class="value">每名保险人最多可购一份</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcuctDetails',
  data () {
    return {}
  }
}
</script>
