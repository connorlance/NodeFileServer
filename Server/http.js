const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(__dirname, "../Client/index.html");
    fs.readFile(filePath, (err, contents) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      console.log("File sent to client: " + filePath);
      res.end(contents);
    });
  } else {
    const resourcePath = path.join(__dirname, "../Client", req.url);
    fs.readFile(resourcePath, (err, contents) => {
      if (err) {
        res.writeHead(404);
        res.end("Resource not found");
        return;
      }
      let contentType = "text/plain";
      if (req.url.endsWith(".html")) {
        contentType = "text/html";
      } else if (req.url.endsWith(".css")) {
        contentType = "text/css";
      } else if (req.url.endsWith(".js")) {
        contentType = "text/javascript";
      }
      res.setHeader("Content-Type", contentType);
      res.writeHead(200);
      console.log(`File sent to client: ${req.url}`);
      res.end(contents);
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
