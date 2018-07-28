<template>
	<div id="shoujihao">
		<div id="s_t">
			<span class="iconfont icon-back"  @click="tag1()"></span>
			手机号
		</div>
		
		<div id="libao">
			<p>
				<span>注册立送<mark>2888元大礼包</mark></span>
				<span>还专项16.88%年化收益</span>
				<span></span>
			</p>
			<p>
				<img src="../img/shouz.png"/>
			</p>
		</div>
		
		<div id="hao">
				<span>手机号:</span> 
				<input type="text" id="sjh"  placeholder="请输入手机号" v-model="str"   />
		</div>
		
		<div id="xiayibu">
			<input type="button" :style="col1" id="btn"  value="下一步"  @click="taghao()" v-if='/^1[3|4|5|8][0-9]\d{8}$/.test(str)'/>
			<input type="button" id="btn"  value="下一步"  @click="taghao()" v-else disabled="disabled"/>
			
		</div>
		
		
	</div>

</template>

<script>
	
	import axios from "axios"
	import {mapGetters,mapActions} from "vuex"
	import $ from "jquery"
	
	export default{
		name:"shoujihao",
		data:function(){
			return{
				str:"",
				col1:{"color":"#fff","background":"red",disabled:"true"}
			}
		},
		
		methods:{
			taghao(){
					var _this=this
				$.ajax({
					type:"post",
					url:"http://localhost:3000/register",
					data:{phoneNum:_this.str,id:1},
					success:function(data){
						console.log(data)
						if(data==0){
							_this.$router.push("/denglu")
						}else{
							_this.$router.push("/zhuce")
						}
						
						
					}
				});
		
				
				this.$store.commit("taghao",this.str)
			},
			
			tag1(){
				
				this.$router.push("/home")
			}
		},
		
		mounted(){

		},
		
	}
	
</script>

<style scoped>
	#shoujihao{
		height: 100vh;
		background:#f1f1f1;
	}

	
	#s_t{
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 24px;
		position: relative;
		background: #fff;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	#s_t>span{
		display: block;
		position: absolute;
		height: 30px;
		width: 30px;
		text-align: center;
		line-height: 30px;
		font-size: 30px;
		top: 10px;
	}	

	
	#libao{
		height:170px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: #fff;
		overflow: hidden;
		margin: 10px 0;
	}
	#libao p:nth-child(1){
		height:170px;
		width:65%;
		margin-left: 2%;
	}
	#libao p:nth-child(1) span:nth-child(1){
		display: block;
		height: 60px;
		width: 100%;
		line-height: 60px;
		font-size: 22px;
		margin-top: 30px;
	}
	#libao p:nth-child(1) span:nth-child(1) mark{
		background: #FFF;
		color: red;
	}
	#libao p:nth-child(1) span:nth-child(2){
		display: block;
		height: 40px;
		width: 100%;
		line-height: 40px;
		font-size: 16px;
		color: #999;
	}
	#libao p:nth-child(1) span:nth-child(3){
		display: block;
		height: 2px;
		width: 30%;
		border:1px solid red;
		border-radius: 2px;
		background: red;
	}
	
	#libao p:nth-child(2){
		height:170px;
		width:30%;
		margin-top: 30px;
		
	}
	#libao p:nth-child(2) img{
		height:80px;
		width:100%;
		
		
	}
	#hao{
		height: 60px;
		width: 100%;
		background: #fff;
		margin-top: 10px;
		margin-bottom: 40px;
	}
	
	
	#hao span{
		display: block;
		float: left;
		width: 20%;
		height: 60px;
		line-height: 60px;
		font-size: 20px;
		margin-left: 5%;
	}
	#hao input{
		float: left;
		height: 40px;
		width: 60%;
		line-height: 54px;
		border:0;
		font-size: 14px;
		margin-top: 10px;
	}
	
	
	#xiayibu{
		height: 50px;
		width: 100%;
		text-align: center;
		background: #fff;
		
		
	}
	#xiayibu input{
		display: block;
		height: 50px;
		width: 90%;
		margin: 0 auto;
		line-height: 50px;
		border-radius: 10px;
		border: 0;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>