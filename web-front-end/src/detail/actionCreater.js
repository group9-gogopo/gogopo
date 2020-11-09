import { DETAILDATA } from "./actionTypes";

//导入配置好的数据请求格式
import { get } from "@u/http.js";

const detailLoadData = (id) => {
  let list = [
    {
      id: 1076,
      image:
        "https://image.missfresh.cn/product_images/946B4F4B5FF0E2DE70AEF093145D9FCE.JPG?mryxw=640&mryxh=640",
      newprice: 6.9,
      oldprice: 7.8,
      name: "台式鲜榨椰子汁500ml",
      sale: 1499,
      say: 1339,
      info: "富含蛋白质 维生素C",
      detailImages: [
        "https://image.missfresh.cn/53d564f2cd454fa9b813dc68f9439a0e.jpg?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/dd9e4b07e35a4a73b33da8f5a9935559.jpg?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/b4799489a64e4e628b3c42ee193286b2.jpg?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/cc5219a153624bb5881c25d749e29ade.jpg?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/bfe4c318d3f44d7bbaee1cd440b96ce0.jpg?mryxw=750&mryxh=500",
        "https://image.missfresh.cn/2989f3964220419387625d24d19c907d.jpg?mryxw=750&mryxh=500",
      ],
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