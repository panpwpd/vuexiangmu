<template>
	<div id="denglu">
		<div id="d_tou">
			<p>登录</p>
			<span class="iconfont icon-back" @click="tag1()"></span>
		</div>
		<div id="huanying">
			<p>
				hi,<span>{{this.$store.state.str}}</span>欢迎回来
				
			</p>
		</div>
		<div id="mima">
			<span>登录密码:</span>
			<input type="password"  placeholder="请输入密码" v-model="str"  class="ipt"/>
			
		</div>		
		
		<div id="wang">
			<input type="button" name="" id="" value="忘记密码" />
		</div>
		<div id="lu">
			<input type="button" @click="tag()" id="" value="确认" />
		</div>
	</div>
	
	
</template>

<script>
	import axios from "axios"
	import {mapGetters,mapActions} from "vuex"
	import $ from "jquery"
	export default{
		name:"denglu",
		data:function(){
			return{
				str:""
			}
		},
		
		methods:{
			tag(){
//				this.$router.push("/home")
				var _this=this
				$.ajax({
					type:"post",
					url:"http://localhost:3000/login",
					data:{pass:$(".ipt").val()},
					success:function(data){
						console.log(data)
						if(data!=0){
							alert("登录成功")
							if(data[0].arr.length>0){
							_this.$store.state.gou=JSON.parse(data[0].arr)}else{
		_this.$store.state.gou=data[0].arr						
							}
							_this.$store.state.pass=data[0].pass
                             _this.$store.state.str= data[0].phoneNum
                             _this.$store.state.money= parseInt(data[0].money)
						  

							_this.$router.push("/wode")
						
						
						}else{
							alert("密码错误,请重新输入")
							_this.str=""

						}
						}
					
				});
			},
			tag1(){
				this.$router.push("/home")
			}
		},
		moubted(){
		}
	}
	
</script>

<style scoped>
body{
	margin: 0;
	padding:0;
}

#denglu{
	height:100vh;
	background: #cecece;
	overflow: hidden;
	margin: 0;
	padding: 0;
}
#d_tou{
	height: 50px;
	width: 100%;
	background: #fff;
	position: relative;
	margin: 0;
	padding: 0;
}
#d_tou>span{
	display: block;
	height: 30px;
	width: 30px;
	position: absolute;
	text-align: center;
	top: 10px;
	left: 10px;
	font-size: 30px;
}
#d_tou>p{
	height: 50px;
	width: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	line-height: 50px;
	font-size: 20px;
}
#huanying{
	height:60px;
	width: 100%;
}
#huanying>p{
	height: 60px;
	width: 90%;
	margin: 0 auto;
	line-height: 60px;
	font-size: 20px;
	
}
#huanying>p>span{
	display: inline-block;
	width: 40%;
	height:30px ;
}



#mima{
	height: 50px;
	width: 100%;
	margin-top: 10px;
	background: #fff;
}
#mima>span{
	display: block;
	height: 50px;
	width: 20%;
	line-height: 50px;
	margin-left: 5%;
	float: left;
}
#mima>input{
	display: block;
	float: left;
	height: 40px;
	width: 70%;
	line-height: 40px;
	border: 0;
	margin-top: 5px;
}
#wang{
	height: 40px;
	width: 100%;
	overflow: hidden;
}
#wang>input{
	height: 30px;
	width: 70px;
	border: #0086B3;
	float: right;
	margin-right: 20%;
	text-align: center;
	margin-top: 10px;
	color: blue;
}
#lu{
	height: 50px;
	width: 100%;
	margin-top: 20px;
}
#lu>input{
	display: block;
	height: 40px;
	width: 90%;
	margin: 0 auto;
	line-height: 40px;
	text-align: center;
	border-radius: 20px;
	border: 0;
	color: #999;
}






















</style>