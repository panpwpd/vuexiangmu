<template>
	<div id="chanpin">
		<div id="chan_t">
			<p>
				<span class="iconfont icon-back"  @click="tag()"></span>
				{{this.$store.state.cha.chanpinhao1}}
			</p>
			<p>预期年化收益</p>
			<p>{{this.$store.state.cha.shouyi1}}<mark>%</mark></p>
			<p>
				<span>{{this.$store.state.cha.qixian1}}</span>
				<span>起投金额<mark>100</mark>元</span>
			</p>
			<p>
				<span></span>
			</p>
			
			<p>
				<span>总额:<mark>100&nbsp;000.00</mark></span>
				<span>剩余:<mark>100&nbsp;000.00</mark></span>
			</p>
		</div>
		<div id="fabu">
			<p><span>发布时间</span><span>2018-07-20</span></p>
			<p><span>到期时间</span><span>2018-08-20</span></p>
			<p><span>计息方式</span><span>当日计息</span></p>
			<p><span>还款方式</span><span>到期还本计息</span></p>
			<p><span>投资记录</span><span>1人</span></p>
			<p><span>项目介绍</span><span class="iconfont icon-dayuhao"></span></p>
			<p><span>合同图片</span><span class="iconfont icon-dayuhao"></span></p>
			<p><span>还款来源</span><span class="iconfont icon-dayuhao"></span></p>
		</div>
		
		<div id="di">
			<p><img src="../img/jisuan.png"/></p>
			<p><input type="button" @click="tag1()" value="立即购买" /></p>
		</div>
		
		
		
		
	</div>
</template>

<script>
	export default {
		name:"chanpin",
		data:function(){
			return{
				qixian:"产品期限25天",
				shouyi:"7.8",
				chanpinming:"金桔1号37期"
			}
		},
		
		methods:{
			tag(){
				this.$router.push("/licai")
			},
			tag1(){
				this.$router.push("/goumai")
			}
		}
		
	}
</script>

<style scoped>
#chanpin{
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow: hidden;
}	
p{margin: 0;padding: 0;}
#chan_t{
	min-height: 250px;
	width: 100%;
	overflow: hidden;
}
#chan_t>p:nth-child(1){
	height: 80px;
	width: 100%;
	text-align: center;
	line-height: 50px;
	position: relative;
	font-size: 24px;
	margin: 0 ;
	padding: 0;
}
#chan_t>p:nth-child(1)>span{
	display: block;
	height:30px;
	width: 30px;
	position: absolute;
	font-size: 30px;
	top: 5px;
	left: 10px;
}
#chan_t>p:nth-child(2){
	height:20px;
	width: 100%;
	text-align: center;
	line-height: 20px;
	font-size: 18px;
}
#chan_t>p:nth-child(3){
	height:60px;
	width: 100%;
	text-align: center;
	line-height: 60px;
	font-size: 34px;
	color: red;
}
#chan_t>p:nth-child(3)>mark{
	font-size: 16px;
	background: #fff;
	color: red;
}
#chan_t>p:nth-child(4){
	height:40px;
	width: 80%;
	margin: 0 auto;
	text-align: center;
	line-height: 40px;
	font-size: 16px;
	color:#999;
	display: flex;
	justify-content: space-between;
}
#chan_t>p:nth-child(4)>span{
	display: block;
	height: 40px;
	line-height: 40px;
	width: 50%;
}
#chan_t>p:nth-child(4)>span>mark{
	background: #FFF;
	color: red;
}
#chan_t>p:nth-child(5){
	height:2px;
	width: 80%;
	border: 1px solid #999;
	margin: 0 auto;
	margin-top: 20px;
	background: #f1f1f1;
}
#chan_t>p:nth-child(6){
	height:40px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
#chan_t>p:nth-child(6)>span{
	width: 50%;
	height: 40px;
	line-height: 40px;
	
}

#chan_t>p:nth-child(6)>span>mark{
	font-size: 16px;
	background: #fff;
	color: red;
}

#fabu{
	min-height:300px;
	width: 100%;
}
#fabu>p{
	height: 40px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
#fabu>p>span{
	display: block;
	width: 50%;
	font-size: 16px;
	height: 40px;
	line-height: 40px;
	
}
#fabu>p>span:nth-child(1){
	text-align: left;
}
#fabu>p>span:nth-child(2){
	text-align: right;
}
#di{
	height: 70px;
	width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
}
#di>p:nth-child(1){
	height: 70px;
	width: 70px;
	
}
#di>p:nth-child(1)>img{
	height: 45px;
	width: 45px;
	margin-left:15px ;
	margin-top:10px
}
#di>p:nth-child(2){
	height: 70px;
	width:80%;
	
}
#di>p:nth-child(2)>input{
	height: 100%;
	width: 100%;
	border: 0;
	outline: none;
	text-align: center;
	line-height: 100%;
	background: red;
	color:#fff;
	font-size: 20px;
}




















	
</style>