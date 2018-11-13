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
					<g-button disabled @click='tap'>禁用按钮</g-button>
					<g-button noRadius type='primary'>尖角按钮</g-button>
					<g-button plain type='success'>朴素按钮</g-button>
				</div>
				<div class="box">
					<g-button long type='warning' style='width: 50%'>长按钮</g-button>
				</div>
				<div class="box" style='width:60%'>
					<g-button-group>
						<g-button type="warning">警告</g-button>
						<g-button type="primary">主要</g-button>
						<g-button type="success">成功</g-button>
					</g-button-group>
				</div>
		</div>
	</div>
</template>
<script>
export default {
  methods: {
    tap () {
      console.log(123)
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
