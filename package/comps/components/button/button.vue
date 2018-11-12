<template>
  <button
    class='g__btn'
    @click='handleClick'
    :style="{backgrundColor: bgColor, color: color,'border-color':borderColor}"
    :class="[
      'g__btn--'+type,
      {
        'is-round': round,
        'is-plain': plain,
        'no-radius': noRadius,
        'is-long': long
      }
    ]"
    :disabled='disabled'
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'g-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    round: Boolean,
    plain: Boolean,
    noRadius: Boolean,
    long: Boolean,
    disabled: Boolean
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return
      this.$emit('click', event)
    }
  }
}
</script>
