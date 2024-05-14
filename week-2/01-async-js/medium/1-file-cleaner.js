const fs = require("fs");

// Function to clean extra spaces from a string
function cleanString(input) {
  // Use regular expression to replace multiple spaces with a single space
  return input.replace(/\s+/g, " ").trim();
}

// Function to read a file, clean its content, and write it back to the same file
function cleanFile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Clean the content of the file
    const cleanedContent = cleanString(data);

    // Write the cleaned content back to the same file
    fs.writeFile(filename, cleanedContent, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log(
        `Content has been cleaned and written back to ${filename} successfully.`
      );
    });
  });
}

// Replace 'input.txt' with the path to your file
cleanFile("a.txt");
