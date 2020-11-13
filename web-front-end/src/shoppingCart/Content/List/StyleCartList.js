import styled from 'styled-components'


const StyleCartList = styled.div`
     width:1300px;
     height:1000px;
     background:#fff;
     overflow:scroll;
     margin:0 auto;
     >ul{
        width:1300px;
       
     >li{
         margin:48px 0 48px 0;
         width:100%;
         height:296px;
         background:#fff3e4;
         border-radius:5px;
         border:1px solid #000;
         position:relative;
         .check{
             width:50px;
             height:50px;
             float:left;
             padding-left:14px;
             border-radius:50%;
             background:#fff;
             border:1px solid #000;
             position:absolute;
             top:50%;
             transform:translateY(-50%);
             margin:0 30px 0 10px;
             .correct{
                width: 20px;
                height: 32px;
                border-color: #009933;
                border-style: solid;
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
             }
         }
         .pic{
             width:440px;
             height:290px;
             background:#fff3e4;
             margin-left:90px;
             padding-top:26px;
             float:left;
            >img{ 
                float:left;
                display:block;
                width:255px;
                height:244px;
                background:#fff;
                margin-right:25px;
            }
            span{
                display:block;
                margin-top:102px;
            }
         }
         >span{
             margin-top:128px;
             display:block;
             text-align:center;
             float:left;
             width:230px;
         }
         .count{
             width:180px;
             background:blue;
             position:relative;
             float:left; 
             margin-top:128px;
             .count-content{
                 position:absolute;
                 left:50%;
                 transform:translate(-50%);
                 width:110px;
                 height:25px;
                 .decrement{
                     display:block;
                     float:left;
                     width:24px;
                     border:1px solid #000;
                     text-align:center;
                 }
                 span{
                     display:block;
                     float:left;
                     width:60px;
                     text-align:center;
                     background:#fff;
                 }
                 .increment{
                    display:block;
                    float:left;
                    width:24px;
                    text-align:center;
                    border:1px solid #000;
                 }
             }
         }
         >em{
            margin-top:128px;
            display:block;
            text-align:center;
            float:left;
            width:190px;
         }
         .delete{
            margin-top:128px;
            float:left;
            text-align:center;
            width:165px;
            color:#000;
         }
     }

}
`
export {
    StyleCartList
}