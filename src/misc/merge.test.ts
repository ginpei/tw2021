import { merge } from "./merge";

describe("merge", () => {
  describe("merge()", () => {
    describe("primitive values", () => {
      it("returns source if both are primitive", () => {
        const target = 1;
        const source = "hehe";
        const result = merge(target, source);
        expect(result).toBe("hehe");
      });

      it("returns source even if undefined", () => {
        const target = 1;
        const source = undefined;
        const result = merge(target, source);
        expect(result).toBe(undefined);
      });

      it("returns source if only target is an object", () => {
        const target = {};
        const source = "hehe";
        const result = merge(target, source);
        expect(result).toBe("hehe");
      });

      it("returns source if only source is an object", () => {
        const target = 1;
        const source = {};
        const result = merge(target, source);
        expect(result).toBe(source);
      });
    });

    describe("shallow object", () => {
      it("merges both keys", () => {
        const target = { foo: 123 };
        const source = { bar: 234 };
        const result = merge(target, source);
        expect(result).toEqual({ foo: 123, bar: 234 });
      });
    });

    describe("deep object", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let target: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let source: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let result: any;

      beforeEach(() => {
        target = {
          keep: { value: "keep" },
          merged: { value: { target: 111 } },
        };
        source = {
          append: { value: "append" },
          merged: { value: { source: 222 } },
        };
        result = merge(target, source);
      });

      it("merges properties", () => {
        expect(result).toEqual({
          append: { value: "append" },
          keep: { value: "keep" },
          merged: { value: { source: 222, target: 111 } },
        });
      });

      it("respects instances", () => {
        expect(result.keep).toBe(target.keep);
        expect(result.append).toBe(source.append);
      });
    });
  });
});
