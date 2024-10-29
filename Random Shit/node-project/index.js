const fs = require("fs");
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Read the file asynchronously
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
      // Handle error if file reading fails
      res.statusCode = 500; // Internal Server Error
      res.setHeader("Content-Type", "text/plain");
      res.end("Error reading file.");
      console.error("Error reading file:", err);
      return;
    }

    // Send the file contents in the response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(data); // Send the file content as the response
  });
});

// Define the port and host
const port = 8000;
const host = "127.0.0.1";

// Listen on the specified port and host
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
