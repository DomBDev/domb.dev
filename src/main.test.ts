// @vitest-environment jsdom

import { act } from "react";
import { expect, test } from "vitest";

test("the entry point mounts and renders into #root", async () => {
  document.body.innerHTML = '<div id="root"></div>';

  await act(async () => {
    await import("./main");
  });

  expect(document.querySelector("#root")?.textContent).toBe("Dominic Bonanni");
});
