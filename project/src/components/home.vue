<template>
	<div id="home">
		<mt-swipe :auto="4000" style="height: 200px;" >
		  <mt-swipe-item style="background: red;">
		  <img src="../img/lunbo.jpg" height="200px" width="100%"/>
		  </mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">
		  	<img src="../img/lunbo1.jpg" height="200px" width="100%"/>
		  </mt-swipe-item>
		  <mt-swipe-item style="background: pink; ">
		  	<img src="../img/lunbo2.jpg" height="200px" width="100%"/>
		  </mt-swipe-item>
		</mt-swipe>
		<div id="gonggao">
			<a href="">
				<p><img src="../img/tu.jpg"/></p>
				<p>金桔理财新手活动新升级</p>
				<p class="iconfont icon-dayuhao"></p>
			</a>
		</div>
		<div id="guanyu">
			<p>
				
				<a href="aaa:;"><img src="../img/10.png"/></a>
			</p>
			<p>
				<a href="aaa:;"><img src="../img/9.png"/></a>
			</p>
			<p>
				<a href="aaa:;" ><img src="../img/8.png"/></a>
			</p>
			
		</div>
		<div id="zhuanxiang" @click="tag()">
			<p>
				<span>金桔新手标第13期</span>
				<span>新手专享</span>
			</p>
			
			<p>
				<span>预期年化</span>
				<span>100元起购,期限15天</span>
			</p>
			<p>
		      	<span>16.88<mark>%</mark></span>
		      	<span></span>
				<span>0%</span>
			</p>
			
			<p>
				<input type="button"  value="立即购买" />
			</p>
			
		</div>
		<div id="baodao">
			<a href="">
				<span>媒体报道</span>
				<span class="iconfont icon-dayuhao"></span>
			</a>
			
		</div>
		<div id="hezuo">
			<div>
				<p>
					<img src="../img/sohu.jpg"/>
				</p>
				<p>
					<span>金桔理财携手浙江晓得律师事务所签署战略合作</span>
					<span>2018-06-22　　　10:48:22</span>
				</p>
			</div>
			<div>
				<p>
					<img src="../img/zhongcai.jpg"/>
				</p>
				<p>
					<span>金桔理财携手浙江晓得律师事务所签署战略合作</span>
					<span>2018-06-22　　　10:48:22</span>
				</p>
			</div>
			
		</div>
		<div id="di">
			
			<p>
				<span><img src="../img/1.jpg"/></span>
				<span>国企独资　安全放心</span>
			</p>
		</div>
		
		
		
	</div>
	
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui'
	export default {
		name:"Home",
		data:function(){
			return{
				str:"",
				aaa:{'display':'none'},
				tu:""
			}
		},
		mounted(){
			this.$emit("toparent",[this.str,this.aaa,this.tu])
		},
		methods:{
			tag(){
				this.$router.push("/chanpin")
				
			}
		}
	}
</script>

<style scoped>
	#home{
		height: 100vh;
	background: #f1f1f1;
	}
#gonggao{
	height: 20px;
	background:#fff;
	width:100%;
	border-bottom:1px solid #999;
}
#gonggao>a>p:nth-child(1){
	float:left;
	width: 15%;
	text-align: center;
}	
#gonggao>a>p:nth-child(1)>img{
	display: block;
	height: 20px;
	width: 20px;
	margin: 0 auto;
}
#gonggao>a>p:nth-child(2){
	float:left;
	width: 70%;
	line-height: 20px;
}		
#gonggao>a>p:nth-child(3){
	float:left;
	width: 15%;
	text-align: center;
	line-height: 20px;
	font-size: 14px;
}		
	
#guanyu{
	height: 80px;
	width: 100%;
	background: #fff;
	display: flex;
	justify-content: space-around;
}	
#guanyu>p{
	height:80px;
	width: 33.3%;
	text-align: center;
}	
	
#guanyu>p>a{
	height: 80px;
	width: 33.3%;
}	
#guanyu>p>a>img{
	height: 80px;
	width: 100%;
}

#zhuanxiang{
	height: 200px;
	margin: 5px 0px;
	background: #fff;
	
}
#zhuanxiang span{
	display: block;
}
#zhuanxiang p{
	display: flex;
	width: 100%;
	justify-content: space-between;
}

