<style lang="less" scoped>
  .nav {
    display: flex;
    width: 100%;
    height: .44rem;
    line-height: .44rem;
    border-bottom: 1px solid #eee;
    li {
      flex: 1;
      color: #3A3F3A;
      font-size: .16rem;
      &.on {
        color: #F7923C;
        font-weight: bold;
        position: relative;
        &:after {
          content: '';
          width: .22rem;
          height: .02rem;
          background: #F7923C;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
        }
      }
    }
  }
</style>

<template>
  <ul>
    <li v-for="(item, index) in Data" :class="{on: item.status}" :key="index" @click="change(index)">
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      Data: [{
        name: '保出行',
        status: true
      }, {
        name: '保医疗',
        status: false
      }, {
        name: '保意外',
        status: false
      }]
    }
  },
  methods: {
    change (eq) {
      this.Data.map(item => {
        item.status = false
      })
      this.Data[eq].status = true
    }
  }
}
</script>
