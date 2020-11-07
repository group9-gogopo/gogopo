import styled from 'styled-components'

const StyledPag = styled.div`
  width: 100%;
  height: 0.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  .StProBoBox{
    display:flex;
    padding-left:1rem;
    div{
      display:flex;
      margin:0 0.1rem;
      .active{
        border:1px solid #000
      }
      span{
        display:block;
        width:0.28rem;
        margin:0 0.05rem;
        text-align:center;
      }
      input{
        width:.2rem;
        height:.2rem;
      }
    }
  }
`;
export {
    StyledPag
}