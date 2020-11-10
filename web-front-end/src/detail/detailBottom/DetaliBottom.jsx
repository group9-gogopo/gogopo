import React from "react";
import { StyledDetailBottom } from "./StyledDetailBottom";

const DetaliBottom = (props) => {
  return props.detailList ? (
    <StyledDetailBottom>
      <h4 className="productText">产品说明</h4>
      <div className="goodsImgFirst">
          <div className="detailGoods"></div>
      </div>
      {props.detailList.detailImages.map((i, n) => {
        return (
          <div className="detailImgs" key={n+i}>
            <img
              src={i}
              alt=""
            />
          </div>
        );
      })}
      
    </StyledDetailBottom>
  ) : (
    ""
  );
};

export default DetaliBottom;
