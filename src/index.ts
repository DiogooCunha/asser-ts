import { AssertionError, EqualError, ExpressionError, ObjectError } from "./errors/index.js";

interface Assert {
  // TYPES ASSERTION
  isString(val: unknown, message?: string): asserts val is string;
  isNumber(val: unknown, message?: string): asserts val is number;
  isObject(val: unknown, message?: string): asserts val is object;
  isBoolean(val: unknown, message?: string): asserts val is boolean;

  // EXPRESSION ASSERTION
  that(val: unknown, expression: Function, message?: string): boolean;
  toMatch(val: string, expected: RegExp | string, message?: string): boolean;

  // EQUALS ASSERTION
  equal(val: unknown, compare: unknown, message?: string): boolean;

  // FAILURE
  failure(message?: string): void;
}

export const assert: Assert = {
  // TYPES ASSERTION
  isString(val: unknown, message?: string): asserts val is string {
    if (typeof val !== "string") {
      throw new AssertionError(message ?? "Expected string.");
    }
  },

  isNumber(val: unknown, message?: string): asserts val is number {
    if (typeof val !== "number") {
      throw new AssertionError(message ?? "Expected number.");
    }
  },

  isObject(val: unknown, message?: string): asserts val is object {
    if (typeof val !== "object") {
      throw new ObjectError(message ?? "Expected object.");
    }
  },

  isBoolean(val: unknown, message?: string): asserts val is boolean {
    if (typeof val !== "boolean") {
      throw new AssertionError(message ?? "Expected boolean");
    }
  },

  // EXPRESSION ASSERTION
  that(val: unknown, expression: Function, message?: string): boolean {
    if (!expression(val)) {
      throw new ExpressionError(message ?? "Expression not successfull.");
    }

    return true;
  },

  toMatch(val: string, expected: RegExp | string, message: string): boolean {
    if (expected instanceof (RegExp)) {
      if (!expected.test(val)) {
        throw new ExpressionError(message ?? "Expression not successfull.");
      }

      return true;
    }

    if (!val.includes(expected)) {
      throw new ExpressionError(message ?? "Expression not successfull.");
    }

    return true;
  },

  // EQUALS ASSERTION
  equal(val: unknown, compare: unknown, message?: string): boolean {
    if (val !== compare) {
      throw new EqualError(message ?? "The Two values should be equal.");
    }

    return true;
  },

  // FAILURE
  failure(message?: string): void {
    throw new Error(message ?? "Failure thrown.");
  },
};