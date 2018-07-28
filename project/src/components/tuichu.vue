<template>
	<div id="tuichu">
		<div id="t_tou">
			<p>设置</p>
			<span class="iconfont icon-back" @click="tag()"></span>
		</div>
		<div id="xiu">
			<p>
				<span>修改登录密码</span>
				<span class="iconfont icon-dayuhao"></span>
			</p>
			<p>
				<span>修改支付密码</span>
				<span class="iconfont icon-dayuhao"></span>
			</p>
			<p>
				<span>设置手势密码</span>
				<span class="iconfont icon-dayuhao"></span>
			</p>
			
		</div>
		<div id="qing">
			<span>清除缓存</span>
			<span></span>
			<span class="iconfont icon-dayuhao"></span>
		</div>
		
		<div id="tc">
			<input type="button" value="安全退出" @click="tag1()"/>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tuichu",
		data:function(){
			return{
				
			}
		},
		methods:{
			tag(){
				this.$router.push("/wode")
			},
			tag1(){
				this.$store.state.str="";
				this.$router.push("/home")
				
				
			}
		}
		
	}
	
	
	
	
</script>

<style scoped>
	#tuichu{
		height: 100vh;
		background: #f1f1f1;
		overflow: hidden;
	}
	input{outline: none;}
	#t_tou{
	height: 50px;
	width: 100%;
	background: #fff;
	position: relative;
	margin: 0;
	padding: 0;
}
#t_tou span{
	display: block;
	height: 30px;
	width: 30px;
	position: absolute;
	text-align: center;
	top: 15px;
	left: 10px;
	font-size: 30px;
}
#t_tou>p{
	height: 50px;
	width: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	line-height: 50px;
	font-size: 20px;
}
#xiu{
	height: 150px;
	width: 100%;
	margin: 0 auto;
	background: #fff;
	margin-top: 20px;
}	
#xiu>p{
	height: 50px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	border-bottom:1px solid #999;
}	
#xiu>p>span{
	display: block;
	height: 50px;
	line-height: 50px;
	width: 45%;
	
}
#xiu>p>span:nth-child(1){
	text-align: left;
	margin-left: 5%;
}	
#xiu>p>span:nth-child(2){
	text-align:right;
	margin-right: 5%;
	
}	

#qing{
	height: 40px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;background: #fff;
}	
#qing>span{
	display: block;
	height: 40px;
}
#qing>span:nth-child(1){
	margin-left: 5%;
	width: 60%;
	height: 40px;
	line-height: 40px;
	text-align: left;
}
#qing>span:nth-child(2){
	width: 15%;
	height: 40px;
	line-height: 40px;
	text-align: center;
}	
#qing>span:nth-child(3){
	width: 15%;
	height: 40px;
	line-height: 40px;
	text-align: right;
	margin-right: 5%;
}		
#tc{
	height: 60px;
	width: 100%;
}

#tc>input{
	display: block;
	height: 50px;
	width: 80%;
	margin: 0 auto;
	background: red;
	color: #FFF;
	text-align: center;
	line-height: 50px;
	border: 0;
	border-radius: 30px;
	margin-top: 50px;
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>