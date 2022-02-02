import { createMachine } from "xstate";

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
export const toggleMachine = createMachine({
  id: "toggle", // indentify of our machine
  initial: "inactive", // the initial state of the machine
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
});
export const pedestrianStates = {
 
  initial: "walk",
  states: {
    walk: {
      on: {
        PED_TIMER: "wait",
      },
    },
    wait: {
      on: {
        PED_TIMER: "stop",
      },
    },
    stop: {},
  },
};
export const lightMachine = createMachine({
  id: "light",
  initial: "green",
  states: {
    green: {
      on: {
        TIMER: "yellow",
      },
    },
    yellow: {
      on: {
        TIMER: "red",
      },
    },
    red: {
      on: {
        TIMER: "green",
      },
      ...pedestrianStates,
    },
  },
});