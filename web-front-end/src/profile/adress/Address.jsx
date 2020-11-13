import React, { useCallback } from "react";
import { AddressStyled } from "./AddressStyled";
import { useDispatch ,useSelector} from "react-redux";
import { changeShow } from "../actionCreater";
const Address = (props) => {
  const addShow=useSelector((state)=>state.profile.addShow)
  const dispatch = useDispatch();
  const handlerClick = useCallback(
    (id) => {
      return () => {
        dispatch(changeShow(id));
      };
    },
    [dispatch]
  );
  return (
   
    <AddressStyled>
      <header>地址管理</header>
      <ul>
        {props.list && 
          props.list.map((value) => {
            return (
              <li key={value.id}>
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
                      {value.state==="true" ? (
                        <div className="activeBgc">
                          <span className="state">默认</span>
                        </div>
                      ) : (
                        <div className="bgc">
                          <span className="state">普通</span>
                        </div>
                      )}
                      <span className="location">{value.location}</span>
                    </div>
                  </div>
                  <div className="edit">
                    <p onClick={handlerClick(value.id)}>编辑</p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </AddressStyled>
  );
};

export default Address;
