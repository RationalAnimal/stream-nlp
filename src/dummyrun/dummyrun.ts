import { generate } from "..";

console.log("--------------------------------------");
let generateResult: string = generate(
  {
    customSlotTypes: [],
    builtInIntents: [],
    builtInSlots: []
  },
  []
);
console.log("generate result: " + generateResult);
console.log("--------------------------------------");
