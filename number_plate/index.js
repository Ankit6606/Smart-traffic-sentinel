
import fetch from "node-fetch"
import FormData from "form-data";
import fs from "fs";
import express from "express";

let image_path = "path/car.jpg";
let body = new FormData();
body.append("upload", fs.createReadStream(image_path));
// Or body.append('upload', base64Image);
body.append("regions", "us-ca"); // Change to your country
fetch("https://api.platerecognizer.com/v1/plate-reader/", {
  method: "POST",
  headers: {
    Authorization: "Token 2383dad55d9dd44399b29bd6486667a06f013847",
  },
  body: body,
})
  .then((res) => res.json())
  .then((json) => {const data = json.results[0].plate;
                    console.log(data);})
  .catch((err) => {
    console.log(err);
  });