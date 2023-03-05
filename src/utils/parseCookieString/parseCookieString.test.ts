import { describe } from "vitest";

import parseCookieString from "./parseCookieString";

describe("parseCookieString", () => {
    it("returns an empty object when passed an empty string", () => {
        const cookieString = "";
        const parsedCookies = parseCookieString(cookieString);
        expect(parsedCookies).toEqual({});
    });

    it("correctly parses a single cookie from the cookie string", () => {
        const cookieString = "name=value";
        const parsedCookies = parseCookieString(cookieString);
        expect(parsedCookies).toEqual({ name: "value" });
    });

    it("correctly parses multiple cookies from the cookie string", () => {
        const cookieString = "name1=value1; name2=value2; name3=value3";
        const parsedCookies = parseCookieString(cookieString);
        expect(parsedCookies).toEqual({
            name1: "value1",
            name2: "value2",
            name3: "value3",
        });
    });

    it("trims whitespace from cookie names and values", () => {
        const cookieString = " name1 = value1 ; name2 = value2 ";
        const parsedCookies = parseCookieString(cookieString);
        expect(parsedCookies).toEqual({ name1: "value1", name2: "value2" });
    });
});