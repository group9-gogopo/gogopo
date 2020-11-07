import styled from "styled-components";

const StyledAddAddress = styled.div`
  width: 100%;
  height: 100%;
  background-color:rgba(204,204,204,0.6);
  position: absolute;
  left:0;
  top:0;
  .addMiddle {
    width: 800px;
    height: 700px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 10px solid #aaa;
    position: absolute;
    top: 100px;
    left: 30%;
    background-color:#fff;
    h2{
        width:100%;
        height:40px;
        font-size:20px;
        font-weight:800;
        background-color: #ccc;
        position: relative;
        .close{
            position:absolute;
            top:5;
            right:15px;
            cursor: pointer;
        }
    }
    h3{
        width:70%;
        height:20px;
        color:red;
    }
    .toAddress{
        width:60%;
        height:40px;
        background-color:#ccc;
        display:flex;
        span{
            display:block;
            width:120px;
            height:100%;
            text-align:center;
            line-height:40px;
            font-size:16px;
            font-weight:600;
        }
        .toAddressSpan1{
            display:block;
            width:120px;
            height:100%;
            text-align:center;
            line-height:40px;
            font-size:16px;
            color:#777;
        }
    }
    h4{
        width:60%;
        height:40px;
        display:flex;
        margin:15px 0;
        .spanRed{
            display:block;
            width:10px;
            height:100%;
            color:red;
            line-height:30px;
        }
        .spanText{
            display:block;
            width:100px;
            height:100%;
            line-height:40px;
            font-size:20px;
        }
        input{
            width:320px;
            height:40px;
            border:2px solid #ccc;
            border-radius:4px;
            padding:0 10px;
            font-size:18px;
        }
        textarea{
            width:320px;
            height:70px;
            resize: none;
            border:2px solid #ccc;
            border-radius:4px;
            padding :5px 10px; 
            font-size:18px;
        }
        .spanIphone{
            width:140px;
            height:100%;
            line-height:40px;
            font-size:18px;
            font-weight:600;
            border:2px solid #ccc;
            border-radius:4px;
            text-align:center;
        }
        .inputIphone{
            width:170px;
            margin-left:10px;   
        }
        input[type="checkbox"]{
            width:25px;
            margin-left:110px;
        }
        .defaultAddress{
            width:180px;
            height:40px;
            line-height:40px;
            font-size:18px;
        }
        .commit{
            margin-left:110px;
            width:70px;
            height:50px;
            background-color:#5883FF;
            border-radius:4px;
            color:#fff;
            font-size:20px;
            line-height:50px;
            text-align:center;
            cursor: pointer;
        }
    }
    .pAddressDetail{
        height:70px;
        span{
           line-height:60px;
        }
    }
  }
`;

export { StyledAddAddress };
