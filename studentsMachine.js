import { createMachine } from "xstate";

const studentMachine = createMachine({
  id: "student",
  initial: "enrolmentKeyGenerated",

  states: {
    enrolmentKeyGenerated: {
      on: {
        basicDetailsEntered: "basicDetailsEntered",
      },
    },
    basicDetailsEntered: {
      on: {
        pendingEnglishInterview: "pendingEnglishInterview",
        testFailed: "testFailed",
      },
    },
    testFailed: {
      on: {
        enrolmentKeyGenerated: "enrolmentKeyGenerated",
      },
    },
    pendingEnglishInterview: {
      on: {
        englishInterviewFail: "englishInterviewFail",
        pendingAlgebraInterview: "pendingAlgebraInterview",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    englishInterviewFail: {
      on: {
        pendingEnglishInterview: "pendingEnglishInterview",
      },
    },
    pendingAlgebraInterview: {
      on: {
        algebraInterviewFail: "algebraInterviewFail",
        pendingCultureFitInterview: "pendingCultureFitInterview",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    algebraInterviewFail: {
      on: {
        pendingAlgebraInterview: "pendingAlgebraInterview",
      },
    },
    pendingCultureFitInterview: {
      on: {
        selectedAndJoiningAwaited: "selectedAndJoiningAwaited",
        cultureFitInterviewFail: "cultureFitInterviewFail",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    cultureFitInterviewFail: {
      on: {
        pendingCultureFitInterview: "pendingCultureFitInterview",
      },
    },
    selectedAndJoiningAwaited: {
      on: {
        offerLetterSent: "offerLetterSent",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    offerLetterSent: {
      on: {
        pendingTravelPlanning: "pendingTravelPlanning",
        finalisedTravelPlans: "finalisedTravelPlans",
        finallyJoined: "finallyJoined",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    pendingTravelPlanning: {
      on: {
        finalisedTravelPlans: "finalisedTravelPlans",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    finalisedTravelPlans: {
      on: {
        finallyJoined: "finallyJoined",
        becameDisIntersested: "becameDisIntersested",
      },
    },
    becameDisIntersested: {
      type: "final",
    },

    finallyJoined: {},
  },
});
