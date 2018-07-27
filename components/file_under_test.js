const { add5 } = require('./utils')

const someMethod = async () => {
  let n = 11
  let otherMethodRes = await otherMethod(n)
  let add5res = await add5(otherMethodRes)
  console.log(`otherMethod res ${otherMethodRes}`)
  console.log(`add5 res ${add5res}`)
  return add5res
}

const otherMethod = async (n) => {
  return n ** 2
}

module.exports = {
  otherMethod: otherMethod,
  someMethod: someMethod
}