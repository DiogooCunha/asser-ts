import { assert } from "./index.js";

describe("Assert", () => {
  describe("isString", () => {
    it("should assert that the value is string", () => {
      const correctValue = "string";
      assert.isString(correctValue);
    });

    it("should throw if value is not string", () => {
      const incorrectValue = 123;
      expect(() => assert.isString(incorrectValue)).toThrow();
    });
  });

  describe("isNumber", () => {
    it("should assert that the value is a number", () => {
      const correctValue = 123;
      assert.isNumber(correctValue);
    });

    it("should throw if value is not number", () => {
      const incorrectValue = "string";
      expect(() => assert.isNumber(incorrectValue)).toThrow();
    });
  });

  describe("isObject", () => {
    it("should assert that the value is a object", () => {
      const correctValue = {
        val1: 123,
        val2: "string",
      };

      assert.isObject(correctValue);
    });

    it("should throw if value is not object", () => {
      const incorrectValue = "string";
      expect(() => assert.isObject(incorrectValue)).toThrow();
    });
  });

  describe("isBoolean", () => {
    it("should assert that the value is a boolean", () => {
      const correctValue = true;
      assert.isBoolean(correctValue);
    });

    it("should throw if value is not boolean", () => {
      const incorrectValue = "true";
      expect(() => assert.isBoolean(incorrectValue)).toThrow();
    });
  });

  describe("that", () => {
    it("should return true if the expression returns true", () => {
      const value = "string";
      const expression = (x: string) => x.length === 6;

      const res = assert.that(value, expression);
      expect(res).toBe(true);
    });

    it("should throw if the expression returns false", () => {
      const value = "string";
      const expression = (x: number) => x > 10;

      expect(() => assert.that(value, expression)).toThrow();
    });
  });

  describe("toMatch", () => {
    it("should return true if the string exists in the value", () => {
      const value = "superstring";

      const res = assert.toMatch(value, "string");
      expect(res).toBe(true);
    });

    it("should throw if the string does not exist in the value", () => {
      const value = "superstring";

      expect(() => assert.toMatch(value, "other")).toThrow();
    });
  });

  describe("equal", () => {
    it("should return true if the value are equal to the compared", () => {
      const value = 123;
      const compare = 123;

      const res = assert.equal(value, compare);
      expect(res).toBe(true);
    });

    it("should throw if the value are different to the compared", () => {
      const value = 123;
      const compare = 999;

      expect(() => assert.equal(value, compare)).toThrow();
    });
  });

  describe("failure", () => {
    it("should throw an error", () => {
      expect(() => assert.failure()).toThrow();
    });
  });
});
