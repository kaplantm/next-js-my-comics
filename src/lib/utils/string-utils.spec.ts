import { isBlank } from "./string-utils";

describe("String Utils", () => {
  describe("isBlank", () => {
    test("should return true for null, undefined and whitespace strings", () => {
      expect(isBlank(" ")).toBeTruthy(); // space
      expect(isBlank("    ")).toBeTruthy(); // many spaces
      expect(isBlank("  ")).toBeTruthy(); // tab
      expect(isBlank("")).toBeTruthy(); // empty string
      expect(isBlank(null)).toBeTruthy();
      expect(isBlank(undefined)).toBeTruthy();
    });
    test("should return false for all numeric values, non empty strings, booleans", () => {
      expect(isBlank(-1)).toBeFalsy();
      expect(isBlank(0)).toBeFalsy();
      expect(isBlank(1)).toBeFalsy();
      expect(isBlank(1000)).toBeFalsy();
      expect(isBlank("   ?    ")).toBeFalsy();
      expect(isBlank("string")).toBeFalsy();
      expect(isBlank(true)).toBeFalsy();
      expect(isBlank(false)).toBeFalsy();
    });
  });
});
