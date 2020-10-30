//验证用户名
const regUserName = (id, state) => {
  return () => {
    let elem = document.getElementById(id)

    const reg = /^[A-Z]{1}[A-Za-z]{5,19}$/;

    if(elem){
      switch (reg.test(state)){
        case true:
          elem.innerHTML = '用户名格式正确';
          elem.style = 'color: green';
        break;
        default:
          elem.innerHTML = '用户名格式错误';
          elem.style = 'color: red'
      }
    }
  }
}
//验证手机号
const regTel = (id1,id2, state) => {
  return () =>{
    let elem1 = document.getElementById(id1)
    let elem2 = document.getElementById(id2)
    
    let reg = /^1[0-9]{10}$/;
    
    if(elem1 && elem2){
      switch (reg.test(state)){
        case true:
          elem2.style = 'visibility: visible';
          elem1.style = 'visibility: hidden';
        break;
        default :
          elem1.innerHTML = '请正确输入手机号';
          elem1.style = 'color: red';
          elem2.style = 'visibility: hidden';
      }
    }
  }
}

//验证短信动态码
const regCode = (id, state) => {
  return () => {
    let elem = document.getElementById(id)

    let reg = /^[0-9]{6}$/;

    if(elem){
      switch (reg.test(state)){
        case true:
          elem.innerHTML = '动态码正确';
          elem.style = 'color: green';
        break;
        default:
          elem.innerHTML = '请输入正确的动态码';
          elem.style = 'color: red'
      }
    }
  }
}

//验证密码
const regPwd = (id, state) => {
  return () => {
    let elem = document.getElementById(id)

    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

    if(elem){
      switch (reg.test(state)){
        case true:
          elem.innerHTML = '密码格式正确';
          elem.style = 'color: green';
        break;
        default:
          elem.innerHTML = '请输入8-16位字母与数字';
          elem.style = 'color: red'
      }
    }
  }
}


//验证重复输入密码
const regRePwd = (state1,state2,id) => {
  return () => {
    const elem = document.getElementById(id)
      if(state1 === state2) {
        elem.innerHTML = '密码确认成功';
        elem.style = 'color: green';
      } else {
        elem.innerHTML = '两次密码输入不一致';
        elem.style = 'color: red';
      }
  }
}

export {
  regUserName,
  regTel,
  regCode,
  regPwd,
  regRePwd
}