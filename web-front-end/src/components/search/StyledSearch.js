import styled from 'styled-components'

const Container = styled.div`
  width: 722px;
  margin: ${props => props.margin};

  .searchBox {
    width: 700px;
    height: 60px;
    .search{
      width: 500px;
      height: 60px;
      line-height: 60px;
      background: #009a44;
      padding-left: 3px;
      position: relative;
      float:left;
      > input {
        width: 398px;
        height: 55px;
        background: #fff;
        line-height: 54px;
        font-size: 16px;
        color: #999999;
        margin: 2px 0 2px 1px;
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
        top: 0;
        right: 0;
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
      height: 60px;
      float: right;
      background: #009a44;
      font-size: 18px;
      color: #fff;
      font-weight: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 6px;
      svg{
        width: 30px;
        height: 30px;
        fill: #fff;
      }
      > span {
        font-size: 0.2rem;
        fon-weight: 300;
      }
    }
  }

  .hotSearch {
    display: flex;
    flex-direction: row;
    height: 20px;
    font-size: 16px;
    margin-top: 8px;
    color: #999999;
    padding-left: 11px;
    p {
      width: 52px;
      &.active {
        color: #009a44;
      }
    }
  }
`

export {
  Container
}