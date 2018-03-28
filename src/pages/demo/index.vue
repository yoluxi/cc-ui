<template>
  <div>
    <div>
      <div @click="shows">
        {{show ? '关闭' : '弹出'}}默认键盘
      </div>
      <div @click="showLayout">
        layout
      </div>
      <div @click="showBadge">
        badge
      </div>
      <number-keyboard :show="show" close-button-text="完成"></number-keyboard>
    </div>
  </div>
</template>
<script>
  import NumberKeyboard from 'components/number-keybord/index'

  export default {
    components: {
      NumberKeyboard
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      shows () {
        this.show = !this.show
      },
      showLayout () {
        this.$router.push({path: '/layout'})
      },
      showBadge () {
        this.$router.push({path: '/badge'})
      }
    }
  }
</script>
<style>

</style>
