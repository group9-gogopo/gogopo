import React, { useCallback, useEffect, useState, useRef } from 'react'
import { StyledModal } from './StyleModal'
import { Cascader } from "antd";
import { post } from '@u/http'
import { useSelector, useDispatch } from 'react-redux'
import { changeShow } from '../../clearAccount/actionCreator';

function Modal(props) {
  const dispatch = useDispatch()
  const close = () => {
    dispatch(changeShow(false))
  }

  let [chooseCity, setChooseCity] = useState('')
  let [location, setAddress] = useState('')
  let [officeId, setPostcode] = useState('')
  let [name, setName] = useState('')
  let [tel, setNum] = useState('')
  let [state, setDefaultAd] = useState(false)

  const handlerChange = useCallback((e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    switch (e.target.className) {
      case "chooseCity":
        setChooseCity(() => value);
        break;
      case "Address":
        setAddress(() => value);
        break;
      case "postcode":
        setPostcode(() => value);
        break;
      case "Name":
        setName(() => value);
        break;
      case "Num":
        setNum(() => value);
      case "state": {
        setDefaultAd(() => checked)
      }
        break;
      default:
        return;
    }
  }, []);

  const handlerCommit = useCallback(async () => {
    if (!location || !officeId || !name || !tel)
      return alert("请完整填写表单");
    let data = {
      "userid": 1001,
      "location": location,
      "officeId": officeId,
      "name": name,
      "tel": tel,
      "state": state
    }
    let result = await post('http://localhost:4400/api/useraddressins', data)
    if (result) {
      close()
    }
  }, [location, officeId, name, tel, state]);


  const options = [
    {
      value: "beijing",
      label: "北京",
      children: [
        {
          value: "changping",
          label: "昌平",
          children: [
            {
              value: "laoniuwan",
              label: "老牛湾",
            },
            {
              value: "shayanglu",
              label: "沙阳路",
            }
          ],
        },
      ],
    },
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

  const onChange = useCallback(value => {
    setChooseCity(() => value)
  }, [])


  return (
    <StyledModal>
      <div className='Container'>
        <div className='head'>
          创建地址
                    <div href="" className='delete' onClick={close}>X</div>
        </div>
        <div className='address-real'>
          <div className='new'>新增收货地址</div>
          <div className='changeArea'>当前配送至
                    <span>中国大陆</span>
            <div className='tab'>切换&nbsp;</div>
          </div>
          <div className='selectAddress'>
            <span>*</span>地址信息：
                <Cascader
                  size="large"
                  options={options}
                  onChange={onChange}
                  placeholder="请选择省/市/区/街道"
                  className="chooseCity"
                />
          </div>
          <div className='detailAddress'>
            <span>*</span>详细地址：
                <input 
                  className='Address' 
                  value={location} 
                  onChange={handlerChange} 
                  type="text"
                  placeholder='请输入详细地址信息，如道路，门牌号，小区，楼栋号，单元等信息' 
                />
          </div>
          <div className="youbian">
            邮政编码：
                <input 
                  value={officeId} 
                  className='postcode' 
                  onChange={handlerChange} 
                  type="text" 
                  placeholder='请填写邮编' 
                />
          </div>
          <div className='userName'>
            <span>*</span>收货人姓名：
                <input 
                  value={name} 
                  className='Name' 
                  onChange={handlerChange} 
                  type="text" 
                  placeholder='长度不超过25个字符' 
                />
          </div>
          <div className="phoneNum">
            <span>*</span>手机号码：
                        <select name="" id="">
              <option value="">中国大陆 +86</option>
            </select>
                <input 
                  value={tel} 
                  onChange={handlerChange} 
                  className='Num' 
                  type="text"  
                  placeholder='电话号码手机号码必须填一项' 
                />
          </div>
          <div className="default">
                <input 
                  onChange={handlerChange} 
                  type="checkbox" 
                  className='state' 
                />
            <div>设置为默认收货地址</div>
          </div>
          <button className='save' onClick={handlerCommit}>保存</button>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal
