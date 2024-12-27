const http = require("http");
const path = require("path");
const fs = require("fs");
// http : web server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const indexPath = path.resolve("content", "index.html");
    const data = fs.readFileSync(indexPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } else if (req.url === "/about") {
    const aboutPath = path.resolve("content", "about.html");
    const data = fs.readFileSync(aboutPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } else if (req.url === "/contact") {
    const contactPath = path.resolve("content", "contact.html");
    const data = fs.readFileSync(contactPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } else if (req.url === "/style.css") {
    const cssPath = path.resolve("content", "style.css");
    const data = fs.readFileSync(cssPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } else if (req.url === "/images/img.jpg") {
    const imgPath = path.resolve("content", "images", "img.jpg");
    //   static files
    const data = fs.readFileSync(imgPath);
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(data);
    res.end();
  } else if (req.url === "/send-form") {
    res.write("form sent");
    res.end();
  }
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is up and running on port 5000");
});
// http://localhost:5000 => https://www.mywebsite.com
