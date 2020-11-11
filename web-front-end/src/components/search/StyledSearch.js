import styled from 'styled-components'

const Container = styled.div`
  width: 1000px;
  margin: ${props => props.margin};

  .searchBox {
    width: 880px;
    height: 70px;
    .search{
      width: 650px;
      height: 80px;
      line-height: 60px;
      background: #009a44;
      padding-left: 3px;
      position: relative;
      float:left;
      > input {
        width: 550px;
        height: 70px;
        background: #fff;
        line-height: 54px;
        font-size: 20px;
        color: #999999;
        margin: 5px 0 5px 3px;
        padding-left: 14px;
        border: 0;
        outline: none;
      }
      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 88px;
        height: 60px;
        float: right;
        position: absolute;
        top: 8px;
        right: 5px;
        cursor:pointer;
        svg {
          width: 38px;
          height: 38px;
          fill: #fff;
        }
      }
    }

    .shopcarButton {
      width: 160px;
      height: 80px;
      float: right;
      background: #009a44;
      font-size: 22px;
      color: #fff;
      font-weight: 100;
      display: flex;
      justify-content: center;
      align-items: center;

      svg{
        width: 38px;
        height: 38px;
        fill: #fff;
      }
      > span {
        font-size: 22px;
        fon-weight: 300;
      }
    }
  }

  .hotSearch {
    width: 400px;
    display: flex;
    flex-direction: row;
    height: 20px;
    font-size: 18px;
    padding-top: 10px;
    color: #999999;
    padding-left: 11px;
    p {
      width: 50px;
      &.active {
        color: #009a44;
      }
    }
  }
`

export {
  Container
}