<template>
	<div id="wode">
		<div id="wo_tou">
			<p>
				<span class="iconfont icon-service"></span>
				<span>{{this.$store.state.str}}</span>
			</p>
			<div>
				<p>
					昨天收益(元)
				</p>
				<p>{{zuos}}</p>	
				
			</div>
			<div>
				<p>
					<span>累计收益(元)</span>
					<span>{{leis}}</span>
				</p>
				<p>
					<span>我的资产(元)</span>
					<span>{{this.$store.state.money}}.00</span>
				</p>
			</div>
		
		</div>
		<div id="tixian">
			<p>
				<span>账户余额</span>
				<span>{{yue}}</span>
			</p>
			<p>
				<button @click="tixian()"   >提现</button>
				<button @click="chongzhi()" >充值</button>
			</p>
			
		</div>
		
		<div id="xitong">
			<a href="aaa:;">
				<span><img src="../img/1.png"/></span>
				<p @click="jl()">
					<span>投资记录</span>
					<i>再投0笔</i>
				</p>
			</a>
			<a href="aaa:;">
				<span><img src="../img/3.png"/></span>
				<p>
					<span>我的红包</span>
					<i>9张可用</i>
				</p>
				
			</a>
			
		</div>
		<div id="ka">
			<p>
				<span><img src="../img/2.png"/></span>
				<span>我的银行卡</span>
			</p>
			<p @click="tag()">
				<span><img src="../img/4.png"  /></span>
				<span>系统设置</span>
				
			</p>
		</div>	
		<div id="fuwu">
			<p>服务电话 400-681-8969</p>
			<p>服务时间09:00-20:00</p>
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		name:"Wode",
		data:function(){
			return{
				str:"",
				aaa:{'display':'none'},
				zuos:"0.00",
				leis:"0.00",
				yue:"0.00"
			}
		},
		methods:{
			tag(){
				this.$router.push("/tuichu")
			},
			tixian(){
				this.$router.push("/tixian")
			},
			chongzhi(){
				this.$router.push("/chongzhi")
			},
			jl(){
				this.$router.push("/jilu")
			}
		
		
		},
		mounted(){
			this.$emit("toparent",[this.str,this.aaa])
		}
		
	}
	
	
</script>

<style scoped>
	#wode{
		height: 100vh;
	background: #f1f1f1;
	}
	button{outline:none;}
#wo_tou{
	min-height: 230px;
	width: 100%;
	background: red;
}
#wo_tou>p{
	height: 50px;
	width: 90%;
	margin-left: 5%;
	display: flex;
	
}
#wo_tou>p>span:nth-child(1){
	height:50px;
	width:15%;
	font-size: 24px;
	line-height: 50px;
	color: #fff;
	background: #cecece;
	border-radius: 50%;
}

#wo_tou>p>span:nth-child(2){
	height:50px;
	width: 60%;
	font-size: 20px;
	line-height: 50px;
	text-align: left;
	margin-left: 2%;
	color: #fff;
}

#wo_tou>div:nth-of-type(1){
	height: 80px;
	width: 100%;
}

#wo_tou>div:nth-of-type(1)>p:nth-child(1){
	height:40px;
	width: 100%;
	text-align: center;
	line-height: 40px;
	font-size: 20px;
	color: #fff;
	
}

#wo_tou>div:nth-of-type(1)>p:nth-child(2){
	height:40px;
	width: 100%;
	text-align: center;
	line-height: 40px;
	font-size: 24px;
	color: #fff;
}
#wo_tou>div:nth-of-type(2){
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
#wo_tou>div:nth-of-type(2)>p{
	height: 70px;
	width: 50%;
	text-align: center;
}
#wo_tou>div:nth-of-type(2)>p>span{
	height: 34px;
	line-height: 34px;
	width: 100%;
	text-align: center;
	color: #fff;
}
#tixian{
	height:60px;
	width: 100%;
	background: #fff;
	display: flex;
}
#tixian>p:nth-child(1){
	width: 40%;
	height: 60px;
	margin-left: 10%;
}
#tixian>p:nth-child(1)>span{
	display: block;
	height: 30px;
	width: 100%;
	line-height: 30px;
	text-align: left;
}
#tixian>p:nth-child(1)>span:nth-child(2){
	color: red;
}
#tixian>p:nth-child(1)>span:nth-child(1){
	color: #cecece;
}


