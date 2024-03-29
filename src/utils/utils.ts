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
import { IfcConfigCustomSlotType } from "../types/config/IfcConfig";
export function isBuiltInSlotType(slotType: string): boolean {
  if(typeof slotType === "string" && slotType.startsWith("TRANSCEND.")) {
    return true;
  }
  return false;
}

export function getBuiltInSlotTypeSuffix(slotType: string): string {
  if(slotType !== "string") {
    throw ({error: {message: "getBuiltInSlotTypeSuffix must be a string"}});
  }
  return slotType.replace(/^TRANSCEND\./, "");
}

export function convertCustomSlotValuesToStringArray(customSlot: IfcConfigCustomSlotType): string[] {
  let returnValue: string[] = [];

  customSlot.values.forEach(value => {
    if(typeof value === 'string'){
      returnValue.push(value);
    } else {
      if(value.value) {
        returnValue.push(value.value);
      }
      if(value.synonyms && Array.isArray(value.synonyms)) {
        value.synonyms.forEach(synonym => {
          returnValue.push(synonym);
        })
      }
    }
  });
  return returnValue;
}