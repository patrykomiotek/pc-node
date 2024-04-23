import fs from "fs";

const inputFilePath = `${process.cwd()}/src/streams/data/input-data.txt`;

// TODO: implement
const readableStream = fs.createReadStream(inputFilePath);
// const readableStream = fs.createReadStream(inputFilePath, "utf8");

readableStream.on("data", (chunk) => {
  console.log("\n\nchunk: ");
  console.log(chunk);
  // console.log(chunk.toString());
});
