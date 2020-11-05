import React, { Component } from "react";
import { AddressStyled } from "./AddressStyled";

class Address extends Component {
  handleClick = (id) => {
    return () => {
      console.log(id);
    };
  };
  render() {
    console.log("adress", this.props.list);
    return (
      <AddressStyled>
        <header>地址管理</header>
        <ul>
          {this.props.list.map((value) => {
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
                    <p onClick={this.handleClick(value.adressId)}>编辑</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </AddressStyled>
    );
  }
}

export default Address;
