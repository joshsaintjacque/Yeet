import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Inertia } from "@inertiajs/inertia";
import Show from "./Show";
import noteFactory from "factories/notes";

describe("Notes/Show", () => {
  const note = noteFactory.build({ title: "This is a note" });

  beforeEach(() => {
    render(<Show note={note} />);
  });

  it("renders", () => {
    expect(screen.getByText("This is a note")).not.toBeNull();
  });

  describe("when the delete button is clicked", () => {
    it("calls the delete action", async () => {
      fireEvent.click(screen.getByText("Delete"));
      fireEvent.click(screen.getByText("Delete"));

      await waitFor(() =>
        expect(Inertia.delete).toHaveBeenCalledWith(`/notes/${note.id}`),
      );
    });
  });
});
