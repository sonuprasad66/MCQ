const api = "post";

fetch(api)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

fetch(api, {
  method: "POST",
  body: JSON.stringify({ id: 1, name: sonu }),
  header: { contentType: "application/json" },
}).then((res) => {
  console.log(res);
});
