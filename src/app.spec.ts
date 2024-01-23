import { describe, it, expect } from "vitest";
import { sum } from "./app.js";

describe("check if test is working", () => {
  it("should pass", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
