<template>
  <div id="rose-chart">
    <div class="rose-chart-title">汽车销售品牌占比</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'RoseChart',
  data () {
    return {
      option: {}
    }
  },
  methods: {
    createData () {
      const { randomExtend } = this
       let that = this
      this.option = {
        series: [
          {
            type: 'pie',
            radius: '50%',
            roseSort: false,
             data: [
            ],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              formatter: '{name} {percent}%',
              labelLineEndLength: 20,
              style: {
                fill: '#fff'
              },
              labelLineStyle: {
                stroke: '#fff'
              }
            },
            roseType: true
          }
        ],
        color: ['#da2f00', '#fa3600', '#ff4411', '#ff724c', '#541200', '#801b00', '#a02200', '#5d1400', '#b72700']
      }

      $.ajax({
    url:this.apiUrl.carCount,
    type:'POST', //GET
    async:false,    //或false,是否异步
    data:{
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：
    beforeSend:function(xhr){
    },
    success:function(data,textStatus,jqXHR){
          for(let i = 0; i < data.data.length; i++){
         let obj={
           name:data.data[i].name,
           value: data.data[i].count,
         }
         that.option.series[0].data.push(obj);
         }

    },
    error:function(xhr,textStatus){
    },
    complete:function(){
    }
})
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  },
  mounted () {


    const { createData } = this


    setInterval(createData, 300000)
    createData()
  },
}
</script>

<style lang="less">
#rose-chart {
  width: 30%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;

  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
  }
}
</style>
