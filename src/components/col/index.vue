<template>
    <div class="cc-col" :style="style" :class="{[`cc-col-span-${span}`]: span, [`cc-col-offset-${offset}`]: offset}">
      <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'cc-col',
    props: {
      span: [Number, String],
      offset: [Number, String]
    },
    computed: {
      gutter () {
        return (this.$parent && Number(this.$parent.gutter)) || 0
      },
      style () {
        const padding = this.$parent.gutter / 2 + 'px'
        return this.gutter ? {paddingLeft: padding, paddingRight: padding} : {}
      }
    }
  }
</script>
<style lang="sass" scoped>
  @import "../../style/col.scss"
</style>
