
/**
 * Baidu Translate API English to Chinese has a more semantic interface
 */

import * as https from 'https';

const data = "kw=request";

const options = {
  hostname: "fanyi.baidu.com",
  port: 443,
  path: "/sug",
  method: "POST",
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
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

req.write(data);
req.end();
