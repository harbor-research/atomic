import { HarborHeader } from "../../src/organisms/HarborHeader.tsx";
import { Action } from "../../src/src.deps.ts";
import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

describe("Header Tests", () => {
  describe("Logo Children", () => {
    const html = render(
      <HarborHeader
        nav={
          <>
            <Action href="/" class="text-xl mx-1">
              Home
            </Action>

            <Action href="/about" class="text-xl mx-1">
              About
            </Action>

            <Action href="/contact" class="text-xl mx-1">
              Contact
            </Action>
          </>
        }
      />,
    );

    console.log(html);
    assert(html.includes("Contact"));
  });
});
