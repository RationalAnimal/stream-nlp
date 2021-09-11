import { generate } from "..";

console.log("--------------------------------------");
let generateResult: string = generate({
  customSlotTypes: [],
  builtInIntents: [],
  builtInslots: []
});
console.log("generate result: " + generateResult);
console.log("--------------------------------------");
