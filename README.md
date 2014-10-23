# Koa Latency Header Middleware

This middleware adds two headers to the response.

- `x-request-received` is set by the server with the timestamp of when the request was received
- `x-response-sent` is set by the server with the timestamp of when the response was sent

[More information](https://github.com/montanaflynn/Latency-Headers-PoC) on why to add these headers.

## Example

```shell
npm install koa-latency-headers --save
```

```javascript
var koa = require('koa')
var app = koa()

// Latency Header Middleware
var latency = require('koa-latency-headers')
 
// Set the x-request-received header
app.use(latency())

// Send the response body
app.use(function *(next){

  // Simulate processing delay
  yield (function() {
    var timeout = Math.floor((Math.random() * 25) + 25);
    return function (cb) {
      setTimeout(cb, timeout)
    }
  })()

  // Obligatory hello world
  this.body = 'Hello World'
  
})

// Listen for incoming requests
app.listen(1337)

```
