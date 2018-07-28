<template>
	<div id="faxian">
		<p id="xuanlan">
			<a href="aaa:;" @click="tag" ><span :style="b">活动</span></a>
			<a href="aaa:;" @click="tag1"><span :style="b2">公告</span></a>
		</p>
		
			<div id="huodong" v-if="aa1">
				<div>
					<p>新手专享福利</p>
					<p>长期有效</p>
					<p><img src="../img/faxian.png"/></p>
				</div>
				<div>
					<p>好友助利向前冲</p>
					<p>长期有效</p>
					<p><img src="../img/faxian1.png"/></p>
				</div>
			</div>
		
		<div id="gonggao" v-if="aa2">
			<p>
				<span>金桔理财新手活动新升级!</span>
				<span>2018-06-12</span>
			</p>
			</div>
		</div>
</template>

<script>
	import axios from "axios"
	export default{
		name:"Faxian",
		data:function(){
			return{
				str:"发现",
				aaa:{'display':'block'},
				aa1:true,
				aa2:false,
				b1:{"color":"red","border-bottom":"5px solid red"},
				b:{"color":"red","border-bottom":"5px solid red"},
				b2:{},
				b3:{},
			}
		},
		mounted(){
			this.$emit("toparent",[this.str,this.aaa])
		},
		methods:{
			tag(){
				this.aa1=true;
				this.aa2=false;
				this.b=this.b1;
				this.b2=this.b3;
			},
			tag1(){
				this.aa2=true;
				this.aa1=false;
				this.b2=this.b1;
				this.b=this.b3;
			}
			
		}
		
		
	}
</script>

<style scoped>
	#faxian{
		height: 100vh;
	   background: #F1F1F1;
		overflow: hidden;
	}
	#xuanlan{
		height: 40px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 1px ;
		background: #fff;
		align-items: center;
		
	}
	#xuanlan a {
		display: block;
		height: 20px;
		width: 49%;
		text-align: center;
		line-height: 20px;
	}
	#xuanlan a span{
		display: block;
		padding: 0 10px;
		margin: 0 auto;
		height: 20px;
		line-height:20px;
		
	}
	#xuanlan a:nth-child(1){
		border-right:1px solid #999 ;
	}
	
	#huodong{
		min-height:400px;
		width: 95%;
		margin: 0 auto;
		
	}
	#huodong div{
		min-height:210px;
		width: 100%;
		margin-bottom: 10px;
		background: #fff;
		border-radius: 0 0 10px 10px;
	}
	#huodong div p:nth-child(1){
		height: 30px;
		line-height: 30px;
		margin-left: 5%;
		font-size: 18px;
	}
	
	#huodong div p:nth-child(2){
		height: 20px;
		line-height: 20px;
		margin-left: 5%;
		font-size: 14px;
		color: #999;
	}
	#huodong div p:nth-child(3){
		height: 205px;
		width:90%;
		margin: 0 auto;
		margin-bottom: 5px;
	}
	#huodong div p:nth-child(3) img{
		height: 205px;
		width:100%;
	}
	
	#gonggao{
		height: 60px;
		width: 90%;
		margin: 0 auto;
		background: #fff;
		border-radius: 5px;
		margin-top: 5%;
	}
	#gonggao>p>span:nth-child(1){
		display: block;
		height: 40px;
		width: 100%;
		line-height: 40px;
		text-align: left;
		margin-left: 3%;
	}
	#gonggao>p>span:nth-child(2){
		display: block;
		height: 20px;
		width: 100%;
		line-height: 20px;
		font-size: 14px;
		text-align: left;
		margin-left: 3%;
		
	}
	
	
	
</style>