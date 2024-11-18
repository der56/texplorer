import express from "express";
import path from "path";
import { __dirname } from "../index.js";
import fs from "fs";

export const router = express.Router();

// folders section
router.get("/viewFolders", (_req, res) => {
  fs.readdir(path.join(__dirname + "/directories"), (err, files) => {
    if (err) {
      console.log(err);
    } else if (files.length === 0) {
      res.sendStatus(201);
    } else {
      res.json({ files: files });
    }
  });
});

router.post("/createFolder", (req, res) => {
  const read = fs.readdirSync(__dirname + "/directories");
  if (read.includes(req.body)) {
    return res.sendStatus(400);
  }
  fs.mkdir(path.join(__dirname + "/directories", req.body), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
    res.send("directory created successfully!");
  });
});

// folders section end

// files section

router.post("/createFile", (req, res) => {
  const read = fs.readdirSync(__dirname + "/directories");
  if (req.body.includes("../")) {
    // anti traversal path directory
    res.sendStatus(400);
  } else if (read.includes(req.body)) {
    res.sendStatus(400);
  } else {
    fs.writeFile(
      path.join(__dirname + `/directories/${req.body}`),
      "some text",
      (err) => {
        if (err) {
          return console.error(err);
        }
        console.log("File created successfully!");
        res.send("File created successfully!");
      }
    );
  }
});

// files section end
