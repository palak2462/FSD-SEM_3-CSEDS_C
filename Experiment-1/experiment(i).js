const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on("greet", () => {
    console.log("Hello! Welcome to Node.js");
});

emitter.on("exit", () => {
    console.log("Exit event triggered");
});

emitter.emit("greet");
emitter.emit("exit");