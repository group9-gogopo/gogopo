import React,{useCallback,useEffect,useState,useRef} from 'react'
import {StyledModal} from './StyleModal'
import {useSelector,useDispatch} from 'react-redux'
function Modal(props) {
     let inputyy=useRef()
   
    function handleChange(){
        props.addClose()
    }
    let [chooseCity,setChooseCity] = useState('')
    let [Address,setAddress] = useState('')
    let [postcode,setPostcode] = useState('')
    let [Name,setName] = useState('')
    let [Num,setNum] = useState('')
    let [defaultAd,setDefaultAd] = useState(false)

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
          case "defaultAd":{
            setDefaultAd(()=> checked)
          }
            break;
          default:
            return;
        }
      }, []);

      const handlerCommit = useCallback(() => {
        if ( !Address || !postcode || !Name || !Num)
          return alert("请完整填写表单");
            console.log(inputyy.current.value)
            console.log(Address);
            console.log(postcode);
            console.log(Name);
            console.log(Num);
            console.log(defaultAd);
      }, [Address, postcode, Name, Num, defaultAd]);
      useEffect(()=>{
        console.log(inputyy.current.value)
      },[])
    return (
        <StyledModal>
            <div className='Container'>
                <div className='head'>
                    创建地址
                    <a href="" className='delete' onClick={handleChange}>X</a>
                </div>
                <div className='address-real'>
                    <div className='new'>新增收货地址</div>
                    <div className='changeArea'>当前配送至
                    <span>中国大陆</span>
                    <a className='tab'>切换&nbsp;></a>
                    </div>
                    <div className='selectAddress'>
                        <span>*</span>地址信息：
                        <select name="" id=""  placeholder='请选择省/市/区/街道' className='chooseCity'>
                            <option value="北京" ref={inputyy}>北京</option>
                            <option value="天津" ref={inputyy}>天津</option>
                            <option value="石家庄" ref={inputyy}>石家庄</option>
                        </select>
                    </div>
                    <div className='detailAddress'>
                        <span>*</span>详细地址：
                        <input className='Address' value={Address} onChange={handlerChange} type="text" name="" id="" placeholder='请输入详细地址信息，如道路，门牌号，小区，楼栋号，单元等信息'/>
                    </div>
                    <div className="youbian">
                        邮政编码：
                        <input value={postcode} className='postcode' onChange={handlerChange} type="text" name="" id="" placeholder='请填写邮编'/>
                    </div>
                    <div className='userName'>
                        <span>*</span>收货人姓名：
                        <input value={Name} className='Name' onChange={handlerChange} type="text" name="" id="" placeholder='长度不超过25个字符'/>
                    </div>
                    <div className="phoneNum">
                        <span>*</span>手机号码：
                        <select name="" id="">
                            <option value="">中国大陆 +86</option>
                        </select>
                        <input value={Num} onChange={handlerChange} className='Num'type="text" name="" id="" placeholder='电话号码手机号码必须填一项'/>
                    </div>
                    <div className="default">
                        <input onChange={handlerChange} type="checkbox" name="" id="" className='defaultAd'/>
                        <div>设置为默认收货地址</div>
                    </div>
                    <button className='save' onClick={handlerCommit}>保存</button>
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal
