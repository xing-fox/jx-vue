<style lang="less" scoped>
  #insure {
    font-size: 0;
    width: 100%;
    padding: 0 0 .3rem 0;
    .list {
      margin: 0 .18rem;
      .title {
        color: #3A3F3A;
        font-size: .15rem;
        font-weight: bold;
        padding: 0 0 0 .05rem;
        margin: .15rem 0 .06rem 0;
        text-align: left;
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
        span {
          color: #CACAD0;
          font-size: .11rem;
          font-weight: normal;
        }
      }
      .main {
        display: flex;
        width: 100%;
        padding: .11rem 0;
        border-bottom: 1px solid #F0F0F0;
        &:nth-last-child(1) {
          border: none;
        }
        .name {
          color: #3A3F3A;
          font-size: .15rem;
        }
        .value {
          flex: 1;
          color: #7E817E;
          font-size: .15rem;
          text-align: right;
          &.color {
            color: #3F86F7;
          }
        }
        input {
          border: none;
        }
      }
      .content {
        margin: .12rem 0 .18rem 0;
        .tip {
          color: #3A3F3A;
          font-size: .15rem;
          text-align: left;
        }
        ul {
          width: 100%;
          padding: .11rem 0 0 0;
          text-align: left;
          .list-1 {
            display: inline-block;
            color: #BFC0C3;
            font-size: .13rem;
            width: 1.1rem;
            height: .32rem;
            line-height: .32rem;
            margin: 0 .32rem 0 0;
            text-align: center;
            border-radius: .02rem;
            border: 1px solid #BFC0C3;
            box-sizing: border-box;
            &.on {
              color: #F7923C;
              border: 1px solid #F7923C;
            }
          }
          .list-2 {
            display: inline-block;
            color: #BFC0C3;
            font-size: .13rem;
            width: .75rem;
            height: .32rem;
            line-height: .32rem;
            margin: 0 .13rem 0 0;
            text-align: center;
            border-radius: .02rem;
            border: 1px solid #BFC0C3;
            box-sizing: border-box;
            &:nth-last-child(1) {
              margin: 0;
            }
            &.on {
              color: #F7923C;
              border: 1px solid #F7923C;
            }
          }
        }
      }
    }
    .tips{
      line-height: .19rem;
      margin: .1rem .18rem 0;
      text-align: left;
      i {
        display: inline-block;
        width: .12rem;
        height: .12rem;
        margin: 0 .02rem 0 0;
        background-image: url('../../assets/images/icon/icon_select.png');
        background-size: 100% 100%;
        vertical-align: middle;
      }
      span {
        color: #7E817E;
        font-size: .11rem;
        vertical-align: middle;
        &.color {
          color: #3F86F7;
        }
      }
    }
    .submit {
      color: #fff;
      font-size: .13rem;
      letter-spacing: .01rem;
      height: .44rem;
      line-height: .44rem;
      margin: .3rem .18rem 0;
      border-radius: .22rem;
      background: #f7923c;
    }
  }
</style>

<style lang="less">
  #insure {
    .vux-cell-box {
      &:not(:first-child):before {
        border: none !important;
      }
    }
  }
</style>

<template>
  <div id="insure">
    <div class="list">
      <div class="title">美亚境外旅游险</div>
      <div class="main">
        <div class="name">起保日期</div>
        <datetime class="value color" v-model="startTime" format="YYYY-MM-DD" @on-change="startTimeChange"></datetime>
      </div>
      <div class="main">
        <div class="name">终止日期</div>
        <datetime class="value color" v-model="endTime" format="YYYY-MM-DD" @on-change="startTimeChange"></datetime>
      </div>
    </div>
    <div class="list">
      <div class="title">本人信息(投保人)</div>
      <div class="main">
        <div class="name">姓名</div>
        <input class="value" type="text" placeholder="请输入姓名">
      </div>
      <div class="content">
        <div class="tip">证件类型</div>
        <ul>
          <li class="list-1 on">身份证</li>
          <li class="list-1">护照</li>
        </ul>
      </div>
      <div class="main">
        <div class="name">证件号</div>
        <input class="value" type="text" placeholder="请输入证件号">
      </div>
      <div class="main">
        <div class="name">手机号</div>
        <input class="value" type="text" placeholder="请输入11位手机号码">
      </div>
      <div class="main">
        <div class="name">邮箱</div>
        <input class="value" type="text" placeholder="五位及以上真实的电子邮箱">
      </div>
    </div>
    <div class="list">
      <div class="title">为谁投保</div>
      <div class="content">
        <div class="tip">被保人</div>
        <ul>
          <li class="list-2 on">本人</li>
          <li class="list-2">父母</li>
          <li class="list-2">配偶</li>
          <li class="list-2">子女</li>
        </ul>
      </div>
    </div>
    <div class="list">
      <div class="title">指定受益人<span>(没有选择指定受益人默认法定受益人)</span></div>
      <div class="main">
        <div class="name">受益人</div>
        <!-- <div class="value">法定</div> -->
        <popup-picker class="value" :data="manData" v-model="man" @on-change="manChange"/>
        <!-- <picker class="value" :columns="1" :data='manData' v-model='man' @on-change='manChange'></picker> -->
      </div>
    </div>
    <div class="tips">
      <i /><span>本人已阅读并同意</span><span class="color">《投保须知》、《保险条款》、《保险经纪业务委托协议》、《客户告知书》</span>
    </div>
    <div class="submit">
      <span>立即投保</span>
    </div>
  </div>
</template>

<script>
import { Datetime, Group, PopupPicker } from 'vux'
export default {
  name: 'InsureInformation',
  data () {
    return {
      startTime: '请选择起保日期',
      endTime: '请选择终止日期',
      man: ['法定'],
      manData: [['法定', '测试人员', '测试人员1']]
    }
  },
  components: {
    Group,
    PopupPicker,
    Datetime
  },
  methods: {
    manChange () {},
    startTimeChange () {}
  }
}
</script>
