<template>
  <div>
    <div class="demo-title">
      Layout
    </div>
    <div class="demo-container">
      <div class="demo-subtitle">基本用法</div>
      <cc-row class="demo-row">
        <cc-col span="1">span:10</cc-col>
        <cc-col span="1">span:8</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:10</cc-col>
        <cc-col span="1">span:8</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:10</cc-col>
        <cc-col span="1">span:8</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:10</cc-col>
        <cc-col span="1">span:8</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
        <cc-col span="1">span:6</cc-col>
      </cc-row>
      <cc-row class="demo-row">
        <cc-col span="24">span:24</cc-col>
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
    name: 'Layout',
    components: {
      ccCol,
      ccRow
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
  @import "../../style/base.scss"
  /*.demo-row {*/
    /*margin-bottom: 10px;*/
  /*}*/
</style>
