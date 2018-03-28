<template>
  <div class="cc-badge cc-hairline" :class="{'cc-badge-selected': isSelected }" @click="onClick">
    <div v-if="info" class="cc-badge-info">{{info}}</div>
    {{ title }}
  </div>
</template>
<script>
  export default {
    name: 'cc-badge',
    props: {
      info: String,
      title: String
    },
    beforeCreate () {
      this.$parent.badges.push(this)
    },
    computed: {
      isSelected () {
        return this.$parent.badges.indexOf(this) === this.$parent.isActive
      }

    },
    methods: {
      onClick () {
        this.$emit('click', this.$parent.badges.indexOf(this))
      }
    }
  }
</script>
<style lang="sass">
  @import "../../style/badge.scss"
</style>
