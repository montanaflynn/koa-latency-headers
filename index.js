var onHeaders = require('on-headers')

module.exports = function(){

  // Return koa middleware
  return function *(next) {

    // Set request received header
    this.res.setHeader('x-request-received', new Date().getTime())

    // Define listener for when headers are sent
    onHeaders(this.res, function() {

      // Set response sent header
      this.setHeader('x-response-sent', new Date().getTime())
    })

    // Move on
    yield next
  }

}
