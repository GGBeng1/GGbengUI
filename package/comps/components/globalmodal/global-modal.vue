<template>
  <transition name="fade">
    <div class="g__dialog--wrap" v-show="isVisible" ref="modal" >
      <div class="g__mask" @click="maskClose"></div>
      <div class="g__dialog">
        <div class="g__dialog--hd">
          <strong class="g__dialog--title" v-if="title">{{title}}</strong>
        </div>
        <div class="g__dialog--bd" v-if="type=='prompt'">
          <g-input v-model="promptValue" :placeholder="placeholder" :readonly="readonly" class="g__dialog--bd-input"></g-input>
        </div>
        <div class="g__dialog--bd" v-else>
          {{content}}
        </div>
        <div class="g__dialog--ft">
          <div v-if="!type||type=='alert'">
            <g-button @click="confirm" :style="{'color':color}" long>{{confirmText}}</g-button>
          </div>
          <div v-else-if="type=='confirm'">
          <g-button-group class="g__btn--group" >
            <g-button @click="close">{{cancelText}}</g-button>
            <g-button @click="confirm" :style="{'color':color}">{{confirmText}}</g-button>
          </g-button-group>
          </div>
          <div v-else-if="type=='prompt'">
          <g-button-group class="g__btn--group" >
            <g-button @click="close">{{cancelText}}</g-button>
            <g-button @click="confirm" :style="{'color':color}">{{confirmText}}</g-button>
          </g-button-group>
          </div>
          
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import gButton from '../button'
import gButtonGroup from '../buttongroup'
import ModalMixin from './ModalMixin'
export default {
  mixins: [ModalMixin],
  components: {
    gButton,
    gButtonGroup
  },
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: Boolean,
    maskClosable: {
      type: Boolean,
      default: true
    },
    content: String,
    autoClose: {
      type: Boolean,
      default: false
    },
    callBack: {
      type: Function,
      default () {}
    }
  },
  data () {
    return {
      promptValue: this.value
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.isVisible = false
      this.destroyed()
    },
    confirm () {
      this.$emit('confirm')
      this.isVisible = false
      if (this.type === 'prompt') {
        if (this.promptValue !== '') {
          this.callBack(this.promptValue)
        }
      } else {
        this.callBack()
      }
      this.destroyed()
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    },
    destroyed () {
      setTimeout(() => {
        this.$destroy()
      }, 200)
    }
  },
  mounted () {
    setTimeout(() => {
      this.isVisible = true
    }, 100)

    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, 3000)
    }
  }
}
</script>