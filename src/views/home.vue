<template>
	<div class="home">
		<div class="gbutton">
			<g-button>普通</g-button>
				<g-button type='primary'>primary</g-button>
				<g-button type='success'>success</g-button>
				<g-button type='warning'>warning</g-button>
				<g-button type='error'>error</g-button>
				<g-button type='text'>text</g-button>
				
				<div style='marginTop: 20px'>
					<g-button round type='primary'>椭圆按钮</g-button>
					<g-button disabled>禁用按钮</g-button>
					<g-button noRadius type='primary'>尖角按钮</g-button>
					<g-button plain type='success'>朴素按钮</g-button>
				</div>
				<div class="box">
					<g-button long type='warning' style='width: 50%'>长按钮</g-button>
				</div>
				<div class="box">
					<g-button type='warning' loading>loading按钮</g-button>
					<g-button type='primary' icon='g__icon--user'>icon按钮</g-button>
				</div>
				<div class="box" style='width:60%'>
					<g-button-group>
						<g-button type="warning">警告</g-button>
						<g-button type="primary">主要</g-button>
						<g-button type="success">成功</g-button>
					</g-button-group>
				</div>
				<div class="box">
					<g-button @click="showGolbalModel" type='primary'>全局alert</g-button>
					<g-button @click="showGolbalModel2" type='success'>全局confirm</g-button>
				</div>
				<g-flexbox direction="vertical">
					<div>普通div</div>
					<g-flexbox-item>direction="vertical" 的垂直flex div</g-flexbox-item>
					<div>普通div</div>
				</g-flexbox>
				<g-flexbox>
					<div>普通div</div>
					<g-flexbox-item>默认的水平flex div</g-flexbox-item>
					<div>普通div</div>
				</g-flexbox>
        <g-grids row="6" style='marginTop: 25px'>
          <g-grid>
            <span slot="icon" class="g__icon--phone"></span>
            <span slot="text">phone</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--lbs"></span>
            <span slot="text">lbs</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--qrcode"></span>
            <span slot="text">qrcode</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--date"></span>
            <span slot="text">date</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--nochecked"></span>
            <span slot="text">nochecked</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--checked"></span>
            <span slot="text">checked</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--radio"></span>
            <span slot="text">radio</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--search"></span>
            <span slot="text">search</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--close-outline"></span>
            <span slot="text">close-outline</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--close"></span>
            <span slot="text">close</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--homefill"></span>
            <span slot="text">homefill</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--home"></span>
            <span slot="text">home</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--myfill"></span>
            <span slot="text">myfill</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--my"></span>
            <span slot="text">my</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--userfill"></span>
            <span slot="text">userfill</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--user"></span>
            <span slot="text">user</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--contact"></span>
            <span slot="text">contact</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--link"></span>
            <span slot="text">link</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--unlock"></span>
            <span slot="text">unlock</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--lock"></span>
            <span slot="text">lock</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--likefill"></span>
            <span slot="text">likefill</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--like"></span>
            <span slot="text">like</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--reduce-outline"></span>
            <span slot="text">reduce-outline</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--reduce"></span>
            <span slot="text">reduce</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--add-outline"></span>
            <span slot="text">add-outline</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--add"></span>
            <span slot="text">add</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--edit"></span>
            <span slot="text">edit</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--delete"></span>
            <span slot="text">delete</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--photodel"></span>
            <span slot="text">photodel</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--photo"></span>
            <span slot="text">photo</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--msgfill"></span>
            <span slot="text">msgfill</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--msg"></span>
            <span slot="text">msg</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--menumore"></span>
            <span slot="text">menumore</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--menu"></span>
            <span slot="text">menu</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--tips"></span>
            <span slot="text">tips</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--refresh"></span>
            <span slot="text">refresh</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--share"></span>
            <span slot="text">share</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--totop"></span>
            <span slot="text">totop</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--attachment"></span>
            <span slot="text">attachment</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--emoji"></span>
            <span slot="text">emoji</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--scan"></span>
            <span slot="text">scan</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--mall"></span>
            <span slot="text">mall</span>
          </g-grid>

          <g-grid>
            <span slot="icon" class="g__icon--filter"></span>
            <span slot="text">filter</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--sort"></span>
            <span slot="text">sort</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--loading"></span>
            <span slot="text">loading</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--left"></span>
            <span slot="text">left</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--right"></span>
            <span slot="text">right</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--up"></span>
            <span slot="text">up</span>
          </g-grid>
          <g-grid>
            <span slot="icon" class="g__icon--down"></span>
            <span slot="text">down</span>
          </g-grid>
        </g-grids>
        <!-- <g-radio-group v-model="radio" color="#4cd864">
          <g-radio value="北京"></g-radio>
          <g-radio value="上海"></g-radio>
          <g-radio value="广东" disabled>广东--disabled</g-radio>
          <g-radio value="香港">香港</g-radio>
        </g-radio-group>
        <g-radio-group v-model="radio" color="#ed3f14" hor>
          <g-radio value="北京"></g-radio>
          <g-radio value="上海"></g-radio>
          <g-radio value="广东" disabled>广东--disabled</g-radio>
          <g-radio value="香港">香港</g-radio>
        </g-radio-group>
        <g-checkbox-group v-model="checkbox" color="#4cd864">
          <g-checkbox value="1">北京</g-checkbox>
          <g-checkbox value="2">上海</g-checkbox>
          <g-checkbox value="3" disabled>广东--disabled</g-checkbox>
          <g-checkbox value="4">香港</g-checkbox>
        </g-checkbox-group> -->
        <g-select :data="selectList" @change="selectAction" v-model="curSelected"></g-select>
        <g-select right :data="selectList" v-model="curSelected"></g-select>
        <g-switch value="switch" @input="switchAction"></g-switch>
        <div class="box">
          <g-tag>普通</g-tag>
          <g-tag type="primary">primary</g-tag>
          <g-tag type="success">success</g-tag>
          <g-tag type="warning" round>warning</g-tag>
          <g-tag type="error" round>error</g-tag>
          <g-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</g-tag>
          <g-tag type="success" v-if="tag1" closable @close="tag1=false">success</g-tag>
				</div>
        <div class="box">
          <g-search bg-color="#09c" @action="searchAction" v-model="value" action-text-color="#fff"><span slot="search">确定</span></g-search>
          <g-search placeholder="自定义placeholder" v-model="value" @input="inputAction" action-text-color="#777" cancel-text-color="#777" @action="searchAction" @cancel="searchCancel">
            <span slot="search">搜索</span><span slot="cancel">取消</span>
          </g-search>
				</div>
         <h4>导航栏(顶部)</h4>
        <div class="box">
          <g-navbar title="首页文字首页文字首页文字首页文字" bgcolor='#fff' color="#333" left-text="返回" left-icon="g__icon--left" right-text="设置" @left-action="clickLeft" @right-action="clickRight"></g-navbar>
          <br>
          <g-navbar bgcolor='#fff' color="#333" left-text="" left-icon="g__icon--left" right-icon="g__icon--edit" @left-action="clickLeft" @right-action="clickRight"><img src="../assets/logo.png"></g-navbar>
          <g-navbar bgcolor='#fff' color="#333" left-text="" left-icon="g__icon--left" right-icon="g__icon--edit" @left-action="clickLeft" @right-action="clickRight" ><div><span slot="icon" class="g__icon--loading"></span>这里是HTML</div></g-navbar>
        </div>
          


        <h4>标签栏(底部)</h4>
        <div class="box">
          <g-tabbar v-model="active">
            <g-tabbar-item icon="g__icon--home" type="link" href="" dot>首页</g-tabbar-item>
            <g-tabbar-item icon="g__icon--mall" :href="hrefObj" badge="8" @click="routerAction"><span slot="badge">8</span>商城</g-tabbar-item>
            <g-tabbar-item icon="g__icon--add" href="add" class="add"></g-tabbar-item>
            <g-tabbar-item href="###" img-src="../../static/gg.png">自定义图</g-tabbar-item>
            <g-tabbar-item icon="g__icon--my" href="my" badge="11">我的</g-tabbar-item>
          </g-tabbar>
        </div>
        <div class="box">
          <g-button @click='toastClick1' type='primary'>Toast1</g-button>
          <g-button @click='toastClick2' type='success'>Toast2</g-button>
        </div>
        <div class="box">
          <g-button type="success" @click="actionSheetVisible1=true">有取消</g-button>
          <g-button type="primary" @click="actionSheetVisible2=true">无取消</g-button>
          <g-actionsheet :item-list="itemList" cancel="取消" cancel-color="#19be6b" v-model="actionSheetVisible1" header="这里是个标题" has-icon></g-actionsheet>
          <g-actionsheet :item-list="itemList" v-model="actionSheetVisible2"></g-actionsheet>
        </div>
        <div class="box">
          <g-loadmore @action="loadMore"></g-loadmore>
          <g-loadmore icon color="#2d8cf0">loading...</g-loadmore>
          <g-loadmore no-data>暂无数据</g-loadmore>
        </div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      tag1: true,
      radio: '北京',
      selectList: [
        { name: '请选择出行方式', value: 0 },
        { name: '巴士', value: 1 },
        { name: '快车', value: 2 },
        { name: '专车', value: 3 },
        { name: '顺风车', value: 4 },
        { name: '出租车', value: 5 },
        { name: '代驾', value: 6 }
      ],
      curSelected: '3',
      checkbox: ['1', '4'],
      switch: true,
      value: '',
      hrefObj: { path: '/mall', name: 'mall', params: { userId: 123 } },
      active: '/mall',
      itemList: [
        { text: '顺风车',
          icon: '<span class="g__icon--loading"></span>',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '我是actionsheet弹出来的',
              color: '#19be6b'
            })
          }
        },
        { text: '巴士', icon: '<img src="../../static/gg.png"/>', callBack: () => {} },
        { text: '快车',
          icon: '<p>“别打算XSS攻击”</p>',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '想了解vue XSS攻击点确定',
              color: '#19be6b',
              callBack: () => {
                location.href = 'https://www.ggbeng.xyz'
              }
            })
          }
        },
        { text: '专车', callBack: () => {} }
      ],
      actionSheetVisible1: false
    }
  },
  methods: {
    showGolbalModel () {
      this.$modal.alert({
        title: '这里可以自定义',
        content: '开启autoClose自动3秒关闭',
        confirmText: '关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: false
      })
    },
    showGolbalModel2 () {
      this.$modal.confirm({
        title: '提示',
        content: '提示信息',
        confirmText: '确认',
        cancelText: '关闭',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            confirmText: '确认',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
      })
    },
    toastClick1 () {
      this.$toast.text({content: '太长会换行呢，15个字以内最好', direction: 'bottom', mask: true})
    },
    toastClick2 () {
      this.$toast.loading({
        mask: false
      })
    },
    selectAction () {
      console.log(this.curSelected)
    },
    switchAction () {
      console.log(this.switch)
    },
    inputAction () {

    },
    searchAction () {

    },
    searchCancel () {
      this.value = ''
    },
    clickLeft () {

    },
    clickRight () {

    },
    routerAction () {

    }
  }
}
</script>

<style lang='scss'>
.home {
  position: relative;
  // padding-left: 120px;
  .gbutton {
    position: relative;
  }
  .title {
    font-size: 50px;
    color: #fc0069;
    text-align: left;
  }
  .box {
    margin: 0 auto;
    margin-top: 20px;
  }
  .g__tabbar--item .g__tabbar--item-icon img {
      width: 8.2rem;
  }
}
</style>
