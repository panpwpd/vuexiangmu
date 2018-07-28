<template>
	<div id="chongzhi">
		<div id="chong_tou">
			<p>提现</p>
			<span class="iconfont icon-back"  @click="tag()"></span>
		</div>
		<div id="jine">
			<span>提现金额:</span>
			<input type="text" placeholder="请输入提现金额" v-model="tixian" />
			
		</div>
		<div id="mima">
			<span>提现密码:</span>
			<input type="password" placeholder="请输入提现密码" v-model="pass" />
		</div>
		<div id="tijiao">
			<input type="button" @click="tj()"    value="提交" />
		</div>
		
		
		
	</div>
</template>

<script>
	import axios from "axios"
	import {mapGetters,mapActions} from "vuex"
	import $ from "jquery"
	export default{
		name:"tixian",
		data:function(){
			return{
				tixian:"",
				pass:""
			}
		},
		methods:{
			tag(){
				this.$router.push("/wode")
			},
			tj(){
				var reg =/^\d{1,}$/
				if(reg.test(this.tixian) && this.pass==this.$store.state.pass){
					this.$store.commit("tixian1",[this.tixian,this.$store.state.str])
					alert("提现成功")
				this.$router.push("/wode")
					
				}else{
					alert("提现失败")
				}
			
			
			}
		}
		
	}
	
</script>

<style scoped>
	#chongzhi{
		height:100vh;
		background: #f1f1f1;
		overflow: hidden;
	}
	#chong_tou{
	height: 50px;
	width: 100%;
	background: #fff;
	position: relative;
	margin: 0;
	padding: 0;
	
}
#chong_tou span{
	display: block;
	height: 30px;
	width: 30px;
	position: absolute;
	text-align: center;
	top: 10px;
	left: 10px;
	font-size: 30px;
}
#chong_tou p{
	height: 50px;
	width: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	line-height: 50px;
	font-size: 20px;
}
	
#jine{
	height: 40px;
	width: 100%;
	background: #fff;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
}	
#jine>span{
	display: block;
	width: 20%;
	height: 40px;
	line-height: 40px;
	margin-left: 5%;
}

#jine>input{
	display: block;
	width: 70%;
	height: 30px;
	line-height:30px;
	margin-right: 5%;
	outline: none;
	margin-top: 5px;
	border: 0;
}
#mima{
	height: 40px;
	width: 100%;
	background: #fff;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
}	
#mima>span{
	display: block;
	width: 20%;
	height: 40px;
	line-height: 40px;
	margin-left: 5%;
}

#mima>input{
	display: block;
	width: 70%;
	height: 30px;
	line-height:30px;
	margin-right: 5%;
	outline: none;
	margin-top: 5px;
	border: 0;
}


#tijiao{
	height: 50px;
	width: 100%;
	margin-top: 30px;
}		
#tijiao>input{
	display: block;
	width: 80%;
	height: 40px;
	line-height:40px;
	margin:0 auto;
	outline: none;
	background: red;
	color: #fff;
	text-align: center;
	line-height: 40px;
	border: 0;
	border-radius: 20px;
}	
	
#kuang{
	height: 50px;
	width: 250px;
	line-height:50px;
	text-align: center;
	margin: 0 auto;
	border: 1px solid #fff;
	border-radius: 30px;
	background: #fff;
	position: absolute;
	top: 300px;
	left: 50px;
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>