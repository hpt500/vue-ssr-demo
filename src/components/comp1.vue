<template>
    <div>组件 1
        <second-com :type="type" :gamePage="gamePage"></second-com>
        <button 
        v-for="pg in pageNum" 
        :key="'ts'+pg" 
        @click="pageFn(pg)"
        class="xbtn"
        :class="pg==gamePage?'active':''">第{{pg}}页</button>

        <!-- <button class="xbtn" @click="pageFn">下一页</button> -->

    </div>
</template>
<script>
import secondCom from "R/test/second.vue";
import Service from './test/service';
export default {
    name: 'comp1',
    data(){
        return {
            gamePage: Number(this.$route.params.page) || 1,
            pageNum: 5
        }
    },
    props: {
        type: String
    },
    components:{
        secondCom,
    },
    computed: {
        page(){
			return Number(this.$route.params.page) || 1
		}
    },
    methods: {
        pageFn(pg){
            this.gamePage = pg
            this.$router.push({ path: `/comp1/${this.gamePage}` })
        }
    }
}
</script>
<style lang="scss">
.xbtn{
    color: #000000;
    &.active{
        color: #3bb5fc;
    }
}

</style>
