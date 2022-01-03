module.exports = class UnahthorizedError extends Error {
  constructor (paramName) {
    super('Unahthorized')
    this.name = 'MisssingParamError'
  }
}
