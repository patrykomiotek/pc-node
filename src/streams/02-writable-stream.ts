import fs from "fs";

const inputFilePath = `${process.cwd()}/src/streams/data/input-data.txt`;
const outputFilePath = `${process.cwd()}/src/streams/data/output-data.txt`;

// TODO: implement
const readableStream = fs.createReadStream(inputFilePath, "utf8");
const writableStream = fs.createWriteStream(outputFilePath);

readableStream.on("data", (chunk) => {
  console.log("\n\nchunk: ");
  console.log(chunk);
  // console.log(chunk.toString());
  writableStream.write(chunk);
});
