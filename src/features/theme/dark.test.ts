import { readFileSync } from "fs";
import { describe, expect, test } from "vitest";

describe("dark theme", () => {
    test("the snapshot should not have changed", () => {
        expect(
            readFileSync(`${__dirname}/dark.ts`),
        ).toMatchSnapshot();
    });
});