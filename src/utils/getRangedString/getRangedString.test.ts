import {describe} from "vitest";
import getRangedString from "./getRangedString";

describe('getRangedString', () => {
    it('returns a comma-separated string of array elements', () => {
        const array = ['foo', 'bar', 'baz'];
        const rangedString = getRangedString(array);
        expect(rangedString).toEqual('foo,bar,baz');
    });

    it('returns an empty string for an empty array', () => {
        const array: never[] = [];
        const rangedString = getRangedString(array);
        expect(rangedString).toEqual('');
    });
});