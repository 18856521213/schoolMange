<template>
	<view class="content">
		<view class="swiper">
			<swiper class="swiper" 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="5000" 
			:duration="500"
			:circular="true">
				<swiper-item v-for="item in swiperList" :key="item.imageId">
					<image :src="item.imageUrl" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { getSwiperList } from "../../request/home/index.js";
	export default {
		data() {
			return {
				swiperList:[],//轮播图
			}
		},
		onLoad() {
			this.getSwiperList();
		},
		methods: {
			//获取轮播图列表
			getSwiperList(){
				let data = {}
				getSwiperList(data).then(res =>{
					console.log(res)
					if(res.data.success){
						this.swiperList = res.data.data;
						console.log(this.swiperList)
					}
				})
			},
		}
	}
</script>

<style lang="less">
.swiper{
	height: 450upx;
	image{
		width: 100%;
	}
}
</style>
