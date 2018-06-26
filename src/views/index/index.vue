<template>
  <div class="g-bd">
    <div id="j-bd">
      <div class="g-row m-index">
      </div>
    </div>  
  </div>
</template>
<script>
import '@/assets/views/index.css';
import Service from './service';

export default {
  name: "Index",
  components: {
  },
  data() {
    return {
      headNavData: [],
      botNavData: []
    };
  },
  created() {
    this.serviceGet()
  },
  mounted() {},
  watch: {},
  methods: {
    serviceGet() {
      Service.get().then((data) => {
        this.headNavData = data;
      })
      Service.getBottom().then((data) => {
        this.botNavData = data;
      })
    }
  }
};
</script>
<style scoped>
.mint-field {
  background: #666;
}
</style>
