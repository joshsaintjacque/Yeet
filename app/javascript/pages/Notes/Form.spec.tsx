import React from "react";
import faker from "faker";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import { Inertia } from "@inertiajs/inertia";
import noteFactory from "factories/notes";

describe("Notes/Form", () => {
  describe("when creating a new note", () => {
    beforeEach(() => {
      render(<Form />);
    });

    it("shows the new note header", () => {
      screen.getByText("/ New");
    });

    describe("when the submit button is clicked", () => {
      it("posts the new note", () => {
        const title = faker.lorem.sentence();
        const body = faker.lorem.paragraph();

        userEvent.type(screen.getByLabelText("Title"), title);
        userEvent.type(screen.getByLabelText("Body"), body);
        fireEvent.click(screen.getByText("Submit"));

        expect(Inertia.post).toHaveBeenCalledWith(
          "/notes",
          expect.objectContaining({ title, body }),
        );
      });
    });
  });

  describe("when editing an existing note", () => {
    const note = noteFactory.build();

    beforeEach(() => {
      render(<Form note={note} />);
    });

    it("shows the edit note header", () => {
      screen.getByText("/ Edit", { exact: false });
    });

    describe("when the submit button is clicked", () => {
      it("patches the note", () => {
        const newTitle = faker.lorem.sentence();
        const newBody = faker.lorem.paragraph();

        userEvent.clear(screen.getByLabelText("Title"));
        userEvent.type(screen.getByLabelText("Title"), newTitle);
        userEvent.type(screen.getByLabelText("Body"), newBody);
        fireEvent.click(screen.getByText("Submit"));

        expect(Inertia.patch).toHaveBeenCalledWith(
          `/notes/${note.id}`,
          expect.objectContaining({ title: newTitle, body: newBody }),
        );
      });
    });
  });
});
