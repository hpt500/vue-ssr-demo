<template>
    <div>组件 1
        <second-com :type="type" :gamePage="gamePage"></second-com>
        <button class="xbtn" @click="pageFn">下一页</button>

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
        pageFn(){
            this.gamePage ++ ;
            console.log(this.gamePage)
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
