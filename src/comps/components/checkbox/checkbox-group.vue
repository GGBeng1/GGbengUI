<template>
    <div class="g__checkbox--group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'g-checkbox-group',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    color: {
      type: String,
      default: '#4CD864'
    }
  },
  data () {
    return {

    }
  },
  watch: {
    value (val) {
      this.updateValue()
    }
  },
  methods: {
    updateValue () {
      const value = this.value
      this.childrens = this.$children.filter(item => item.$options.name === 'g-checkbox')
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checkedModels = value
        })
      }
    },
    change (val) {
      this.$emit('input', val)
    }
  },
  mounted () {
    this.$nextTick(this.updateValue)
  }
}
</script>

<style scoped lang="scss">

</style>
