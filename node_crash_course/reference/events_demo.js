// Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause `Function` objects ("listeners") to be called.
const EventEmitter = require('events');

// Create emitter class (event object blueprint)
class MyEmitter extends EventEmitter {}

// Init object (create the event )
const myEmitter = new MyEmitter();

// Event listener (listen for the event)
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event (called the event)
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
