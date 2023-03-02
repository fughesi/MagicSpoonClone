import express from "express";
import fs from "fs";
import { URL } from "url";

const imgPath = new URL("..", import.meta.url).pathname;

fs.readFile(imgPath, (err, content) => {
  if (err) {
    return;
  }
});
