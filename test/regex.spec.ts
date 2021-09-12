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
import { expect } from 'chai';
import { getUtteranceRegEx, getStringArrayRegEx, getCustomSlotRegEx } from '../src/regex/utils';
import { IfcConfigCustomSlotType } from '../src/types/config/IfcConfig';
import { implementedInteractions } from './interactions_1';

describe("regex utils", () => {
  describe("getStringArrayRegEx", () => {
    it("generate a regex for an array of strings", () => {
      let result = getStringArrayRegEx(["a", "bd", "def gh"]);
      let expectedResult = '((?:a\\s*|bd\\s*|def gh\\s*)+)';
      expect(result).deep.equal(expectedResult);
    });
  })
  describe("getCustomSlotRegEx", () => {
    it("generate a regex for a custom slot with values that only contain strings", () => {
      let customSlotType: IfcConfigCustomSlotType = {name: "SomeSlotType", values: ["one", "two", "three"]};
      let result = getCustomSlotRegEx(customSlotType);
      let expectedResult = '((?:one\\s*|two\\s*|three\\s*)+)';
      expect(result).deep.equal(expectedResult);
    });
  })
  describe("createInteractionRegEx", () => {
    it("generate a regex for an intent that only has one word of text", () => {
      let result = getUtteranceRegEx(implementedInteractions[0].utterances[0], implementedInteractions);
      let expectedResult = ['^\\s*test\\s*[.?!]?\\s*$'];
      expect(result).deep.equal(expectedResult);
    });
    it("generate a regex for an intent that only has two words of text", () => {
      let result = getUtteranceRegEx(implementedInteractions[0].utterances[1], implementedInteractions);
      let expectedResult = ['^\\s*just\\s+checking\\s*[.?!]?\\s*$'];
      expect(result).deep.equal(expectedResult);
    });
  })
});
