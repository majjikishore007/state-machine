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
        pendingParentConversation:"pendingParentConversation",
        finalisedTravelPlans: "finalisedTravelPlans",
        finallyJoined: "finallyJoined",
        becameDisIntersested: "becameDisIntersested",
      },
    },pendingParentConversation:{
      on:{
        finalisedTravelPlans: "finalisedTravelPlans",
        pendingTravelPlanning: "pendingTravelPlanning",
        finallyJoined: "finallyJoined",
        becameDisIntersested: "becameDisIntersested",
      }
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

    finallyJoined: {
      on:{
        // "English & Quarantine":"English & Quarantine",
        M1:"M1",
      }
    },
    // "English & Quarantine":{
    //   on:{
    //     "Dry Run":"Dry Run",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Dry Run":{
    //   on:{
    //     "If - Else":"If - Else",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"If - Else":{
    //   on:{
    //     "Loops":"Loops",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Loops":{
    //   on:{
    //     "Lists":"Lists",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Lists":{
    //   on:{
    //     "Functions":"Functions",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Functions":{
    //   on:{
    //     "Python Complete":"Python Complete",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Python Complete":{
    //   on:{
    //     "Hangman, Requests & more":"Hangman, Requests & more",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Hangman, Requests & more":{
    //   on:{
    //     "Web Scraping": "Web Scraping",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // }, "Web Scraping":{
    //   on:{
    //     "Javascript / ES6": "Javascript / ES6",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // }, "Javascript / ES6":{
    //   on:{
    //     "NodeJS - Callbacks & Async":"NodeJS - Callbacks & Async",
    //     "React - HTML & CSS":"React - HTML & CSS",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },
    // "NodeJS - Callbacks & Async":{
    //   on:{
    //     "NodeJS - CRUD":"NodeJS - CRUD",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"NodeJS - CRUD":{
    //   on:{
    //     "NodeJS - MySQL/Knex/Joi":"NodeJS - MySQL/Knex/Joi",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"NodeJS - MySQL/Knex/Joi":{
    //   on:{
    //     "NodeJS: JWT":"NodeJS: JWT",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"NodeJS: JWT":{
    //   on:{
    //     "Project 1":"Project 1",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },
    // "React - HTML & CSS":{
    //   on:{
    //     "React - Bootstrap & Jquery":"React - Bootstrap & Jquery",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"React - Bootstrap & Jquery":{
    //   on:{
    //     "React - State, Props & Components":"React - State, Props & Components",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"React - State, Props & Components":{
    //   on:{
    //     "React - React Lifecycle": "React - React Lifecycle",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // }, "React - React Lifecycle":{
    //   on:{
    //     "Project 1":"Project 1",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Project 1":{
    //   on:{
    //     "Project 2":"Project 2",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Project 2":{
    //   on:{
    //     "Interview Preparation":"Interview Preparation",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Interview Preparation":{
    //   on:{
    //     "Job Search":"Job Search",
    //     droppedOut:"droppedOut",
    //     onLeave:"onLeave",
    //   }
    // },"Job Search":{
    //  on:{
    //   inJob: "inJob",
    //   droppedOut:"droppedOut",
    //   onLeave:"onLeave",
    //  }
    // },
    inJob:{
      on:{
        payingForward:"payingForward"
      }
    },payingForward:{
      on:{
        paidForward:"paidForward"
      }
    },paidForward:{
      type:"final"
    },onLeave:{},
    droppedOut:{
      type:"final"
    },
  
    //for backend team understanding 
    M1:{
      on:{
        M2:"M2",
        droppedOut:"droppedOut",
        onLeave:"onLeave",
      }
    },
  M2:{
      on:{
        M3:"M3",
        droppedOut:"droppedOut",
        onLeave:"onLeave",
      }
    },
  M3:{
    on:{
      M4:"M4",
      droppedOut:"droppedOut",
      onLeave:"onLeave",
    }
  }
  ,
M4:{
    on:{
      M5:"M5",
      droppedOut:"droppedOut",
      onLeave:"onLeave",
    }
  }
  ,
M5:{
    on:{
      M6:"M6",
      droppedOut:"droppedOut",
      onLeave:"onLeave",
    }
  }
  ,
M6:{
    on:{
      M7:"M7",
      droppedOut:"droppedOut",
      onLeave:"onLeave",
    }
  }
  ,
M7:{
    on:{
      M8:"M8",
      droppedOut:"droppedOut",
      onLeave:"onLeave",
    }
  }
  ,
M8:{
    on:{
      M9:"M9",
      droppedOut:"droppedOut",
      onLeave:"onLeave",
    }
  }
  ,
M9:{
  on:{
    M10:"M10",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M10:{
  on:{
    M11:"M11",
    M12:"M12",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M11:{
  on:{
    M13:"M13",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M13:{
  on:{
    M15:"M15",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M15:{
  on:{
    M17:"M17",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M17:{
  on:{
    M19:"M19",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M12:{
  on:{
    M14:"M14",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M14:{
  on:{
    M16:"M16",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M16:{
  on:{
    M18:"M18",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M18:{
  on:{
    M19:"M19",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M19:{
  on:{
    M20:"M20",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M20:{
  on:{
    M21:"M21",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M21:{
  on:{
    M22:"M22",
    droppedOut:"droppedOut",
    onLeave:"onLeave",
  }
},
M22:{
  on:{
   inJob: "inJob",
   droppedOut:"droppedOut",
   onLeave:"onLeave",
  }
}
}});
