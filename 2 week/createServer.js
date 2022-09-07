const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>Hello ServerPart</h1>");
    res.end("<p>Server Love</p>");
  })
  .listen(8080, () => {
    console.log("8080 포트에서 서버 대기 중입니다!");
  });
