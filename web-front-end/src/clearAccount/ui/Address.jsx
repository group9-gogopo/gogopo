import React, { useState, useEffect } from 'react'
import Modal from '@c/modal/Modal'
import { AddressD } from './StyleAccount'
import { useDispatch, useSelector } from 'react-redux'
import { changeShow, loadDataAsync,  pasData } from '../actionCreator'
const Address = (props) => {
    const list = useSelector((state) => state.clearAccount.list)
    const isShow = useSelector((state) => state.clearAccount.isShow)


    const dispatch = useDispatch()

    const addClose = () => {

        dispatch(changeShow(true))
    }
    useEffect(() => {
        let userid = 1001
        dispatch(loadDataAsync(userid))
    }, [dispatch])
    function handlerClick(value){
        return()=>{
            dispatch(pasData(value))
        }
    }
    return (
        <AddressD>
            <div className='addressHead'>
                <span className='receiving'>确认收货地址</span>
            </div>
            <div className='addressbody'>
                <ul>{
                        list.length>0 && list.map((value) => {
                            return(
                                <li key={value.id} >
                                    <input className='check' type="radio" name='mazhao' onClick={handlerClick(value)}/>
                                    <p className='address'>{value.location}</p>
                                    <span className='name'>{value.name}</span>
                                    <span className='phoneNum'>{value.tel}</span>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                <button className='newAd' onClick={addClose}><span>+</span>使用新地址</button>
                {
                    isShow ? (<Modal ></Modal>) : ""
                }
            </div>
        </AddressD>
    )
}
export default Address
