import React, { FC } from "react";
import { Inertia } from "@inertiajs/inertia";
import { new_note_path, edit_note_path, note_path } from "routes.js.erb";
import {
  TableHeaderCell,
  TableCell,
  TableHeader,
  TableBody,
  TableRowActionsCell,
  Table,
} from "components/tables";
import Link from "components/Link";
import ConfirmableButton from "components/ConfirmableButton";
import Headline from "components/Headline";
import { Note } from "models/Note";

interface NotesProps {
  notes: Note[];
}

const Notes: FC<NotesProps> = ({ notes }) => {
  function handleDelete(noteId: number) {
    Inertia.delete(note_path(noteId));
  }

  return (
    <div>
      <Headline>Note</Headline>

      <Table>
        <TableHeader>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell className="hidden sm:block">Body</TableHeaderCell>
          <TableHeaderCell />
        </TableHeader>

        <TableBody>
          {notes.map((note) => {
            return (
              <tr key={note.id}>
                <TableCell>{note.id}</TableCell>
                <TableCell>{note.title}</TableCell>
                <TableCell className="hidden sm:block">{note.body}</TableCell>
                <TableRowActionsCell>
                  <span className="mr-3">
                    <Link href={note_path(note.id)}>Show</Link> |{" "}
                    <Link href={edit_note_path(note.id)}>Edit</Link>{" "}
                  </span>

                  <ConfirmableButton onConfirm={() => handleDelete(note.id)}>
                    Delete
                  </ConfirmableButton>
                </TableRowActionsCell>
              </tr>
            );
          })}
          <tr>
            <td
              colSpan={4}
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center"
            >
              <Link href={new_note_path()} block>
                Create a new note
              </Link>
            </td>
          </tr>
        </TableBody>
      </Table>
    </div>
  );
};

export default Notes;
