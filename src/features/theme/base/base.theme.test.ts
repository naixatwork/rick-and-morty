import { readFileSync } from "fs";
import { describe, expect, test } from "vitest";

describe("base theme", () => {
    test("the snapshot should not have changed", () => {
        expect(
            readFileSync(`${__dirname}/base.theme.ts`),
        ).toMatchSnapshot();
    });
});