#zhuanxiang p:nth-child(1){
	height: 30px;
	line-height: 30px;
}
#zhuanxiang p:nth-child(1) span:nth-child(1){
	height: 30px;
	width: 45%;
	margin-left: 5%;
	line-height: 30px;
}	
#zhuanxiang p:nth-child(1) span:nth-child(2){
	height: 30px;
	width:60PX;
	margin-right: 5%;
	text-align: right;
	font-size: 12px;
	background: blue;
	line-height: 30px;
	text-align: center;
	color: #fff;
	border-radius: 10px;
}		
	
#zhuanxiang p:nth-child(2){
	height: 80px;
	
}
#zhuanxiang p:nth-child(2) span:nth-child(1){
	height: 80px;
	width: 40%;
	margin-left: 5%;
	line-height: 80px;
}		
#zhuanxiang p:nth-child(2) span:nth-child(2){
	height: 80px;
	width: 40%;
	margin-right: 5%;
	line-height: 80px;
}	
	
#zhuanxiang  p:nth-child(3){
	height: 40px;
	
}
#zhuanxiang p:nth-child(3) span:nth-child(1){
	height: 30px;
	width: 40%;
	margin-left: 5%;
	line-height: 30px;
	color: red;
	font-size: 24px;
}		
#zhuanxiang p:nth-child(3) span:nth-child(1) mark{
	font-size: 16px;
	background: #fff;
	color: red;
}

#zhuanxiang p:nth-child(3) span:nth-child(2){
	height: 2px;
	border: 1px solid #999;
	width: 35%;
	border-radius: 1px;
	margin-top: 17px;
	background: #999;
	
}

#zhuanxiang p:nth-child(3) span:nth-child(3){
	height: 30px;
	width: 10%;
	margin-right: 5%;
	line-height: 40px;
}	
#zhuanxiang p:nth-child(4) input{
	height: 40px;
	width: 70%;
	border-radius: 20px;
	border: 0;
	margin: 0 auto;
	color: #FFF;
	background: red;
	text-align: center;
	
}		
#baodao a{
	height: 40px;
	width: 100%;
	background: #fff;
	display: flex;
	justify-content: space-between;
}

#baodao a span:nth-child(1){
	display: block;
	height: 40px;
	width: 30%;
	margin-left: 5%;
	line-height: 40px;
}	
#baodao a span:nth-child(2){
	display: block;
	height: 40px;
	width: 10%;
	margin-left: 5%;
	line-height: 40px;
	font-size: 16px;
}		
#hezuo{
	height: 150px;
	width: 100%;
	background: #fff;
}	
#hezuo div{
	height: 70px;
	width: 100%;
	margin-top: 1px;
	display: flex;
	justify-content: space-between;
}	
#hezuo div p:nth-child(1){
	height: 70px;
	width: 25%;
	margin-left: 5%;
}
#hezuo div p:nth-child(1) img{
	height: 70px;
	width:100%;
}
	
#hezuo div p:nth-child(2){
	height: 70px;
	width: 60%;
	margin-right: 5%;
}		
#hezuo div p:nth-child(2) span:nth-child(1){
	display: block;
	height: 40px;
	width: 100%;
	text-align: left;
	font-size: 14px;
}	
#hezuo div p:nth-child(2) span:nth-child(2){
	display: block;
	height: 30px;
	width: 100%;
	text-align: left;
	font-size: 14px;
	line-height:30px;
	
}		
#di{
	height: 40px;
	width: 100%;
	background: #cecece;
	overflow: hidden;
}	
#di p{
	height: 30px;
	width: 40%;
	margin: 0 auto;
	margin-top:5px;
}	
#di p span:nth-child(1){
	display: block;
	float: left;
	height: 30px;
	width: 20%;
}	
#di p span:nth-child(1) img{
	height: 30px;
	width:100%;
}		
#di p span:nth-child(2){
	display: block;
	height: 30px;
	width: 80%;
	float:right;
	font-size: 12px;
	line-height: 30px;
	color: #fff;
	
}		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>