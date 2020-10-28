import React,{ Component } from 'react'
import { AddressStyled } from './AddressStyled'

class Address extends Component{
    render(){
        return(
            <AddressStyled>
                <header>地址管理</header>
                <ul>
                    <li>
                        <div className='msgBox'>
                            <div className='title'>
                                <p>李云祥</p>
                            </div>
                            <div className='msg'>
                                <div className='userMsg'>
                                    <span className='name'>李云祥</span>
                                    <span className='tel'>15022581580</span>
                                </div>
                                <div className='adressMsg'>
                                    <div className='bgc'>
                                        <span className='state'>默认</span>
                                    </div>
                                    <span className='location'>北京市昌平区北京科技职业学院</span>
                                </div>
                            </div>
                            <div className='edit'>
                                <p>编辑</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='msgBox'>
                            <div className='title'>
                                <p>李云祥</p>
                            </div>
                            <div className='msg'>
                                <div className='userMsg'>
                                    <span className='name'>李云祥</span>
                                    <span className='tel'>15022581580</span>
                                </div>
                                <div className='adressMsg'>
                                    <div className='bgc'>
                                        <span className='state'>默认</span>
                                    </div>
                                    <span className='location'>北京市昌平区北京科技职业学院</span>
                                </div>
                            </div>
                            <div className='edit'>
                                <p>编辑</p>
                            </div>
                        </div>
                    </li>
                    {/* {

                    } */}
                </ul>
            </AddressStyled>
        )
    }
}

export default Address