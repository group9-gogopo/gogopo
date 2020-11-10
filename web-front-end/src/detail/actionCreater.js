import { DETAILDATA } from "./actionTypes";

//导入配置好的数据请求格式
import { get } from "@u/http.js";

const detailLoadData = (id) => {
  let list = [
    {
      "id": 1077,
      "image": "https://image.missfresh.cn/f2961abd91fd4961beec48cb993777be.jpg?mryxw=450&mryxh=450",
      "newprice": 48.9,
      "oldprice": 49.8,
      "name": "有时红西柚果酒330ml",
      "sale": 499,
      "say": 367,
      "info": "半熟轻发酵果酒 微醺你一整天",
      "detailImages": [
        "https://image.missfresh.cn/5ff5f366885d4e4d872585297facface.png?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/49a0e153c9d9493db3016870c2deceab.png?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/04df129069d64b6db3dccb5afc59a2f3.png?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/9069c1cb4352441db8834113a8cbd70b.png?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/3f2c2784b3c445a7b8795a31afa4210e.png?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/0c304d58cdab4cca96df9190d75397e4.png?mryxw=750&mryxh=500"
      ]
    },
  ];
  return {
    type: DETAILDATA,
    list
  };
};
export{
    detailLoadData
}