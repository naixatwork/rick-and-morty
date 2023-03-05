import {describe} from "vitest";
import extractUrlTail from "./extractUrlTail";

describe('extractUrlTail', () => {
    it('returns the last segment of a URL', () => {
        const url = 'https://example.com/path/to/last-segment';
        const tail = extractUrlTail(url);
        expect(tail).toEqual('last-segment');
    });

    it('returns an empty string if the URL is empty', () => {
        const url = '';
        const tail = extractUrlTail(url);
        expect(tail).toEqual('');
    });
});