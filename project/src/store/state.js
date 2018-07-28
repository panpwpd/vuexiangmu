import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
import $ from "jquery"
import axios from "axios"
export default new Vuex.Store({
	state:{
		str:"",
		arr:[
				{chanpinhao1:"金桔新手标第14期",
				qixian1:"35天",
				shouyi1:"8.88"},
				{chanpinhao1:"金桔新手标第15期",
				qixian1:"66天",
				shouyi1:"7.8"},
				{chanpinhao1:"金桔新手标第16期",
				qixian1:"90天",
				shouyi1:"9.8"}
				],
		cha:{},
		pass:"",
		gou:[],
		money:0
	},
	mutations:{
		taghao(a,b){
				a.str=b
		},
		chp(a,b){
			a.cha=b
		},
		chp1(a,b){
			a.cha=b
		},
		list(a,b){
			a.gou.push(b[0])
			axios({
				method:"post",
				url:"http://127.0.0.1:3000/user/arr",
				params:{phoneNum:b[1],arr:JSON.stringify(a.gou)}
			}).then(function(data){
				
			})
				
			
		},
		list1(a,b){
			a.money-=parseInt(b)
			$.ajax({
					type:"post",
					url:"http://localhost:3000/jianshao",
					data:{quxian:a.money,phoneNum:a.phoneNum},
					success:function(data){
						
					}
				});
			
			
			
			
		},
		mai1(a,b){
			a.gou.splice(b[0],1)
			a.money+=parseInt(b[1])
		
				$.ajax({
					type:"post",
					url:"http://localhost:3000/maichuqu",
					data:{quxian:a.money,phoneNum:a.phoneNum},
					success:function(data){
					}
				});
				
				axios({
				method:"post",
				url:"http://127.0.0.1:3000/ar",
				params:{phoneNum:a.str,arr:JSON.stringify(a.gou)}
			}).then(function(data){
				
			})
				
				
				
				
				
				
		},
		
		
		
		chong1(a,b){
			
			a.money+=parseInt(b[0]);
			
				$.ajax({
					type:"post",
					url:"http://localhost:3000/chongzhi",
					data:{money:a.money,phoneNum:b[1]},
					success:function(data){
						
					}
				});
			
			
		},
		tixian1(a,b){
			a.money = a.money-parseInt(b[0]);
			
			$.ajax({
				type:"post",
				url:"http://localhost:3000/tixian",
				data:{money:a.money,phoneNum:b[1]},
				success:function(data){
					
				}
			});
			
		}
		
		
	}
	
})






