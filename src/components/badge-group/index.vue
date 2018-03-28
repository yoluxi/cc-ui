<template>
  <div class="cc-badge-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'cc-badge-group',
    props: {
      isActive: {
        type: [String, Number],
        default: 0
      }
    },
    data () {
      return {
        badges: []
      }
    }
  }
</script>
<style lang="sass">
  @import "../../style/badge.scss"
</style>
