<template>
    <div class="g__grids" :class="'g__grids--'+row">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'g-grids',
  props: {
    row: {
      type: String,
      default: '4'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
