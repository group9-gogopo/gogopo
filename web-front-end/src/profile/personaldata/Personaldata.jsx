
import React ,{useHistory,useEffect, useState}from 'react'
import { PersonalDataStyled } from './PersonalDataStyled'

import { get } from "@u/http";

const PersonalData = (props) => {
  let [userDetail, setUserDetail] = useState(null);
  useEffect(() => {
    let userID = 1;
    (async () => {
      let result = await get("http://localhost:4400/api/userinfoone", {
        id: userID,
      });
      setUserDetail(() => result.userInfoOne);
    })();
  }, []);

  return userDetail? (
    <PersonalDataStyled>
      <header>个人资料 </header>
      <ul>
        <li>
          <span className="spanLeft">姓名:</span>
          <span>{userDetail.username}</span>
        </li>
        <li>
          <span className="spanLeft"> 手机：</span>
          <span>{userDetail.tel}</span>
        </li>
        <li>
          <span className="spanLeft">常住地</span>
          <span>北京市昌平区</span>
        </li>
        <li>
          <span className="spanLeft"> 邮箱：</span>
          <span>{userDetail.email}</span>
        </li>
        <li>
          <span className="spanLeft">职业</span>
          <span>学生</span>
        </li>
      </ul>
    </PersonalDataStyled>
  ) : (
    ""
  );
};

export default PersonalData;
