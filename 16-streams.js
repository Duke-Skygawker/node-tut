const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });

// stream breaks up big files into chunks, making them easier to handle
// default chunk size = 64KB || last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt", {highWaterMark: 90000})
// const stream = createReadStream("./content/big.txt", {encoding: "utf8"})
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
