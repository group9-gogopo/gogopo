const changeLoginTab = (isLogin) => {
  return {
    type: 'changeLoginTab',
    isLogin: true,
  }
}

const storeUsername = (username) => {
  return {
    type: 'storeUsername',
    username ,
  }
} 

const storeId = (id) => {
  return {
    type: 'storeId',
    id ,
  }
}

export default{
  changeLoginTab,
  storeUsername,
  storeId
}