const http = require("http");
const fs = require("fs");
// the big file will not be pushed to git, has to be created with #15
http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
