<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['车辆名', '颜色', '价格', '销售员'],
        data: [],
        index: true,
        columnWidth: [40,100, 100, 150,150],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  },
    mounted(){
    let that = this;
    $.ajax({
    url:this.apiUrl.carSell,
    type:'POST', //GET
    async:false,    //或false,是否异步
    data:{
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：
    beforeSend:function(xhr){
    },
    success:function(data,textStatus,jqXHR){
          for(let i = 0; i < data.length; i++){
         let obj=[data[i].name,data[i].color,data[i].price,data[i].sell_name];
         that.config.data.push(obj);
         }

    },
    error:function(xhr,textStatus){
    },
    complete:function(){
    }
})
  }
  
}
</script>

<style lang="less">
#scroll-board {
  width: 50%;
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
