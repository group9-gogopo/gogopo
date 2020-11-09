import styled from "styled-components"
import deatailGoods from "@a/images/deatailGoods.png"

const StyledDetailBottom=styled.div`
    width: 1300px;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    .productText {
    width: 100%;
    height: 45px;
    background-color: #ffc514;
    padding-left :20px;
    padding-top:5px;
    color:#ffffff;
    font-size:20px;
  }
   .goodsImgFirst{
       width:1200px;
       height:600px;
       margin-top:20px;
       img{
           display:block;
           width:100%;
           height:100%;
       }
   }
   .detailGoods{
       width:530px;
       height:148px;
       margin:40px auto 100px;
       background-image:url(${deatailGoods}) ;
       background-repeat:no-repeat;
   }
   .detailImgs{
       width:1200px;
       height:800px;
       img{
           display:block;
           width:100%;
           height:100%;
       }
   }
`
export{
    StyledDetailBottom
}