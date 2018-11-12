<template>
	<div class="home">
		<g-button>普通</g-button>
		<g-button type='primary'>primary</g-button>
		<g-button type='success'>success</g-button>
		<g-button type='warning'>warning</g-button>
		<g-button type='error'>error</g-button>
		<g-button type='text'>text</g-button>
		
		<div style='marginTop: 20px'>
			<g-button round type='primary'>椭圆按钮</g-button>
			<g-button disabled type='primary'>禁用按钮</g-button>
			<g-button noRadius type='primary'>尖角按钮</g-button>
		</div>
		<div class="box">
			<g-button long type='primary' style='width: 50%'>长按钮</g-button>
		</div>
		<div class="box">
		</div>
	</div>
</template>
<style lang='scss'>
	.box {
		margin-top: 20px;
	}
</style>
