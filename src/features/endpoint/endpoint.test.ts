import {describe, test, expect} from "vitest";
import getApiUrl from "./getApiUrl"

describe("!endpoint", () => {
    test("it should return #RICK_AND_MORTY_API", () => {
        expect(getApiUrl()).toBe(process.env.VITE_RICK_AND_MORTY_API);
    })
})