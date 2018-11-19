<template>
    <label class="g__checkbox" :class="[{'disabled':disabled}]">
        <span class="g__checkbox--text"><slot>{{value}}</slot></span>
        <input type="checkbox" :value="value" @change="onChange" :disabled="disabled" v-model="checkedModels"/>
        <span class="g__checkbox--icon g__icon--checked" :style="[{'color': $parent.color}]"></span>
    </label>
</template>

<script>
export default {
  name: 'g-checkbox',
  props: {
    value: [String, Number],
    disabled: Boolean
  },
  data () {
    return {
      // checked: false,
      checkedModels: []
    }
  },
  methods: {
    onChange (event) { // @change 组件改变后的操作
      if (this.disabled) return
      setTimeout(() => {
        // this.$parent.$emit('input', this.checkedModels) // 把数组结果回传
        this.$parent.change(this.checkedModels)
      }, 0)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
