import React, { FC } from "react";
import { Note } from "models/Note";
import NoteForm from "./Form";

interface EditNoteProps {
  note: Note;
}

const EditNote: FC<EditNoteProps> = ({ note }) => {
  return <NoteForm note={note} />;
};

export default EditNote;
