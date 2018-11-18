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
					<g-flexbox-item @click='modalClick1'>默认的水平flex div</g-flexbox-item>
					<div>普通div</div>
				</g-flexbox>
		</div>
	</div>
</template>
<script>
export default {
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
    }
  }
}
</script>

<style lang='scss'>
.home {
  position: relative;
  padding-left: 120px;
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
}
</style>
