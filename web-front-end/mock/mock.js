module.exports = function() {
  return {
    goods:require('./goods.json'),
    users:require('./users.json'),
    discount: require('./discount-list.json'),
    special: require('./special-list.json'),
    address:require('./address.json')
  }
}