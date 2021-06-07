import fs from "fs";
import express from "express";

console.log(fs.readFileSync("./README.md", "utf-8"));

const app = express();

// Serve app production bundle
app.use(express.static("dist/app"));
