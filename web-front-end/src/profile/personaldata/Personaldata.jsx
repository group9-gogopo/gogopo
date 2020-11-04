import React,{ Component } from 'react'

// import { connect } from 'react-redux'
import { PersonalDataStyled } from './PersonalDataStyled'

class PersonalData extends Component{
    render(){
        return(
            <PersonalDataStyled>
                <header>个人资料</header>
                <ul>
                    <li>
                        姓名
                        <input type="text"/>
                        <span>修改姓名</span>
                    </li>
                    <li>
                        身份认证
                        <span>412827272727271171</span>
                        <span>点击申请身份认证</span>
                    </li>
                    <li>
                        性别
                        <span>男</span>
                    </li>
                    <li>
                        常住地
                        <span>北京市昌平区</span>
                    </li>
                    <li>
                        生日
                        <span>19980217</span>
                    </li>
                    <li>
                        邮箱
                        <span>1107181671@qq.com</span>
                    </li>
                    <li>
                        职业
                        <span>学生</span>
                    </li>
                </ul>
            </PersonalDataStyled>
        )
    }
}

export default PersonalData