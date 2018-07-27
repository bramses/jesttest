const file = require('./file_under_test')
const utils = require('./utils')

describe('b test', () => {
  test('should return 126', async () => {
    utils.add5 = jest.fn() // set utils add5 to a mock
    utils.add5.mockReturnValue(Promise.resolve(700))
    file.otherMethod = jest.fn() // set file otherMethod to mock
    file.otherMethod.mockReturnValue(Promise.resolve(50))

    console.log(utils)
    console.log(file)

    const res = await file.someMethod()
    console.log(res)
    expect(res).toBe(700)
  })
})