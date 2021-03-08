import React, { FC } from "react";
import { Note } from "models/Note";
import NoteForm from "./Form";
import MainLayout from "layouts/MainLayout";
import { User } from "models/User";

interface EditNoteProps {
  note: Note;
  currentUser?: User;
}

const EditNote: FC<EditNoteProps> = ({ note, currentUser }) => {
  return (
    <MainLayout currentUser={currentUser}>
      <NoteForm note={note} />
    </MainLayout>
  );
};

export default EditNote;
