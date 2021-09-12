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
import { IfcInteraction, IfcUtterance } from "../types/config/IfcInteraction";
import { IfcConfigCustomSlotType } from "../types/config/IfcConfig";
import { convertCustomSlotValuesToStringArray } from "../utils/utils";

/**
 * Call this function to generate regex strings for a particular utterance
 * this used to be _addRegExps in parseutterance.js in vui-ad-hoc-alexa-recognizer
 * @param interaction 
 * @returns 
 */
export function getUtteranceRegEx(utterance: IfcUtterance, interactions: IfcInteraction[]): string[] {
  let wildcardReplacementString = "((?:\\w|\\s|[0-9,_']|-)+)";
  let regExStrings: string[] = [];
  let regExString: string = "";
  let parts = utterance?.parts;
  if(! parts) {
    throw {error: {message: "createInteractionRegEx: utterance must have at least one part"}}
  }
  // TODO Add multistage, but not yet
  // Finally add the full match - final stage
  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    if(typeof part === "string") {
      regExString += part
    }
  }

  regExString = reconstructRegExWithWhiteSpaces(regExString, true);
  regExStrings.push(regExString);
  return regExStrings;
}

export function getStringArrayRegEx(arrayToUse: string[]): string {
  let returnValue = "((?:";
  let appendBar = false;
  for(let i = 0; i < arrayToUse.length; i++){
    if(appendBar){
      returnValue += "|";
    }
    else {
      appendBar = true;
    }
    returnValue += "" + arrayToUse[i] + "\\s*";
  }
  returnValue += ")+)";
  return returnValue;
}

export function getCustomSlotRegEx(customSlot: IfcConfigCustomSlotType): string {
  let stringArray = convertCustomSlotValuesToStringArray(customSlot);
  return getStringArrayRegEx(stringArray);
}

export function reconstructRegExWithWhiteSpaces(regExpString: string, includeOptionalPunctuationAtEnd: boolean){
  // Now split regExString into non-white space parts and reconstruct the
  // whole thing with any sequence of white spaces replaced with a white space
  // reg exp.
  let splitRegExp = regExpString.split(/\s+/);
  let reconstructedRegExp = "^\\s*";
  let allowZeroWhitespaces = false;
  for(let j = 0; j < splitRegExp.length; j++){
    if(splitRegExp[j].length > 0){
      if(j > 0 && splitRegExp[j].endsWith("{0,1}")){
        reconstructedRegExp += "\\s*";
        allowZeroWhitespaces = true;
      }
      else if (allowZeroWhitespaces){
        allowZeroWhitespaces = false;
        reconstructedRegExp += "\\s*";
      }
      else if(j > 0){
        reconstructedRegExp += "\\s+";
      }
      reconstructedRegExp += splitRegExp[j];
    }
  }
  if(includeOptionalPunctuationAtEnd){
    reconstructedRegExp += "\\s*[.?!]?\\s*$";
  }
  else {
    reconstructedRegExp += "\\s*$";
  }
  
  return reconstructedRegExp;
};
  