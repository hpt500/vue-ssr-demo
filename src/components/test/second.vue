<template>
	<div id="secondcomponent">
		<el-card class="box-card">
			<div class="bbb">测试接口</div>
			<ul :key="gamePage" v-if="gamePage > 0">
				<img src='/static/img/loading.gif' v-show="loading">
				<li v-for="item in items" :key="item.id">{{item.title}}</li>
			</ul>
		</el-card>
	</div>
	
</template>

<script type="text/javascript">
export default {
	props:{
		type: String,
		gamePage: Number
	},
	data() { 
		return {
			loading: true
		} 
	}, 
	created() {
        if(this.items.length!=0){
            this.loading = false
        }
	},
	watch: {
		items: function(val,oldVal){
			this.loading = (this.items && this.items.length>0) ? false : true
		}
	},
    computed: {
        page(){
			return Number(this.$route.params.page) || 1
		},
        items(){
            return this.$store.state.items[this.gamePage]
        }
    }
}
</script>