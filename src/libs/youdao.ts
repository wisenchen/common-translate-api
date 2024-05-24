import * as https from "https";

const options = {
  hostname: "dict.youdao.com",
  port: 443,
  path: "/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=hello",
  method: "GET",
  headers: {
    Accept: "application/json, text/plain, */*",
  },
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const result = JSON.parse(data);
    console.log(result.data);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
