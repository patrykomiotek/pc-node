import fs from "fs";
import http from "http";

const inputFilePath = `${process.cwd()}/src/streams/data/input-data.txt`;

// TODO: implement
const server = http.createServer((request, response) => {
  console.log("New request: ", request);
  response.writeHead(200, { "Content-Type": "text/plain" });

  const readableStream = fs.createReadStream(inputFilePath);
  readableStream.pipe(response);
});

const PORT = 3006;

server.listen(PORT, "127.0.0.1");
console.log(`Server is listening on ${PORT}`);
