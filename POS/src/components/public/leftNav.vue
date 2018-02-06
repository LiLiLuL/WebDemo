<template>
  <div class="leftNav">
      <ul>
          <li>
              <i class="icon iconfont icon-shipinyinliao"></i>
              <div>商品</div>
          </li>
          <li>
              <i class="icon iconfont icon-home"></i>
              <div>统计</div>
          </li>
          <li>
              <i class="icon iconfont icon-wodezichan"></i>
              <div>收银</div>
          </li>
          <li>
              <i class="icon iconfont icon-huiyuanqia"></i>
              <div>会员</div>
          </li>
          <li>
              <i class="icon iconfont icon-gongnengjianyi"></i>
              <div>设置</div>
          </li>
          
      </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style >
.leftNav{
    color: #fff;
    font-size: 10px;
    height:100%;
    float:left;
    width:5%;
    background-color:rgb(3, 131, 86);

}
.iconfont{
    font-size: 24px;
}
.leftNav ul{
    margin:0;
    padding:0;
}
.leftNav li{
    list-style: none;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    height: 100%;
    width: 80%;
}
.leftNav li:focus,

.leftNav li:hover,
.leftNav li:active{
    background-color: rgb(121, 98, 22);
    cursor: pointer;
}
</style>

