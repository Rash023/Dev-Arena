const fs = require("fs");

function expensiveOperation(data) {
  // Simulate an expensive operation by looping a large number of times
  for (let i = 0; i < 1000000000; i++) {
    // Do something that consumes CPU cycles
    console.log(data);
  }
}
fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File Contents:");
  console.log(data);

  // Simulate an expensive operation
  console.log("Performing expensive operation...");
  expensiveOperation(data);

  console.log("Expensive operation complete.");
});
