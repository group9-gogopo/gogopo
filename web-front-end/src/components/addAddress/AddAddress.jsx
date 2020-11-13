import React, { useCallback, useEffect, useState } from "react";
import { Cascader } from "antd";
import { StyledAddAddress } from "./StyledAddAddress";
import { get } from "@u/http"
 
const AddAddress = (props) => {
  let [addressInfo, setAddressInfo] = useState("");
  let [textArea, seTtextArea] = useState("");
  let [officeId, setOfficeId] = useState("");
  let [getGoods, setGetGoods] = useState("");
  let [inputIphone, setInputIphone] = useState("");
  let [inputDefault, setInputDefault] = useState(false);


  const handlerChange = useCallback((e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    switch (e.target.className) {
      case "textArea":
        seTtextArea(() => value);
        break;
      case "officeId":
        setOfficeId(() => value);
        break;
      case "getGoods":
        setGetGoods(() => value);
        break;
      case "inputIphone":
        setInputIphone(() => value);
        break;
      case "inputDefault":
        setInputDefault(() => checked);
        break;
      default:
        return;
    }
  }, []);
  const handlerCommit = useCallback(() => {
    if (!addressInfo || !textArea || !officeId || !getGoods || !inputIphone)
      return alert("请完整填写表单");
    console.log(addressInfo);
    console.log(textArea);
    console.log(officeId);
    console.log(getGoods);
    console.log(inputIphone);
    console.log(inputDefault);
  }, [addressInfo, textArea, officeId, getGoods, inputIphone, inputDefault]);

  const options = [
    {
      value: "zhejiang",
      label: "浙江",
      children: [
        {
          value: "hangzhou",
          label: "杭州",
          children: [
            {
              value: "xihu",
              label: "西湖",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "江苏",
      children: [
        {
          value: "nanjing",
          label: "南京",
          children: [
            {
              value: "zhonghuamen",
              label: "中华门",
            },
          ],
        },
      ],
    },
  ];

  const onChange=useCallback(value=> {
    setAddressInfo(()=>value)
  },[])

  useEffect(()=>{
    (async ()=>{
      let result=await get ("http://localhost:4400/api/useraddressone",{id:props.addShowID})
      let {name,location,officeId,tel}=result.userAddressOne
      seTtextArea(() => location);
      setOfficeId(() => officeId);
      setGetGoods(() => name);
      setInputIphone(() => tel);
    })()
  },[props])
  return (
    <StyledAddAddress>
      <div className="addMiddle">
        <h2>
          创建地址{" "}
          <span className="close" onClick={props.addClose}>
            X
          </span>
        </h2>
        <h3>新增收货地址</h3>
        <h4 className="toAddress">
          <span className="toAddressSpan1">当前配送至</span>
          <span className="toAddressSpan2">中国大陆</span>
        </h4>
        <h4>
          <span className="spanRed"> * </span>
          <span className="spanText">地址信息：</span>
            <Cascader 
            size="large" 
            options={options} 
            onChange={onChange}
            placeholder="请选择省/市/区/街道" 
            />
        </h4>
        <h4 className="pAddressDetail">
          <span className="spanRed"> * </span>
          <span className="spanText">详细地址：</span>
          <textarea
            name="addressDetail"
            className="textArea"
            value={textArea}
            cols="32"
            rows="10"
            onChange={handlerChange}
            placeholder="请输入详细地址，如道路、门牌号、小区、楼栋号、单元等信息..."
          ></textarea>
        </h4>
        <h4>
          <span className="spanRed"> </span>
          <span className="spanText">邮政编码：</span>
          <input
            type="text"
            className="officeId"
            value={officeId}
            onChange={handlerChange}
            placeholder="请填写邮箱"
          />
        </h4>
        <h4>
          <span className="spanRed"> * </span>
          <span className="spanText">收货人：</span>
          <input
            type="text"
            className="getGoods"
            value={getGoods}
            onChange={handlerChange}
            placeholder="超度不超过25个字符"
          />
        </h4>
        <h4>
          <span className="spanRed"> * </span>
          <span className="spanText">手机号：</span>
          <span className="spanIphone">中国大陆 +86</span>
          <input
            className="inputIphone"
            type="text"
            value={inputIphone}
            onChange={handlerChange}
            placeholder="电话号码"
          />
        </h4>
        <h4>
          <input
            type="checkbox"
            className="inputDefault"
            onChange={handlerChange}
          />
          <span className="defaultAddress">设置为默认收货地址</span>
        </h4>
        <h4>
          <div className="commit" onClick={handlerCommit}>
            提交
          </div>
        </h4>
      </div>
    </StyledAddAddress>
  );
};
export default AddAddress;
