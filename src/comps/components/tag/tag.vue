<template>
    <div 
        class="g__tag"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'g__tag--'+type,
        {'is-round': round}
        ]"
    >
        <span><slot></slot></span>
        <i class="g__icon--close g__tag--close" v-if="closable" @click="closeAction"></i>
    </div>
</template>

<script>

export default {
  name: 'g-tag',
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
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeAction () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
