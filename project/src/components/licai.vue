<template>
	<div id="licai">
		<div id="tequan">
			<p>
				<span></span>
				<span>特权专区</span>
			</p>
			<div id="te_qi" @click="tag1()">
				<p>{{chanpinhao1}}</p>
				<fieldset>
					<legend></legend>
				</fieldset>
				<table>
					<tr>
						<td class="tb_zuo">{{shouyi1}}<mark>%</mark></td>
						<td class="tb_zhong">{{qixian1}}</td>
						<td class="tb_you">10.00万元</td>
					</tr>
					<tr class="tb_wen">
						<td>预期年化</td>
						<td class="tb_zhong">投资期限</td>
						<td class="tb_you">剩余可投</td>
					</tr>
				</table>
				<p></p>
			</div>
		</div>
		
		<div id="jingxuan">
			<p>
				<span></span>
				<span>精选专区</span>
			</p>
			<div  v-for='(v,i) in arr'>
				<p>{{v.chanpinhao1}}</p>
				<fieldset>
					<legend></legend>
				</fieldset>
				<table @click="tag(v)">
					<tr>
						<td class="tb_zuo">{{v.shouyi1}}<mark>%</mark></td>
						<td class="tb_zhong">{{v.qixian1}}</td>
						<td class="tb_you">10.00万元</td>
					</tr>
					<tr class="tb_wen">
						<td>预期年化</td>
						<td class="tb_zhong">投资期限</td>
						<td class="tb_you">剩余可投</td>
					</tr>
				</table>
				<p></p>
				
			</div>
			
			
		</div>
		<div id="shouqing">
			<p>
				<span></span>
				<span>已售罄</span>
				<span class="iconfont icon-dayuhao"></span>
			</p>
			
			<div>
				<p>金桔1号第36期</p>
				<fieldset>
					<legend></legend>
				</fieldset>
				<table>
					<tr>
						<td class="tb_zuo">9.80<mark>%</mark></td>
						<td class="tb_zhong">98天</td>
						<td class="tb_you iconfont icon-yimaiwan1"></td>
					</tr>
					<tr class="tb_wen">
						<td>预期年化</td>
						<td class="tb_zhong">投资期限</td>
						<td class="tb_you">已售罄</td>
					</tr>
				</table>
				<p></p>
				
			</div>
			<div>
				<p>金桔1号第35期</p>
				<fieldset>
					<legend></legend>
				</fieldset>
				<table>
					<tr>
						<td class="tb_zuo">8.80<mark>%</mark></td>
						<td class="tb_zhong">66天</td>
						<td class="tb_you iconfont icon-yimaiwan1"></td>
					</tr>
					<tr class="tb_wen">
						<td>预期年化</td>
						<td class="tb_zhong">投资期限</td>
						<td class="tb_you">已售罄</td>
					</tr>
				</table>
				<p></p>
				
			</div>
			
			
			
			
		</div>	
		
	</div>
	
</template>

<script>
	import axios from "axios"
	export default{
		name:"Licai",
		data:function(){
			return{
				str:"理财",
				aaa:{'display':'block'},
				chanpinhao1:"金桔新手标第13期",
				qixian1:"25天",
				shouyi1:"16.88",
				arr:[{chanpinhao1:"金桔新手标第14期",
				qixian1:"35天",
				shouyi1:"16.88"},
				{chanpinhao1:"金桔新手标第15期",
				qixian1:"66天",
				shouyi1:"7.8"},
				{chanpinhao1:"金桔新手标第16期",
				qixian1:"90天",
				shouyi1:"9.8"}]
			}
		},
		mounted(){
			this.$emit("toparent",[this.str,this.aaa,this.tu])
			
		},
		methods:{
			tag(i){
				this.$router.push("/chanpin")
				this.$store.commit("chp",i)
			},
			tag1(){
				this.$router.push("/chanpin")
				this.$store.commit("chp1",{chanpinhao1:"金桔新手标第13期",
				qixian1:"25天",
				shouyi1:"16.88"})
			}
		}
	}
</script>

