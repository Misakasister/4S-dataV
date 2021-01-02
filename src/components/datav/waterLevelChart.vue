<template>
  <div id="water-level-chart">
    <div class="water-level-chart-title">总销售额</div>

    <div class="water-level-chart-details">
    <span>{{sell}}</span>元
    </div>

    <div class="chart-container">
      <dv-water-level-pond :config="config" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'WaterLevelChart',
  data () {
    return {
      config: {
        data: [50],
        shape: 'round',
        waveHeight: 25,
        waveNum: 3,
         formatter:''
      },
      sell:0
    }
  },
  mounted(){
let that = this;
    $.ajax({
    url:this.apiUrl.carNumber,
    type:'POST', //GET
    async:false,    //或false,是否异步
    data:{
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：
    beforeSend:function(xhr){
    },
    success:function(data,textStatus,jqXHR){
        console.log(data.data.sales);
        that.sell = data.data.sales;
        
    },
    error:function(xhr,textStatus){
    },
    complete:function(){
    }
})
  },
  watch:{
    sell(v){
      this.config.data[0]=9;
      console.log(this.config);
    }
  }
}
</script>

<style lang="less">
#water-level-chart {
  width: 20%;
  box-sizing: border-box;
  margin-left: 20px;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  display: flex;
  flex-direction: column;

  .water-level-chart-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
  }

  .water-level-chart-details {
    height: 15%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    align-items: flex-end;

    span {
      font-size: 35px;
      font-weight: bold;
      color: #58a1ff;
      margin: 0 5px;
      margin-bottom: -5px;
    }
  }

  .chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dv-water-pond-level {
    max-width: 90%;
    width: 200px;
    height: 200px;
    border: 10px solid #19c3eb;
    border-radius: 50%;

    ellipse {
      stroke: transparent !important;
    }

    text {
      font-size: 40px;
    }
  }
}
</style>
