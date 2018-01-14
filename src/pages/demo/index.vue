<template>
  <div>
    <div @click="shows">
      {{show ? '关闭' : '弹出'}}默认键盘
    </div>
    <number-keyboard :show="show" close-button-text="完成"></number-keyboard>
  </div>
</template>
<script>
  import NumberKeyboard from 'components/number-keybord/index'

  export default {
    components: {
      NumberKeyboard
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      shows() {
        this.show = !this.show
      }
    }
  }
</script>
<style>

</style>
