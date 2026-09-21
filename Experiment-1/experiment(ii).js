const EventEmitter = require("events");

const element = new EventEmitter();

// Event listeners
element.on("click", () => {
    console.log("Button clicked!");
});

element.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

element.on("exit", () => {
    console.log("Exit event triggered!");
});

// Trigger events
element.emit("click");
element.emit("mouseover");
element.emit("exit");