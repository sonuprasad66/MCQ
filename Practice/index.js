// Explain Promises
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num == "number") {
      resolve("Promise is Resolved");
    } else {
      reject("Promise is Rejected");
    }
  });
}
checkNumber(10)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
