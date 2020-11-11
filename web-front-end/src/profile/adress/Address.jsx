import React, { useCallback } from "react";
import { AddressStyled } from "./AddressStyled";
import { useDispatch } from "react-redux"
import { changeShow } from "../actionCreater"
const Address =(props)=> {
  const dispatch=useDispatch()
  const handlerClick = useCallback((id) => {
    return () => {
      dispatch(changeShow(id))
    };
  },[dispatch])
    return (
      
        <AddressStyled>
          <header>地址管理</header>
          <ul>
            {props.list&&props.list.map((value) => {
              return (
                <li key={value.adressId}>
                  <div className="msgBox">
                    <div className="title">
                      <p>{value.name}</p>
                    </div>
                    <div className="msg">
                      <div className="userMsg">
                        <span className="name">{value.name}</span>
                        <span className="tel">{value.tel}</span>
                      </div>
                      <div className="adressMsg">
                        <div className="bgc">
                          <span className="state">{value.state}</span>
                        </div>
                        <span className="location">{value.location}</span>
                      </div>
                    </div>
                    <div className="edit">
                      <p onClick={handlerClick(value.adressId)}>编辑</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </AddressStyled>
       
    );
  
}

export default Address;
