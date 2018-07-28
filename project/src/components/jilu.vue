<template>
	<div id="jilu">
		<div id="d_tou">
			<p>购买记录</p>
			<span class="iconfont icon-back" @click="tag1()"></span>
		</div>
		<div id="jlt">
			<table>
				<tr>
					<th>产品名称</th>
					<th>年化利率</th>
					<th>购买金额</th>
					<th>操作</th>
				</tr>
				<tr v-for="(v,i) in  this.$store.state.gou">
					<td>{{v.qi}}</td>
					<td>{{v.qi1}}%</td>
					<td>{{v.qi2}}</td>
					<td>
						<button @click="mai(i,v.qi2)">卖出</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name:"jilu",
		
		methods:{
			tag1(){
				this.$router.push("/goumai")
			},
			mai(i,n){			
				this.$store.commit("mai1",[i,n])

				this.$router.push("/wode")
				
			}
			
		}
		
		
		
		
	}
	
</script>

<style scoped>
	#jilu{
		height: 100vh;
		background: #f1f1f1;
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
#jlt{
	min-height: 300px;
	width: 100%;
}
#jlt>table{
	border-collapse: collapse;
	width: 100%;
}	
#jlt>table>tr>td{
	height: 30px;
	line-height: 30px;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>