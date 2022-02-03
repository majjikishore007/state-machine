import express from "express";
import { toggleMachine, lightMachine } from "./state.js";
import { actions, interpret } from "xstate";
import { createMachine, assign } from "xstate";
const app = express();

const enterDetails = assign({
  details: (context, event) => {
    console.log("giving test");
    context.details.name = "majji";
    context.details.password = "majji";
  },
});
const giveTest = assign({
  details: (context, event) => {
    context.details.marks = 70;
  },
});
const check = (context, event) => {
  return context.marks >= 50;
};
const studentMachine = createMachine(
  {
    id: "student",
    initial: "idle",
    context: {
      details: {
        name: "",
        password: "",
        marks: 0,
      },
    },
    states: {
      idle: {
        on: {
          KEY_GEN: {
            target: "enrolmentKeyGenerated",
            actions: [enterDetails],
          },
        },
      },
      enrolmentKeyGenerated: {
        on: {
          ENTER_DETAILS: {
            target: "basicDetailsEntered",
            actions: [giveTest],
          },
        },
      },
      basicDetailsEntered: {
        always: {
          target: "pendingEnglishInterview",
          cond: check,
        },
        on: {
          INTERVIEW: {
            target: "testFailed",
          },
        },
      },
      pendingEnglishInterview: {},
      testFailed: {
        on: {
          INTERVIEW: {
            target: "pendingEnglishInterview",
          },
        },
      },
    },
  },
  {
    actions: { enterDetails, giveTest },
    guards: { check },
  }
);

let initialState = "basicDetailsEntered";
let newstate = studentMachine.transition(initialState, "ENTER_DETAILS");

console.log("initialState: " + newstate.value);



const port = 8080 | process.env.port;

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
