import { createMachine } from "xstate";

const fun = createMachine({
  id: "idle",
  states: {
    idle: {
      on: {
        SUBMIT: "loading",
      },
    },
    loading: {
      on: {
        PAYMENT_RECIVED: "success",
        PAYMENT_FAILED: "error",
      },
    },
    error: {
      on: {
        SUBMIT: "loading",
      },
    },
    success: {
      type: "final",
    },
  },
});
