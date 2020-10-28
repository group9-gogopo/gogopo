import React, { Component } from 'react'
import { AddressStyled } from './AddressStyled'
import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreator'


@connect(
    state=>{
        return{
            data:state.profile.adressMsg
        }
    },
    dispatch=>({
        // 把loadData放在了props中
        loadData(){
            //这里loadDataAsync返回的是一个函数，
            // （执行的话可能会异步挂掉，观点可能错误）可能是无法执行，所以在store/index中引入thunk
            //引入了中间件，就不怕函数不能运行了
            dispatch(loadDataAsync)
        }
    })
)
class Address extends Component {
    state = {
        data: [{
            adressId:1,
            name: '李云祥',
            tel: '15022581580',
            state: '默认',
            location: '北京市 昌平区 北京科技职业学院'
        },
        {
            adressId:2,
            name: '李腾飞',
            tel: '15022587784',
            state: '默认',
            location: '北京市 昌平区 北京科技职业学院'
        },
        {
            adressId:3,
            name: '檀旭',
            tel: '15022584567',
            state: '默认',
            location: '北京市 昌平区 北京科技职业学院'
        }
        ]
    }

    componentDidMount(){
        this.props.loadData()
    }

    handleClick=(id)=>{
        return ()=>{
            console.log(id);
        }
    }
    render() {
        return (
            <AddressStyled>
                <header>地址管理</header>
                <ul>
                    {
                        this.state.data.map((value) => {
                            return (
                                <li key={value.adressId}>
                                    <div className='msgBox'>
                                        <div className='title'>
                                            <p>{value.name}</p>
                                        </div>
                                        <div className='msg'>
                                            <div className='userMsg'>
                                                <span className='name'>{value.name}</span>
                                                <span className='tel'>{value.tel}</span>
                                            </div>
                                            <div className='adressMsg'>
                                                <div className='bgc'>
                                                    <span className='state'>{value.state}</span>
                                                </div>
                                                <span className='location'>{value.location}</span>
                                            </div>
                                        </div>
                                        <div className='edit'>
                                            <p onClick={this.handleClick(value.adressId)}>编辑</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </AddressStyled>
        )
    }
}

export default Address