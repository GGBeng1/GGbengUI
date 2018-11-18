<template>
  <div class="g__flexbox" :class="directionClass">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-flexbox',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    directionClass () {
      return this.direction === 'vertical' ? 'g__flex--vertical' : ''
    }
  }
}
</script>

<style scoped lang="scss">
</style>
