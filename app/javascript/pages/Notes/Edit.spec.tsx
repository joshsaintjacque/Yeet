import React from "react";
import { render, screen } from "@testing-library/react";
import Edit from "./Edit";
import { Note } from "models/Note";
import noteFactory from "factories/notes";

describe("Notes/Edit", () => {
  const note = noteFactory.build();

  beforeEach(() => {
    render(<Edit note={note} />);
  });

  it("renders the form with the note", () => {
    expect((screen.getByLabelText("Title") as HTMLInputElement).value).toBe(
      note.title,
    );
  });
});
