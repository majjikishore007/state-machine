const enterDetails = assign({
  amount: (context, event) => context.details + 1,
});
const check = (context, event) => {
  console.log("validation for details", event);
  return context.details;
};

const machine = createMachine(
  {
    id: "student",
    initial: "idle",
    context: {
      details: "false",
    },
    states: {
      idle: {
        on: {
          SUBMIT: {
            target: "enrolmentKeyGenerated",
            actions: "enterDetails",
          },
        },
      },
      enrolmentKeyGenerated: {
        on: {
          SUBMIT: {
            target: "basicDetailsEntered",
            cond: "check",
          },
        },
      },
      basicDetailsEntered: {
        on: {
          SUBMIT: "pendingEnglishInterview",
        },
      },
      pendingEnglishInterview: {
        on: {
          SUBMIT: "pendingAlgebraInterview",
        },
      },
      pendingAlgebraInterview: {
        on: {
          SUBMIT: "pendingCultureFitInterview",
        },
      },
      pendingCultureFitInterview: {
        on: {
          SUBMIT: "pendingCultureFitReinterview",
        },
      },
      pendingCultureFitReinterview: {
        on: {
          SUBMIT: "finallyJoined",
        },
      },
      finallyJoined: {
        type: "final",
      },
    },
  },
  {
    actions: { enterDetails },
    guards: { check },
  }
);

let currentState = machine.initialState;
console.log("Intial state: " + currentState.value);

let newsate = machine.transition(currentState, "SUBMIT").value;

console.log("new State value::::::\n", newsate);
