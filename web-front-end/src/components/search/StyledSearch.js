import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};

  .searchBox {
    display: flex;
    flex-direction: row;

    .search{
      width: 4.8rem;
      height: 0.46rem;
      line-height: 0.3rem;
      display: flex;
      flex-direction: row;
      background: #009a44;
      > input {
        width: 3.98rem;
        height: 0.4rem;
        background: #fff;
        line-height: 0.54rem;
        color: #999999;
        margin: 0.03rem 0 0 0.03rem;
        padding-left: 0.14rem;
        border: 0;
      }
      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.8rem;
        height: 0.4rem;
        background: #009a44;
        svg {
          width: 0.3rem;
          height: 0.3rem;
          fill: #fff;
        }
      }
    }

    .shopcarButton {
      width: 1.6rem;
      height: .46rem;
      background: #009a44;
      font-size: 0.2rem;
      color: #fff;
      font-weight: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: .6rem;
      svg{
        width: .3rem;
        height: .4rem;
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
    height: 0.2rem;
    font-size: 0.16rem;
    margin-top: 0.08rem;
    color: #999999;
    padding-left: 0.11rem;
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