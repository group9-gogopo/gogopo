import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Personaldata from "./personaldata/Personaldata";
import Address from "./adress/Address";
import { ProfileStyled } from "./ProfileStyled";
import Footer from "@c/footer/Footer";
import { loadDataAsync,changeShow} from "./actionCreater";
import AddAddress from "@c/addAddress/AddAddress"
import { useHistory } from "react-router-dom";

const Profile = (props) => {
  let history=useHistory()
  let userid=sessionStorage.getItem("userId")
  if(!userid) history.push("/login")
  const list = useSelector((state) => state.profile.list);
  const addShow = useSelector((state) => state.profile.addShow);
  const dispatch = useDispatch();

  const addClose=()=>{
    dispatch(changeShow(0))
  }
  useEffect(() => {
    dispatch(loadDataAsync(userid));
  }, [dispatch]);
  return (
    <>
      <ProfileStyled addShow={addShow}>
        <Personaldata></Personaldata>
        <Address list={list}></Address>
      </ProfileStyled>
      {addShow===0?"":<AddAddress addClose={addClose} addShowID={addShow}></AddAddress>}
      <Footer></Footer>
    </>
  );
};

export default Profile;
