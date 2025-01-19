import { readFile } from "node:fs/promises";
import { micromark } from "micromark";
import { expect, test } from "vitest";

test.concurrent(
  "All punctuation marks and symbols are recognized as such",
  async () => {
    const input = (
      await readFile(new URL("testcase.md", import.meta.url), "utf8")
    ).replaceAll("\r\n", "\n");
    const expected = (
      await readFile(new URL("expected.html", import.meta.url), "utf8")
    ).replaceAll("\r\n", "\n");
    expect(micromark(input)).toEqual(expected);
  }
);
