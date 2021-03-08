import MainLayout from "layouts/MainLayout";
import { User } from "models/User";
import React, { FC } from "react";
import NoteForm from "./Form";

interface NewNoteInterface {
  currentUser?: User;
}

const NewNote: FC<NewNoteInterface> = ({ currentUser }) => {
  return (
    <MainLayout currentUser={currentUser}>
      <NoteForm />
    </MainLayout>
  );
};

export default NewNote;
