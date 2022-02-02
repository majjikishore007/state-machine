import express from "express";
import { toggleMachine, lightMachine } from "./state.js";
import { interpret } from "xstate";
import { createMachine } from "xstate";
const app = express();

//creting a machine
/**
 * ENROLLMENT KEY GENERATED

BASIC DETAILS ENTERED

TEST FAILED (OR) ENGLIS INTERVIEW PENDING

 ENGLISH INTERVIEW FAILED (OR) ALGEBRA INTERVIEW PENDING

ALGEBRA INTERVIEW FAILED (OR) CULTURE INTERVIEW PENDING

CULTURE INTERVIEW FAILED OR SELECTED AND JOINED AWAITED

OFFER LETTER SENT 
pending parents conversation(optional)

pending travel plans(optional)

finalized travel plans(optional)
  
joined
 */
const machine = createMachine({
  id: "student",
  initial: "idle",
  states: {
    idle: {
      on: {
        SUBMIT:"enrolmentKeyGenerated"
      },
    },
    enrolmentKeyGenerated: {
      on: {
        SUBMIT: "basicDetailsEntered"
      },
    },
    basicDetailsEntered: {
      on: {
        SUBMIT: "pendingEnglishInterview"
      },
    },
    pendingEnglishInterview: {
      on: {
        SUBMIT: "pendingAlgebraInterview"
      },
    }, pendingAlgebraInterview: {
      on: {
        SUBMIT: "pendingCultureFitInterview"
      },
    }, pendingCultureFitInterview: {
      on: {
        SUBMIT: "pendingCultureFitReinterview"
      },
    }, pendingCultureFitReinterview: {
      on: {
        SUBMIT:"finallyJoined"
      }, 
    },
    finallyJoined: {
   type: 'final'
 }
  },
});
const tooglemac = interpret(machine)
  .onTransition((state) => console.log(state.value))
  .start();


let currentState = machine.initialState;
console.log("Intial state: " + currentState.value);
let newsate = machine.transition(currentState, "SUBMIT").value


console.log("new State value::::::\n",newsate);





const port = 8080 | process.env.port;

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
