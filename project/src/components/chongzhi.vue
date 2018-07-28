<template>
	<div id="chongzhi">
		<div id="chong_tou">
			<p>充值</p>
			<span class="iconfont icon-back"  @click="tag()"></span>
		</div>
		<div id="jine">
			<span>充值金额:</span>
			<input type="text" placeholder="请输入充值金额" v-model="chongqian" class="chong"  />
			
		</div>
		
		<div id="mima">
			<span>充值密码:</span>
			<input type="password" placeholder="请输入充值密码" v-model="pass"  />
		</div>
		
		<div id="tijiao">
			<input type="button" @click="tj()"  value="提交" />
		</div>
		
		
		
		
		
	</div>
</template>

<script>
	
	import axios from "axios"
	import {mapGetters,mapActions} from "vuex"
	import $ from "jquery"
	
	export default{
		name:"chongzhi",
		data:function(){
			return{
				chongqian:"",
				pass:""
			}
		},
		methods:{
			tag(){
				this.$router.push("/wode")
			},
			tj(){
				var reg =/^\d{1,}$/
				if(reg.test(this.chongqian) && this.pass==this.$store.state.pass){
					this.$store.commit("chong1",[this.chongqian,this.$store.state.str])
					alert("充值成功")
				this.$router.push("/wode")
					
				}else{
					alert("充值失败")
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
		position: relative;
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


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>