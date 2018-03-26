<template>
  <div>
    <div class="demo-title">
      Layout
    </div>
    <div class="demo-container">
      <div class="demo-subtitle">基本用法</div>
      <cc-row class="demo-row">
        <cc-col span="10">span:10</cc-col>
        <cc-col span="8">span:8</cc-col>
        <cc-col span="6">span:6</cc-col>
      </cc-row>
      <div class="demo-subtitle">设置偏移</div>
      <cc-row class="demo-row">
        <cc-col span="8">span:8</cc-col>
        <cc-col span="8" offset="4">offset:4</cc-col>
      </cc-row>
      <div class="demo-subtitle">添加间距</div>
      <cc-row gutter="20" class="demo-row">
        <cc-col span="8">span:8</cc-col>
        <cc-col span="8">span:8</cc-col>
        <cc-col span="8">span:8</cc-col>
      </cc-row>
    </div>
  </div>
</template>
<script>
  import ccCol from 'components/col/index'
  import ccRow from 'components/row/index'

  export default {
    name:'Layout',
    components: {
      ccCol,
      ccRow
    },
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
  .demo-container {
    padding:0 15px;
    background-color: #f8f8f8;
    margin-top: 15px;
    height: 420px;
  }
  .demo-row {
    margin-bottom: 10px;
  }
  .demo-title {
    background-color: #ffffff;
    text-align: center;
    height: 46px;
    line-height: 46px;
    font-size: 25px;
  }
  .demo-subtitle {
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    text-align: left;
  }
</style>