#tixian>p:nth-child(2){
	width: 40%;
	height: 60px;
	margin-right: 10%;
	text-align: right;
	line-height: 60px;
}
#tixian>p:nth-child(2)>button{
	height: 30px;
	width: 60px;
	border-radius: 20px;
	border: 0;
	border:1px solid red;
	color: red;
	background: #fff;
}
#tixian>p:nth-child(2)>button:nth-child(2){
	color: #fff;
	background: red;
}




#xitong{
	height: 70px;
	width: 90%;
	margin: 0 auto;
	margin-top: 10px;
	background: #fff;
	display: flex;
	justify-content: space-between;
}
#xitong>a:nth-child(1){
	height:70px;
	width:40%;
	margin-left: 5%;
	display: flex;
	/*justify-content: space-between;*/
	overflow: hidden;
}
#xitong>a:nth-child(1)>span{
	display: block;
	width:30px;
	height:30px;
	margin-top: 10px;
}
#xitong>a:nth-child(1)>span>img{
	display: block;
	width:30px;
	height:30px;
}
#xitong>a:nth-child(1)>p{
	height: 40px;
	width:100px;
	margin-top: 10px;
}
#xitong>a:nth-child(1)>p>span{
	height:20px;
	width: 100px;
	line-height: 20px;
	
}
#xitong>a:nth-child(1)>p>i{
	display: block;
	font-style: normal;
	height:20px;
	width: 100px;
	line-height: 20px;
	font-size: 14px;
	color: #999;
	text-align: center;
	
}

#xitong>a:nth-child(2){
	height:50px;
	width:40%;
	display: flex;
	padding-left: 10%;
	overflow: hidden;
	border-left: 1px solid #999;
	margin-top: 10px;
}

#xitong>a:nth-child(2)>span{
	display: block;
	width:30px;
	height:40px;
	margin-top: 10px;
	
}
#xitong>a:nth-child(2)>span>img{
	display: block;
	width:30px;
	height:30px;
}
#xitong>a:nth-child(2)>p{
	height: 60px;
	width:100px;
}
#xitong>a:nth-child(2)>p>span{
	height:20px;
	width: 100px;
	line-height: 20px;
	
}
#xitong>a:nth-child(2)>p>i{
	display: block;
	font-style: normal;
	height:20px;
	width: 100px;
	line-height: 20px;
	font-size: 14px;
	color: #999;
	text-align: center;
}

#ka{
	height: 70px;
	width: 90%;
	margin: 0 auto;
	background: #fff;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
}
#ka p{
	height: 50px;
	width: 40%;
}
#ka p:nth-child(1){
	margin-top: 10px;
	margin-left: 5%;
	padding-right: 5%;
	display: flex;
	border-right:1px solid #999;
	
}
#ka p:nth-child(1) span:nth-child(1){
	margin-top: 10px;
	display: block;
	height: 30px;
	width: 30px;
}
#ka p:nth-child(1) span:nth-child(1) img{
	display: block;
	height: 30px;
	width: 30px;
}

#ka p:nth-child(1) span:nth-child(2){
	display: block;
	height: 60px;
	width: 100px;
	line-height: 60px;
}

#ka p:nth-child(2){
	margin-top: 10px;
	display: flex;
	
	
}
#ka p:nth-child(2) span:nth-child(1){
	margin-top: 10px;
	display: block;
	height: 30px;
	width: 30px;
}
#ka p:nth-child(2) span:nth-child(1) img{
	display: block;
	height: 30px;
	width: 30px;
}

#ka p:nth-child(2) span:nth-child(2){
	display: block;
	height: 50px;
	width: 100px;
	line-height: 50px;
}
#fuwu{
	height: 50px;
	width: 100%;
	margin-top: 30px;
}

#fuwu p:nth-child(1){
	height: 30px;
	width: 100%;
	text-align: center;
	color: blue;
	line-height: 30px;
	font-size: 20px;
}
#fuwu p:nth-child(2){
	height: 20px;
	width: 100%;
	text-align: center;
	line-height: 20px;
	font-size: 14px;
	color: #666;
}




















	
</style>