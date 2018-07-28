<template>
	<div id="zhuce">
		<div id="zhu_tou">
			<p>注册</p>
			<span class="iconfont icon-back"  @click="tag()"></span>
		</div>
		<div id="cha">
			<p>
				已向<span>{{this.$store.state.str}}</span>发送短信验证码,请注意查收
			</p>
			
		</div>
		<div id="yzm">
			<span>验证码:</span>
			<input type="text" placeholder="请输入验证码" v-model="yz"  />
			<span @click="tag2()" class="chongfa">点击重发</span>
		</div>
		<div id="d_mima">
			<span >
				登录密码:
			</span>
			<input type="password" name="" id="" placeholder="请设置登录密码" v-model="mima" />
			
		</div>
		<div id="dl">
			<input type="button" value="确认" @click="tag1()" />
		</div>
		<div id="yuedu">
			<input type="checkbox" name="" id="" value="" />
			<span>我同意并接受<mark><<金桔理财注册协议>></mark></span>
		</div>
		
	</div>
	
	
</template>

<script>
	
	import axios from "axios"
	import {mapGetters,mapActions} from "vuex"
	import $ from "jquery"
	
	
	
	
	export default{
		name:"zhuce",
		data:function(){
			return{
				mima:"",
				yz:""
			}
			
		},
		
		
		methods:{
			tag(){
				this.$router.push("/shoujihao")
			},
			tag1(){
				var _this=this
				$.ajax({
					type:"post",
					url:"http://localhost:3000/register",
					data:{phoneNum:this.$store.state.str, yzm:_this.yz,pass:_this.mima ,id:3},
					success:function(data){
						if(data==1){
							alert("注册成功")
							_this.$router.push("/denglu")
						}else if(data==2){
							alert("验证码不正确")
						}else{
							alert("用户名已存在,请直接登录")
							_this.$router.push("/denglu")
						}
						
					}
				});
				
				
				
			},
			tag2(){
				$.ajax({
					type:"post",
					url:"http://localhost:3000/register",
					data:{phoneNum:(this.$store.state.str),id:1},
					success:function(data){
						console.log(data)
					}
				});
				
				
				
			}
			
			
		}
	}
	
</script>

<style scoped>
#zhuce{
	height: 100vh;
	background:#f1f1f1;
}
#zhu_tou{
	height: 50px;
	width: 100%;
	background: #fff;
	position: relative;
	margin: 0;
	padding: 0;
	
}
#zhu_tou>span{
	display: block;
	height: 30px;
	width: 30px;
	position: absolute;
	text-align: center;
	top: 15px;
	left: 10px;
	font-size: 30px;
}
#zhu_tou>p{
	height: 50px;
	width: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	line-height: 50px;
	font-size: 20px;
}
#cha{
	height: 70px;
	width:100%;
	overflow: hidden;
}
#cha>p{
	height:50px;
	width: 70%;
	margin: 0 auto;
	text-align: center;
	font-size: 18px;
	margin-top: 10px;
}

#yzm{
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-top:1px solid #999;
	border-bottom:1px solid #999;
	background: #fff;
	margin-bottom: 40px;
}
#yzm>span{
	height: 60px;
	line-height: 60px;
	width: 25%;
	
	border-radius: 10px;
	text-align: center;
}
#yzm>.chongfa{
	height: 30px;
	line-height: 30px;
	border: 1px solid blue;
	margin-top: 15px;
	background: blue;
	color:green;
}







#yzm>input{
	height: 40px;
	line-height: 40px;
	margin-top: 10px;
	border:0;
	flex: 1;
}
#d_mima{
	height: 60px;
	width: 100%;
	background: #fff;
	display: flex;
	margin-bottom: 10px;
}
#d_mima>span{
	display: block;
	height: 60px;
	line-height: 60px;
	width:25%;
	text-align: center;
}
#d_mima>input{
	height: 40px;
	width: 70%;
	line-height: 40px;
	margin-top: 10px;
	border:0;
	
}
#dl{
	height: 60px;
	width: 100%;
	margin-bottom: 10px;
}
#dl>input{
	display: block;
	height: 50px;
	width: 80%;
	margin: 0 auto;
	line-height: 50px;
	text-align: center;
	border-radius: 30px;
	border:0;
	color: #999;
	font-size: 18px;
}
#yuedu{
	height:20px;
	width: 100%;
	text-align: center;
}

#yuedu mark{
	background: #F1F1F1;
	color:blue;
} 










































</style>