import {
    describe,
    it,
    expect,
    afterEach
} from "vitest";
import App from "../src/App";
import { createRoot } from "react-dom/client";
import { 
    cleanup, 
    act, 
    waitFor
} from "@testing-library/react";

afterEach(() => {
    cleanup();
    document.documentElement.removeAttribute("data-theme");
    localStorage.clear();
});

describe("Test ui", () => {
    it("test App.tsx", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = createRoot(container);

        try {
            await act(async () => {
                root.render(<App/>);
            });

            await waitFor(() => {
                expect(container.querySelector("header")).not.toBeNull();
                expect(
                    container.querySelector("#home, #skills, #projects")
                ).not.toBeNull();
            });
        }
        finally {
            await act(async () => {
                root.unmount();
            });
        }
    })

    it("test theme toggle", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = createRoot(container);

        try {
            await act(async () => {
                root.render(<App/>);
            });

            let toggle: HTMLInputElement | null = null;

            await waitFor(() => {
                toggle = container.querySelector(".toggle");
                expect(toggle).not.toBeNull();
            });

            if(!toggle){
                throw new Error("Theme toggle not found");
            }

            await waitFor(() => {
                expect(document.documentElement.dataset.theme).toBeDefined();
            })

            const theme = document.documentElement.dataset.theme;

            await act(async () => {
                toggle!.click();
            })

            await waitFor(() => {
                expect(document.documentElement.dataset.theme).not.toBe(theme);
            })
        }
        finally {
            await act(async () => {
                root.unmount();
            });
        }
    })
})