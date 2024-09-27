console.log("Hello");
const fs = require("fs");

// Write data synchronously
try {
  fs.writeFileSync(
    "Personal Projects/Random Test/example.txt",
    "Hello, World!"
  );
  console.log("File has been written successfully");
} catch (err) {
  console.error("Error writing to file", err);
}

console.log(`The full path of this file is:`);
