import styled from "styled-components";

const StyledDetailLeft = styled.div`
    width: 284px;
  margin-right: 15px;
  p {
    width: 284px;
    height: 45px;
    background-color: #ffc514;
    font-size: 20px;
    line-height: 45px;
    padding-left: 10px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0;
  }
  ul {
    li {
      font-size: 16px;
      width: 284px;
      height: 50px;
      color: #a0a0a0;
      border: 2px solid #a0a0a0;
      border-bottom: none;
      padding-left: 10px;
      line-height: 50px;
    }
    > li:last-child {
      border-bottom: 1px solid #a0a0a0;
    }
    .active {
      color: #0a9e4b;
      background-color: #eeeeee;
    }
  }
`;

export { StyledDetailLeft };
