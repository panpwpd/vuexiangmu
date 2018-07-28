<template>
	<div id="goumai">
		<div id="gou_tou">
			<p>购买</p>
			<span class="iconfont icon-back"  @click="tag()"></span>
		</div>
		
		<div id="chanpin">
			<p>{{this.$store.state.cha.chanpinhao1}}</p>
			<fieldset>
				<legend></legend>
			</fieldset>
			<div>
				<p>{{this.$store.state.cha.shouyi1}}<mark>%</mark></p>
				<p>
					<span>投资期限<mark>{{this.$store.state.cha.qixian1}}</mark></span>
					<span>剩余可投<mark>20,000</mark>元</span>
				</p>
				
			</div>
			
		</div>
		
		<div id="jine">
			<p>
				<span>购买金额</span>
				<input type="text"  v-model="goumaijin"         placeholder="100元起购,限购100,0000元"             />
			</p>
			<p>
				<span>我的红包</span>
				<span>无可用红包</span>	
				<span class="iconfont icon-dayuhao"></span>
			</p>
		</div>
		
		<!--<div id="yugu">
			预估利息收益<span>0.00</span>元
		</div>-->
		
		<div id="keyong">
			<span>可用余额</span>
			<span>0.00元</span>
		</div>
		
		<div id="queding">
			<input type="button"  value="确认支付"  @click="goumai()" />
		</div>
	</div>
</template>

<script>
	export default{
		name:"goumai",
		data:function(){
			return{
				goumaijin:""
			}
		},
		methods:{
			tag(){
				this.$router.push("/chanpin")
			},
			
			goumai(){
				
				if(this.goumaijin!=""){
					alert("购买成功,查看购买记录")
				
				this.$store.commit("list",[{qi:this.$store.state.cha.chanpinhao1,qi1:this.$store.state.cha.shouyi1,qi2:this.goumaijin},this.$store.state.str])
				this.$router.push("/wode")
				
				 this.$store.commit("list1",this.goumaijin)
				 
				}else{
					alert("金额不能为空")
				}
				
			}
			
			
		}
	}
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
#goumai{
	height: 100vh;
	background:#f1f1f1;
	overflow: hidden;
}
#gou_tou{
	height: 50px;
	width: 100%;
	background: #fff;
	position: relative;
	margin: 0;
	padding: 0;
	
}
#gou_tou>span{
	display: block;
	height: 30px;
	width: 30px;
	position: absolute;
	text-align: center;
	top: 10px;
	left: 10px;
	font-size: 30px;
}
#gou_tou>p{
	height: 50px;
	width: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	line-height: 50px;
	font-size: 20px;
}
#chanpin{
	height: 150px;
	width: 90%;
	margin: 0 auto;
	background: #fff;
	margin-top: 10px;
}
#chanpin>p{
	height: 40px;
	line-height: 40px;
	width: 90%;
	margin-left: 5%;
}
#chanpin>fieldset{
	height: 5px;
	width: 90%;
	margin: 0 auto;
	border: 0;
	border-top: 1px dashed #999;
}
#chanpin>div{
	height: 100px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	
}
#chanpin>div>p:nth-child(1){
	width: 40%;
	height: 100px;
	line-height: 100px;
	color: red;
	font-size: 24px;
}
#chanpin>div>p:nth-child(1)>mark{
	color: red;
	font-size: 14px;
	background: #fff;
}
#chanpin>div>p:nth-child(2){
	width: 60%;
	height: 100px;
	overflow: hidden;
}
#chanpin>div>p:nth-child(2)>span>mark{
	background: #fff;
	color: red;
}

#chanpin>div>p:nth-child(2)>span:nth-child(1){
	display: block;
	height: 30px;
	width: 100%;
	font-size: 16px;
	margin-top: 20px;
}
#chanpin>div>p:nth-child(2)>span:nth-child(2){
	display: block;
	height: 30px;
	width: 100%;
	font-size: 16px;
}
#jine{
	height: 120px;
	width: 90%;
	margin: 0 auto;
	background: #fff;
	margin-top: 10px;
}
#jine>p{
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
#jine>p:nth-child(1){
	border-bottom: 1px solid #999;
}
#jine>p:nth-child(1)>span:nth-child(1){
	display: block;
	height: 50px;
	line-height: 50px;
	width: 30%;
	margin-left: 5%;
}
#jine>p:nth-child(1)>input{
	display: block;
	height: 30px;
	line-height: 30px;
	width: 60%;
	border: 0;
	margin-top: 15px;
}
#jine>p:nth-child(2)>span:nth-child(1){
	display: block;
	height: 60px;
	line-height: 60px;
	width: 30%;
	margin-left: 5%;
}

#jine>p:nth-child(2)>span:nth-child(3){
	display: block;
	height: 60px;
	line-height: 60px;
	width: 10%;
	text-align: center;
}
#jine>p:nth-child(2)>span:nth-child(2){
	display: block;
	height: 60px;
	line-height: 60px;
	width: 50%;
	color: #999;
	text-align: right;
}
#yugu{
	height: 40px;
	line-height:40px;
	text-align: center;
	color: #999;
}
#yugu>span{
	color: red;
	display: inline-block;
	height: 40px;
	line-height: 40px;
	width: 60px;
	text-align: center;
}
#keyong{
	height: 40px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	background: #fff;
}
#keyong>span:nth-child(1){
	display: block;
	width: 45%;
	height: 40px;
	line-height: 40px;
	text-align: left;
	margin-left: 5%;
}
#keyong>span:nth-child(2){
	display: block;
	width: 45%;
	height: 40px;
	line-height: 40px;
	text-align: right;
	margin-right: 5%;
	color: red;
}

#queding{
	height: 50px;
	width: 100%;
	margin-top: 60px;
}
#queding>input{
	display: block;
	height: 40px;
	width: 85%;
	background: red;
	color: #fff;
	line-height: 40px;
	text-align: center;
	border: 0;
	border-radius: 20px;
	margin: 0 auto;
}


































</style>