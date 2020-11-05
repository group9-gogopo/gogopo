import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Personaldata from "./personaldata/Personaldata";
import Address from "./adress/Address";
import { ProfileStyled } from "./ProfileStyled";
import Footer from "@c/footer/Footer";
import { loadDataAsync } from "./actionCreater";

const Profile = (props) => {
  const list = useSelector((state) => state.profile.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataAsync());
  }, [dispatch]);
  return (
    <>
      <ProfileStyled>
        <Personaldata></Personaldata>
        <Address list={list}></Address>
      </ProfileStyled>
      <Footer></Footer>
    </>
  );
};

export default Profile;
