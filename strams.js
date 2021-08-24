const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1 - will not work well because it stores a big data file into a variable.
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //
  //Solution 2: Streams - the problem: reading is faster then writing
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });
  //
  //Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "localhost", () => {
  console.log("Listening on port 8000");
});
