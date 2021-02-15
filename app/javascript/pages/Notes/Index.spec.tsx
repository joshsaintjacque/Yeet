import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Index from "./Index";
import { Inertia } from "@inertiajs/inertia";
import noteFactory from "factories/notes";

describe("Notes/Index", () => {
  const notes = noteFactory.buildList(2);

  beforeEach(() => {
    render(<Index notes={notes} />);
  });

  it("shows a list of notes", () => {
    expect(screen.getByText(notes[0].title || "")).not.toBeNull();
    expect(screen.getByText(notes[1].title || "")).not.toBeNull();
  });

  it("allows the user to delete each note", async () => {
    fireEvent.click(screen.getAllByText("Delete")[0]);
    fireEvent.click(screen.getAllByText("Delete")[0]);

    await waitFor(() =>
      expect(Inertia.delete).toHaveBeenCalledWith(
        `/notes/${notes[0].id}`,
        expect.anything(),
      ),
    );
  });
});
