<template>
  <div>
    <div class="demo-title">
      Badge
    </div>
    <div class="demo-container">
      <div class="demo-subtitle">
        基础用法
      </div>
      <cc-badge-group :isActive="activeKey">
        <cc-badge title="标签名称" @click="onClick"></cc-badge>
        <cc-badge title="标签名称" @click="onClick" info="50"></cc-badge>
        <cc-badge title="标签名称" @click="onClick" info="199"></cc-badge>
      </cc-badge-group>
    </div>
  </div>
</template>
<script>
  import ccBadgeGroup from 'components/badge-group/index'
  import ccBadge from 'components/badge/index'
  export default {
    name: 'Badge',
    components: {
      ccBadgeGroup,
      ccBadge
    },
    data () {
      return {
        activeKey: 0
      }
    },
    methods: {
      onClick (key) {
        this.activeKey = key
      }
    }
  }
</script>
<style scoped="">
  @import "../../style/base.scss"
</style>
