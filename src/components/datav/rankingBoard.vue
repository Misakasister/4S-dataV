<template>
  <div id="ranking-board">
    <div class="ranking-board-title">车辆销售排行</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
        ],
        rowNum: 9
      }
    }
  },
  mounted(){
    let that = this;
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
#ranking-board {
  width: 20%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
