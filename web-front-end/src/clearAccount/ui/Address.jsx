import React, { Fragment } from 'react'
import {AddressD} from './StyleAccount'
const Address = (props) => {
    return (
            <AddressD>
                <div className='addressHead'>
                    <span className='receiving'>确认收货地址</span>
                </div>
                <div className='addressbody'>
                    <ul>
                        <li>
                            <input type="checkBox" name="" id=""/>
                            <p className='address'>北京市昌平区沙河镇沙阳路北京科技职业学院</p> 
                            <span className='name'>(D女士)</span>
                            <span className='phoneNum'>18573232384</span> 
                            <span className='defaultAddress'>默认地址</span>
                            <a className='changeName'>修改地址</a>
                        </li>
                        <li>
                            <input type="checkBox" name="" id=""/>
                            <p className='address'>北京市昌平区沙河镇沙阳路北京科技职业学院</p> 
                            <span className='name'>(D女士)</span>
                            <span className='phoneNum'>18573232384</span> 
                            <span className='defaultAddress'>默认地址</span>
                            <a className='changeName'>修改地址</a>
                        </li>
                        <li>
                            <input type="checkBox" name="" id=""/>
                            <p className='address'>北京市昌平区沙河镇沙阳路北京科技职业学院</p> 
                            <span className='name'>(D女士)</span>
                            <span className='phoneNum'>18573232384</span> 
                            <span className='defaultAddress'>默认地址</span>
                            <a className='changeName'>修改地址</a>
                        </li>
                    </ul>
                    <button><span>+</span>使用新地址</button>
                </div>
            </AddressD>
    )
}
export default Address
