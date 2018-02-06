

<template>
 
  <div class="pos">
    <el-row class="leftOrder">
      <el-col :span="7" class="orderList" id="orderList">
   
        <el-tabs >
          <el-tab-pane label="点餐" class="head" >
          <el-table :data="orderData"  border stripe class="order-table">
            <el-table-column prop="goodsName" label="商品"  align="center"> </el-table-column>
            <el-table-column prop="goodsPrice" label="商品金额"  align="center"> </el-table-column>
            <el-table-column prop="count" label="数量" align="center"> </el-table-column>
            <el-table-column prop="operation" label="操作"  align="center" fixed="right">  
              <template slot-scope="scope">
            <el-button type="text" size="small" @click="addOrder(scope.row)">增加</el-button>          
            <el-button type="text" size="small" @click="deleteOrder(scope.row)">删除</el-button>
            </template>
            </el-table-column>
          </el-table>
          <div class="total">
           <p> <span>数量：<b style="color:red;margin-right:2px;">{{totalCount}}</b> 份</span>   
           <span>金额：<b style="color:red;margin-right:2px;"> {{totalPrice}}</b> 元</span></p>
          </div>
          <div class="operation">
            
            <el-button type="danger" @click="deleteAllOrder()">删除</el-button>
            <el-button type="warning">挂单</el-button>
            <el-button type="success" @click="checkout()">结账</el-button>
            
          </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" >挂单</el-tab-pane>
          <el-tab-pane label="外卖" >外卖</el-tab-pane>
        </el-tabs >
          
      </el-col>
      <el-col :span="17">
        <div class="high-frequency-goods">
          <div class="goods-title">高频率商品</div>
          <div class="goods-order"> 
            <ul>
              <li v-for="goods in goodsDate" @click="addOrder(goods)">
              <span class="goods-name">{{goods.goodsName}}</span>
              <span class="goods-price">￥{{goods.goodsPrice}}&nbsp;元</span>
              </li>
            </ul>
          </div>
        </div>
        <div style="clear:both"></div>
        <br><br>
        <hr style="height:5px; background:rgb(8, 100, 8);width:92%;maegin:auto;"/>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="人气热卖">

              <div class="popular-goods">
                <ul>
                <li v-for="goods in popularData" @click="addOrder(goods)">
                     <span class="hotImg"><img :src="goods.goodsImg" alt=""/></span>
                     <span class="hotName">{{goods.goodsName}}</span>
                     <span class="hotPrice">￥&nbsp;{{goods.goodsPrice}}&nbsp;元</span>
                 
                </li>
              </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="汉堡/卷">
         <div class="popular-goods">
                <ul>
                <li v-for="goods in typeData1" @click="addOrder(goods)">
                     <span class="hotImg"><img :src="goods.goodsImg" alt=""/></span>
                     <span class="hotName">{{goods.goodsName}}</span>
                     <span class="hotPrice">￥&nbsp;{{goods.goodsPrice}}&nbsp;元</span>
                 
                </li>
              </ul>
              </div>

            </el-tab-pane>
            <el-tab-pane label="吮指原味鸡">
              <div class="popular-goods">
                <ul>
                <li v-for="goods in typeData2" @click="addOrder(goods)">
                     <span class="hotImg"><img :src="goods.goodsImg" alt=""/></span>
                     <span class="hotName">{{goods.goodsName}}</span>
                     <span class="hotPrice">￥&nbsp;{{goods.goodsPrice}}&nbsp;元</span>
                 
                </li>
              </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食/配餐">
            <div class="popular-goods">
                <ul>
                <li v-for="goods in typeData3" @click="addOrder(goods)">
                     <span class="hotImg"><img :src="goods.goodsImg" alt=""/></span>
                     <span class="hotName">{{goods.goodsName}}</span>
                     <span class="hotPrice">￥&nbsp;{{goods.goodsPrice}}&nbsp;元</span>
                 
                </li>
              </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="甜点/饮料">
            <div class="popular-goods">
                <ul>
                <li v-for="goods in typeData4" @click="addOrder(goods)">
                     <span class="hotImg"><img :src="goods.goodsImg" alt=""/></span>
                     <span class="hotName">{{goods.goodsName}}</span>
                     <span class="hotPrice">￥&nbsp;{{goods.goodsPrice}}&nbsp;元</span>
                 
                </li>
              </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="快乐儿童餐">
              <div class="popular-goods">
                <ul>
                <li v-for="goods in typeData5" @click="addOrder(goods)">
                     <span class="hotImg"><img :src="goods.goodsImg" alt=""/></span>
                     <span class="hotName">{{goods.goodsName}}</span>
                     <span class="hotPrice">￥&nbsp;{{goods.goodsPrice}}&nbsp;元</span>
                 
                </li>
              </ul>
              </div>
            </el-tab-pane>

          </el-tabs>
        </div>
        
      </el-col>
    </el-row>
    
  </div>
    
</template>

<script>
import axios from 'axios';
export default {
  
  name:'pos',
  data(){
    return{
      orderData:[],
      goodsDate:[ ],
      popularData:[ ],
      typeData1:[],
      typeData2:[],  
      typeData3:[],
      typeData4:[],
      typeData5:[],
      totalCount:0,
      totalPrice:0,
    }
  },
  methods:{
    handleClick(tab,event){
      console.log(tab,event);
    },
    addOrder(goods){
      //判断商品是否已存在于订单中
       this.totalCount=0;
      this.totalPrice=0;
      let isHave=false;
      for(let i=0;i<this.orderData.length;i++){
        if(this.orderData[i].goodsId==goods.goodsId){
          isHave=true;
        }
      }
      //判断是否已存在订单
      if(isHave){
        let arr=this.orderData.filter(o=>o.goodsId==goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods={
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          goodsPrice:goods.goodsPrice,
          count:1
          };
        this.orderData.push(newGoods);
      }
   //计算总金额和数量
  this.totalOperation();
    },
    deleteOrder(goods){
      this.orderData=this.orderData.filter(o=>o.goodsId!=goods.goodsId);
      this.totalOperation();
    },
    deleteAllOrder(){
      this.orderData=[];
      this.totalCount=0;
      this.totalPrice=0;
    },
    checkout(){
      if(this.totalCount!=0){
        this.orderData=[];
        this.totalCount=0;
        this.totalPrice=0;
        this.$message({
          message:'结账成功',
          type:'success'
        });
      }else{
        this.$message.error('商品不可以为空');
      }
    },
    totalOperation(){
      this.totalCount=0;
      this.totalPrice=0;
      if(this.orderData){
           this.orderData.forEach((element)=>{
         this.totalCount+=element.count;
         this.totalPrice=this.totalPrice+(element.count*element.goodsPrice);
        }); 
      }
    }
  },
  created:function(){
    axios.get('http://192.168.2.106:8080/Apos/list')
    .then(response=>{
      console.log(response);
      this.goodsDate=response.data[0];
      this.popularData=response.data[1];
      this.typeData1=response.data[2];
      this.typeData2=response.data[3];
      this.typeData3=response.data[4];
      this.typeData4=response.data[5];
      this.typeData5=response.data[6];

    })
    .catch(error=>{
      console.log(error);
      alert('网络错误');
    })
  },
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById('orderList').style.height=orderHeight+'px';
  }
}
</script>


<style scoped>
.orderList{
  
  border-right:5px solid rgb(8, 100, 8);
  height:100%;
}

.operation{
  margin-top:10px;

}
.operation button{
  
  margin-right: 20px;
}
.leftOrder{
  margin-left:5px;

}
.head table tr:nth-child(odd){
  background-color: #49f7dd;
  
}

.goods-title{
  text-align: left;
  font-size: 16px;
  color:rgb(15, 59, 39);
  font-weight: bold;
  margin-left:20px;
}
.goods-order ul li{
  list-style: none;
  float:left;
  border:1px solid rgb(25, 163, 43);
  border-radius: 5px;
  margin:10px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
}
.goods-type{
  margin-left:20px;
 width:96%;
height: 650px;
    overflow: hidden;
}
.popular-goods{
  height: 600px;
    overflow: auto;
}

.popular-goods ul li{
  width:300px;
  height:120px;
  border:2px solid rgba(10, 117, 34, 0.87);
  list-style: none;
  float:left;
  margin:20px;
  cursor: pointer;

}
.hotImg{
  display: inline-block;
  height:100px;
  width:120px;
  float: left;
margin:10px 0px 0px 10px;
}
.hotImg img{
  width:100%;
  height:100%;
  
}
.hotName{
  width:100px;
  padding:20px;
  display: inline-block;
  font-size:20px;

}
.hotPrice{
  width:100px;
  padding:20px;
  color:rgb(240, 20, 75);
  font-weight: 800;
}
.total{
  height:60px;
  background-color: rgb(168, 211, 205);

}
.total p{
  width:240px;
  float:right;
  font-size:16px;
  font-weight: bold;
}
.total p span:first-child{
  margin-right: 20px;
}
</style>
