import React, { FC } from "react";
import { notes_path, edit_note_path } from "routes.js.erb";
import Headline from "components/Headline";
import ConfirmableButton from "components/ConfirmableButton";
import Link from "components/Link";
import { Note } from "models/Note";
import useActions from "hooks/useActions";

interface NoteProps {
  note: Note;
}

const ShowNote: FC<NoteProps> = ({ note }) => {
  const { handleDelete } = useActions("note", note);

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <Headline>
            <Link href={notes_path()}>Notes</Link> / {note.id}
          </Headline>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
              <dt className="font-medium text-gray-500 flex items-center">
                Title
              </dt>
              <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-10">
                <div className="border-2 border-indigo-600 border-opacity-0 py-2 px-3">
                  {note.title}
                </div>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
              <dt className="font-medium text-gray-500 flex items-center">
                Body
              </dt>
              <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-10">
                <div className="border-2 border-indigo-600 border-opacity-0 py-2 px-3">
                  {note.body}
                </div>
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
              <dd className="mt-1 sm:mt-0 sm:col-span-12 flex justify-center">
                <span className="mr-3">
                  <Link href={notes_path()}>Back</Link> |{" "}
                  <Link href={edit_note_path(note.id)}>Edit</Link>
                </span>

                <ConfirmableButton onConfirm={handleDelete}>
                  Delete
                </ConfirmableButton>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ShowNote;
