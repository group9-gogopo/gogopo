//验证用户名
const regUserName = (id, state) => {
  return () => {
    let elem = document.getElementById(id)

    const reg = /^[\u4E00-\u9FA5]{2,4}$/;

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
const regTel = (id, state) => {
  return () =>{
    let elem = document.getElementById(id)
    
    let reg = /^1[0-9]{10}$/;
    
    if(elem){
      switch (reg.test(state)){
        case true:
          elem.innerHTML = '手机号正确';
          elem.style = 'color: green';
        break;
        default:
          elem.innerHTML = '请正确输入手机号';
          elem.style = 'color: red'
      }
    }
  }
}

//验证邮箱
const regEmail = (id, state) => {
  return () => {
    let elem = document.getElementById(id)

    let reg = /^[0-9a-zA-Z]\w{5,11}@(qq|163)\.(com|cn)$/;

    if(elem){
      switch (reg.test(state)){
        case true:
          elem.innerHTML = '邮箱格式正确';
          elem.style = 'color: green';
        break;
        default:
          elem.innerHTML = '请输入正确的邮箱';
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
  regEmail,
  regPwd,
  regRePwd
}