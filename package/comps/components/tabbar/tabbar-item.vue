<template>
    <div @click="itemAciton" class="g__tabbar--item" :class="{'g__tabbar--item-active':isActive}">
        <div class="g__tabbar--item-icon">
          <i class="g__icon" :class="icon" v-if="icon"></i>
          <img v-else-if="imgSrc&&!icon" :src="imgSrc">
          <div v-if="badge" class="g__tabbar--item-badge">{{badge}}</div>
          <div v-else-if="!badge&&dot" class="g__tabbar--item-dot"></div>
        </div>
        <div class="g__tabbar--item-text"><slot></slot></div>
    </div>
</template>

<script>
export default {
  name: 'g-tabbar-item',
  props: {
    type: {
      type: String,
      default: 'router'
    },
    icon: {
      type: String,
      default: ''
    },
    href: {
      type: [ String, Object ],
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    badge: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    itemAciton (event) {
      this.$emit('click', event)
      this.$parent.$emit('input', this.href.path)
      this.routerLink()
    },
    routerLink () { // 思路来自vant https://github.com/youzan/vant/blob/dev/packages/mixins/router-link.js
      const { type, href, $router } = this
      if (type === 'router' && $router) {
        $router.push(href)
      } else {
        location.href = href
      }
    }
  },
  computed: {
    isActive () {
      if (this.$parent.value === this.href.path) {
        return true
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
