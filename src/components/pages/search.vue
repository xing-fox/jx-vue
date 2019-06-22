<style lang="less" scoped>
  .input-search {
    display:table;
    border: none;
    width: 3.4rem;
    height: .24rem;
    border-radius: .12rem;
    text-align: center;
    background: #fff;
    .box {
      vertical-align:middle;
      display:table-cell;
      img {
        width: .15rem;
        height: .15rem;
        margin: 0 .03rem 0 0;
        vertical-align: middle;
      }
      span {
        color: #bcb6b7;
        font-size: .12rem;
        vertical-align: middle;
      }
    }
  }
</style>

<template>
  <div class="input-search">
    <div class="box">
      <img src="../../assets/images/icon/search.png">
      <span>搜索产品</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>
