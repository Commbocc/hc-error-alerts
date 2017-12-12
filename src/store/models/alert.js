export default class Alert {
  constructor (error) {
    this.id = Date.now()
    this.error = error
    this.message = this.error.message
  }
}
