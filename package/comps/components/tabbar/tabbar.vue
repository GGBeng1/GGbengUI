<template>
    <footer class="g__tabbar">
      <slot></slot>
    </footer>
</template>

<script>
export default {
  name: 'g-tabbar',
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
