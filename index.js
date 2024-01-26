const adddays = require('date-fns/addDays')

const afterxdays = val => {
  let newdate = adddays(new Date(2022, 7, 22), val)
  return `${newdate.getDate()}-${ newdate.getMonth() + 1}-${newdate.getFullYear()}`
}
afterxdays(2)
module.exports = afterxdays

