const EventEmmiter = require('events')

// create Class
class MyEmmiter extends EventEmmiter {
    // 
}

// init object
const myEmmiter = new MyEmmiter();
myEmmiter.on('event', () => console.log('Event Fired!'))

myEmmiter.emit('event')