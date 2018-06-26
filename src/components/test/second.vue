<template>
	<div id="secondcomponent">
		<el-card class="box-card">
			<div class="bbb">测试接口</div>
			<ul>
				<div v-html="loading">
				</div>
				<li v-for="item in items">{{item.title}}</li>
			</ul>
		</el-card>

	</div>
	
</template>

<script type="text/javascript">
import Service from './service';
export default {
	data() {
		return {
			items: [],
			start: 1,
			loading: "<img src='/static/img/loading.gif'>"
		}
	}, 
	created(){
		this.getGamePost(); 
	},
	watch:{
		items:function(){
			console.log("发生变化")
			this.loading = ""
		}
	},
	methods: {
		getGamePost() {
			Service.gamePost({
				start:1
			}).then((data) => {
				console.log(data)
				this.items = data.data
			}).catch((data) => {
				console.log(data)
			})
		}
	}
}
</script>