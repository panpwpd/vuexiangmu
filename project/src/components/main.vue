<template>
  <div id="app">
    <header :style='aaa'>
    	<span class="tu"></span>
    	<p>{{tit}}</p>
    	
    </header>
    <section>
    		<router-view @toparent=getdata></router-view>
    </section>
   	
    <footer>
    	
    	<router-link tag="a" to="/home">
    		<span class="iconfont icon-shouye"></span>
    		<i>首页</i>
    	</router-link>
    	
    	<router-link tag="a" to="/licai">
    		<span class="iconfont icon-wodedingdan"></span>
    		<i>理财</i>
    	</router-link>
    	
    	<router-link tag="a" to="/faxian">
    		<span class="iconfont icon-search"></span>
    		<i>发现</i>
    	</router-link>
    	
    	<router-link tag="a" to="/wode" v-if="isshow">
    		<span class="iconfont icon-service"></span>
    		<i>我的</i>
    	</router-link>
    	
    		<router-link tag="a" to="/shoujihao" v-else>
    		<span class="iconfont icon-service"></span>
    		<i>我的</i>
    	</router-link>
    	
    </footer>
  </div>
</template>er

<script>


export default {
  name: 'Main',
  data:function(){
  	return{
		tit:"",
		aaa:{},
		isshow:false
  	}
  },
  methods:{
  	getdata(msg){
  		this.tit=msg[0]
  		this.aaa=msg[1]
  	}
  	
  	
  	
  },
  
  mounted(){
  		if(this.$store.state.str!=""){
  			this.isshow=true
  		}else{
  			this.isshow=false
  			
  		}
  	}
  
}
</script>

<style>
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,header,nav,footer,menu,section,aside,article,figure,figcaption{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0; }
img{display:block;}
a{text-decoration:none; color:#333;}
h1,h2,h3,h4,h5,h6{font-weight:100;}
body{ font-family:"微软雅黑";margin:0 auto;}
input,a,button{outline:none;}

#app{
	height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
}
.router-link-active{
display: flex;	
flex-direction: column;
color: red;
}


header,footer{
	height: 50px;
	background: #fff;
	text-align: center;
	line-height: 50px;
	font-size: 20px;
}

section{
	flex: 1;
	overflow: auto;
}
header{
	position: relative;
}
header>span{
	display: block;
	height: 30px;
	width: 30px;
	position: absolute;
	left: 10px;
	top: 10px;
font-size: 14px;
text-align: center;
line-height: 30px;
}
footer{
	width: 100%;
	display: flex;
	justify-content: space-around;
	border-top: 2px solid #999;


}
footer i,span{
	display:block;
	font-style:normal;
	height: 20px;
	width: 50px;
	line-height: 20px;
	text-align: center;
	
}
footer i{
	margin-top: 5px;
	font-size: 14px;
}
footer span{
	margin-top: 5px;
}
.iconfont{
	font-size: 24px;
}

</style>
