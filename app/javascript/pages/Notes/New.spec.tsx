import React from "react";
import { render, screen } from "@testing-library/react";
import New from "./New";

describe("Notes/New", () => {
  beforeEach(() => {
    render(<New />);
  });

  it("renders an empty form", () => {
    expect((screen.getByLabelText("Title") as HTMLInputElement).value).toBe("");
  });
});
