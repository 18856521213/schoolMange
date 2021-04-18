<template>
	<view class="content">
		<view class="swiper">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="item in swiperList" :key="item.imageId">
					<image :src="item.imageUrl" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { getStudentList } from "../../request/home/index.js";
	export default {
		data() {
			return {
				swiperList:[],//轮播图
			}
		},
		onLoad() {
			this.getStudentList();
		},
		methods: {
			getStudentList(){
				let data = {}
				getStudentList(data).then(res =>{
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

<style>

</style>
