import express from "express";
import { toggleMachine, lightMachine } from "./state.js";
import { actions, interpret } from "xstate";
import { createMachine, assign } from "xstate";
const app = express();






const port = 8080 | process.env.port;

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