<style scoped>
	#licai{
		height: 100vh;
	background: #f1f1f1;
	}
	#tequan{
		height:160px;
		width:100%;
		
	}
	#tequan>p:nth-of-type(1){
		height: 30px;
		line-height: 30px;
		width: 100%;
		margin-left: 3%;
	}
	#tequan p span:nth-child(1){
		float: left;
		height: 15px;
		width: 2px;
		border: 1px solid red;
		background:red;
		border-radius: 2px;
		margin-top: 8px;
		margin-right: 10px;
	}
	#tequan p span:nth-child(2){
		float: left;
		height: 30px;
		width: 90%;
		text-align: left;
		line-height: 30px;
	}
	#te_qi{
		height: 130px;
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
		background: #fff;
	}
	#te_qi p:nth-of-type(1){
		height: 40px;
		line-height: 40px;
		margin-left: 5%;
	}
	#te_qi fieldset{
		height: 5px;
		width: 90%;
		margin: 0 auto;
		border-top: 1px dashed #000;
	}
	#te_qi table{
		height: 60px;
		width: 90%;
		margin: 0 auto;
	}
	#te_qi table td{
		width: 33.3%;
		height: 30px;
	}
	#te_qi .tb_zhong{
		text-align: center;
	}
	#te_qi .tb_you{
		text-align:right;
	}
	#te_qi .tb_zuo{
		color: red;
		font-size: 24px;
	}
	#te_qi .tb_zuo mark{
		color: red;
		font-size: 14px;
		background: #fff;
	}
	#te_qi .tb_wen{
		color: #999;
	}
    #te_qi>p:nth-of-type(2){
		height: 2px;
		border: 1px solid #999;
		width: 90%;
		margin: 0 auto;
		border-radius: 2px;
		background: #999;
		
	}
	#jingxuan{
		min-height: 400px;
		width: 100%;
		
		
	}
	
	#jingxuan>p:nth-of-type(1){
		height: 30px;
		line-height: 30px;
		width: 100%;
		margin-left: 3%;
	}
	#jingxuan>p:nth-of-type(1) span:nth-child(1){
		float: left;
		height: 15px;
		width: 2px;
		border: 1px solid red;
		background:red;
		border-radius: 2px;
		margin-top: 8px;
		margin-right: 10px;
	}
	#jingxuan>p:nth-of-type(1) span:nth-child(2){
		float: left;
		height: 30px;
		width: 80%;
		text-align: left;
		line-height: 30px;
	}
	#jingxuan div{
		height: 130px;
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
		background: #fff;
		margin-bottom: 5px;
	}
	#jingxuan div p:nth-of-type(1){
		height: 40px;
		line-height: 40px;
		margin-left: 5%;
	}
	#jingxuan div fieldset{
		height: 5px;
		width: 90%;
		margin: 0 auto;
		border-top: 1px dashed #000;
	}
	#jingxuan div table{
		height: 60px;
		width: 90%;
		margin: 0 auto;
	}
	#jingxuan div table td{
		width: 33.3%;
		height: 30px;
	}
	#jingxuan div .tb_zhong{
		text-align: center;
	}
	#jingxuan div .tb_you{
		text-align:right;
	}
	#jingxuan div .tb_zuo{
		color: red;
		font-size: 24px;
	}
	#jingxuan div .tb_zuo mark{
		color: red;
		font-size: 14px;
		background: #fff;
	}
	#jingxuan div .tb_wen{
		color: #999;
	}
    #jingxuan div p:nth-of-type(2){
		height: 2px;
		border: 1px solid #999;
		width: 90%;
		margin: 0 auto;
		border-radius: 2px;
		background: #999;
		
	}
	#shouqing{
		min-height: 200px;
		width: 90%;
		margin: 0 auto;
	}
	#shouqing>p:nth-of-type(1){
		height: 50px;
		line-height: 50px;
		width: 90%;
		margin-left: 3%;
	}
	#shouqing p span:nth-child(1){
		float: left;
		height: 15px;
		width: 2px;
		border: 1px solid red;
		background:red;
		border-radius: 2px;
		margin-top: 8px;
		margin-right: 10px;
	}
	#shouqing p span:nth-child(2){
		float: left;
		height: 50px;
		width: 75%;
		text-align: left;
		line-height: 50px;
	}
	#shouqing p span:nth-child(3){
		float: right;
		height: 50px;
		width: 10%;
		line-height: 50px;
		margin-right: 5%;
		font-size: 20px;
	}
	
	
	#shouqing div{
		height: 130px;
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
		background: #fff;
		margin-bottom: 5px;
	}
	#shouqing div p:nth-of-type(1){
		height: 40px;
		line-height: 40px;
		margin-left: 5%;
	}
	#shouqing div fieldset{
		height: 5px;
		width: 90%;
		margin: 0 auto;
		border-top: 1px dashed #000;
	}
	#shouqing div table{
		height: 60px;
		width: 90%;
		margin: 0 auto;
	}
	#shouqing div table td{
		width: 33.3%;
		height: 30px;
	}
	#shouqing div .tb_zhong{
		text-align: center;
		color: #999;
	}
	#shouqing div .tb_you{
		text-align:right;
	}
	#shouqing div .tb_zuo{
		color:#999;
		font-size: 24px;
	}
	#shouqing div .tb_zuo mark{
		color:#999;
		font-size: 14px;
		background: #fff;
	}
	#shouqing div .tb_wen{
		color: #999;
	}
    #shouqing div p:nth-of-type(2){
		height: 2px;
		border: 1px solid #999;
		width: 90%;
		margin: 0 auto;
		border-radius: 2px;
		background: #999;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>