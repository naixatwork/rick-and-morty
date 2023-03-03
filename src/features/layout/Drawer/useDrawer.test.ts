import { act, renderHook } from "@testing-library/react";
import { describe, expect } from "vitest";

import useDrawer from "./useDrawer";

describe("useDrawer", () => {
    it("#isOpen should be initialized with #false", () => {
        const { result } = renderHook(useDrawer);
        const { isOpen } = result.current;

        expect(isOpen).toBeFalsy();
    });

    it("#isOpen should turn to #true on calling #openDrawer()", () => {
        const { result } = renderHook(useDrawer);
        act(() => {
            result.current.openDrawer();
        });
        expect(result.current.isOpen).toBeTruthy();
    });

    it("#isOpen should turn to #false on calling #closeDrawer()", () => {
        const { result } = renderHook(useDrawer);
        act(() => {
            result.current.openDrawer();
        });
        expect(result.current.isOpen).toBeTruthy();
        act(() => {
            result.current.closeDrawer();
        });
        expect(result.current.isOpen).toBeFalsy();
    });
});
