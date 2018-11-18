<template>
    <div class="g__flex--item" @click="handleClick">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'g-flexbox-item',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
