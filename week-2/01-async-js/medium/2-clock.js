setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  const format = "AM";
  if (hour > 12) {
    hour = hour - 12;
    format = "PM";
  }
  console.log(`${hour}:${mins}:${secs} ${format}`);
}, 1000);
