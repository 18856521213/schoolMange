<template>
	<view class="content">
		<image class="logo" src="http://127.0.0.1:3001/image/upload_11f7a19e567ad51450735cf4c2e39534.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '45646'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 100%;
/* 		height: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
 */	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
