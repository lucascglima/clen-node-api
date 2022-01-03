const validator = require('validator')
class EmailValidator {
  isValid(email) {
    return validator.isEmail(email)
  }
}
describe("Email Validator", () => {
  test('Should return true if validator return true', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@gmail.com')
    expect(isEmailValid).toBe(true)
  })
  test('Should return false if validator return false', () => {
    // Validator mocks recebe valor true default
    // para testar a é enviado o valor de false
    validator.isEmailValid = false
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('invalid_email@gmail.com')
    expect(isEmailValid).toBe(false)
  })
})