import {describe} from "vitest";
import getLastElement from "./getLastElement";

describe('getLastElement', () => {
    it('returns the last element of an array', () => {
        const array = [1, 2, 3, 4, 5];
        const lastElement = getLastElement(array);
        expect(lastElement).toEqual(5);
    });

    it('returns undefined for an empty array', () => {
        const array: never[] = [];
        const lastElement = getLastElement(array);
        expect(lastElement).toBeUndefined();
    });
});