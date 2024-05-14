const fs = require("fs");

// Function to write content to a file
function writeFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log(`Content has been written to ${filename} successfully.`);
  });
}

// Example content to write to the file
const content =
  "Hello, this is some content that I'm writing to a file asynchronously!";

// Replace 'output.txt' with the path where you want to write the file
writeFile("a.txt", "I am a 3rd year undergrad");
