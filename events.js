const EventEmitter = require("events");
const http = require("http");

class sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stocks`);
});

myEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request recived");
  res.end("request recived");
});

server.on("request", (req, res) => {
  console.log("Another request recived");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on 8000");
});
