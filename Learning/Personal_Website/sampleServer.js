var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url,true);

    if (q.pathname === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signup") {
      fs.readFile("signup.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signupaction") {
      fs.readFile("signupaction.html", function (err, data) {
        res.write("Signup Successful");
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Page Not Found");
      res.end();
    }
  })
  .listen(8080, function () {
    console.log("Server is running on port 8080");
  });
