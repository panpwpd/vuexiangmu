import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'

import Licai from '../components/licai.vue'

import Faxian from '../components/faxian.vue'

import Chongzhi from '../components/chongzhi.vue'
import Goumai from '../components/goumai.vue'
import Tixian from '../components/tixian.vue'

import Wode from '../components/wode.vue'

import Main from '../components/main.vue'
import Jilu from '../components/jilu.vue'
import Shoujihao from '../components/shoujihao.vue'
import Tuichu from '../components/tuichu.vue'
import Zhuce from '../components/zhuce.vue'
import Chanpin from '../components/chanpin.vue'
import Denglu from '../components/denglu.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{path:'/main',component:Main,
		children:[
		{path:'/home',component:Home},
		{path:'/licai',component:Licai},
		{path:'/faxian',component:Faxian},
		{path:'/wode',component:Wode}
		]
	},
	
		{path:"/",redirect:"/home"},
		{path:'/shoujihao',component:Shoujihao},
		{path:'/denglu',component:Denglu},
		{path:'/zhuce',component:Zhuce},
		{path:'/chanpin',component:Chanpin},
		{path:'/tuichu',component:Tuichu},
		{path:'/chongzhi',component:Chongzhi},
		{path:'/tixian',component:Tixian},
		{path:'/goumai',component:Goumai},
		{path:'/jilu',component:Jilu}
		
	]
})





