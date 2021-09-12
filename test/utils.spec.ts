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
import { convertCustomSlotValuesToStringArray } from '../src/utils/utils';
import { IfcConfigCustomSlotType } from '../src/types/config/IfcConfig';

describe("utils", () => {
  describe("convertCustomSlotValuesToStringArray", () => {
    it("convert custom slot type's values that only contain strings", () => {
      let customSlotType: IfcConfigCustomSlotType = {name: "SomeSlotType", values: ["one", "two", "three"]};
      let result = convertCustomSlotValuesToStringArray(customSlotType);
      let expectedResult = [ 'one', 'two', 'three' ];
      expect(result).deep.equal(expectedResult);
    });
    it("convert custom slot type's values", () => {
      let customSlotType: IfcConfigCustomSlotType = {name: "SomeSlotType", values: ["one", {value: "two", synonyms: ["2"]}, {value: "bug", synonyms: ["insect", "beetle"]}]};
      let result = convertCustomSlotValuesToStringArray(customSlotType);
      let expectedResult = [ 'one', 'two', '2', 'bug', 'insect', 'beetle' ];
      expect(result).deep.equal(expectedResult);
    });
  })
});
