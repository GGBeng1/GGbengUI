<template>
    <div 
        class="g__loadMore"
        :style="{color: color}"
        :class="[
        {'g__loadmore--line is-no-data':noData}
        ]"
        @click="loadMoreAction"
    >   
        <i v-if="icon && !noData" class="g__icon--loading"></i>
        <span class="g__loadmore--tips"><slot>加载更多</slot></span>
    </div>
</template>

<script>

export default {
  name: 'g-loadmore',
  props: {
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    noData: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    loadMoreAction () {
      this.$emit('action')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
