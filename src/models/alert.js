export default class Alert {
  constructor (error, alertClass = 'alert-warning') {
    this.id = Date.now()
    // this.error = error
    this.message = error.message
    this.active = true
    this.alertClass = alertClass
  }
}
