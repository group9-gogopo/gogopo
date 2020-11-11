const addCurrent = (current) => {
  return {
    type: 'addCurrent',
    current: current + 1,
  }
}

const reduceCurrent = (current) => {
  return {
    type: 'reduceCurrent',
    current: current - 1,
  }
}

const zeroCurrent = (current) => {
  return {
    type: 'zeroCurrent',
    current: 0,
  }
}

const storeUserid = (userid) => {
  return {
    type: 'storeUserid',
    userid
  }
}

export default {
  addCurrent,
  reduceCurrent,
  zeroCurrent,
  storeUserid
}