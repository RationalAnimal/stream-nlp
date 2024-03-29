/*
@author Ilya Shubentsov

MIT License

Copyright (c) 2017 Ilya Shubentsov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import { IfcConfig } from "../types/config/IfcConfig";
import { IfcInteractions } from "../types/config/IfcInteraction";
import { IfcRecognizer } from "./IfcRecognizer";
export function generate(config: IfcConfig, interactions: IfcInteractions[]): string {
  // First make sure that we have a config object:
  if(! config) {
    throw {error: {message: "generate: config parameter must be present"}};
  }
  // TODO Extend the built in slot values with values from config

  let recognizer: IfcRecognizer = {...config};

  // Process all custom slot types' regexes
  generateCustomSlotTypeMatchRegExes(recognizer);
  generateCustomSlotTypeSounexMatchRegExes(recognizer);

  // Parse utterances - not needed any more now that JSON file is used instead of string utterances
  



  return JSON.stringify({error: {message: "generate function is not yet implemented"}, config, interactions}, null, 2);
}

function generateCustomSlotTypeMatchRegExes(recognizer: IfcRecognizer) {
  // TODO - implement this
}

function generateCustomSlotTypeSounexMatchRegExes(recognizer: IfcRecognizer) {
  // TODO - implement this
}