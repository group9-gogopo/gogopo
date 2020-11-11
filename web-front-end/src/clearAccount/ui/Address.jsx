import React from 'react'
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
                        <span>北京市昌平区沙河镇沙阳路北京科技职业学院 （D女士）18573232384</span>
                    </li>
                </ul>
            </div>
        </AddressD>
    )
}
export default Address
