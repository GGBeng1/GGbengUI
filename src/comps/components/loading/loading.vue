<template>
  <transition name="modal-fade">
    <div class="g__loading--wrap">
      <div class="g__mask" v-if="fullScreen"></div>
      <div 
          class="g__loading"
          :class="[
          {'g__loading--fullScreen':fullScreen,'customize':$slots.cus}
          ]"
      >   
          <template v-if="!$slots.cus">
            <span class="g__loading--loader" 
            :class="[
            {'g__loading--vertical':vertical,'borderRightTransparent':color}
            ]"
            :style="{'width': width+'px','height': height+'px','border-color': color,'border-width': borderWidth+'px'}"
            ></span>
            <span class="g__loading--text" v-if="hasText"><slot>加载中...</slot></span>
          </template>
          <slot v-else name="cus"></slot>
          <!-- cus 为customize自定义缩写 -->
          <i class="g__icon--close g__loading--close" v-if="fullScreen&&closable" @click="closeAction"></i>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'g-loading',
  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: String,
      default: ''
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    hasText: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
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
