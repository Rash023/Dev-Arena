function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

function wait1(t) {
  return delay(t);
}

function wait2(t) {
  return delay(t);
}

function wait3(t) {
  return delay(t);
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  const promise1 = wait1(t1);
  const promise2 = wait2(t2);
  const promise3 = wait3(t3);

  return Promise.all([promise1, promise2, promise3]).then(() => {
    const endTime = Date.now();
    return endTime - startTime;
  });
}

module.exports = calculateTime;
