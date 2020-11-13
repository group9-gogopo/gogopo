import styled from "styled-components";

const PersonalDataStyled = styled.div`
  background: #fffbf6;
  min-height: 430px;
  width: 1300px;
  header {
    text-align: center;
    font-size: 18px;
    border-bottom: 4px solid #ff861b;
    line-height: 67px;
    font-weight: 600;
  }
  ul {
    margin-top: 56px;
    margin-left: 300px;
    li {
      height: 40px;
      margin-bottom: 15px;
        display:flex;
        align-items:center;
      span {
        font-size: 16px;
        font-weight: 200px;
      }
      .spanLeft {
          display:block;
        font-weight: 400;
        font-size: 20px;
        width:100px;
      }
    }
  }
`;

export { PersonalDataStyled };
