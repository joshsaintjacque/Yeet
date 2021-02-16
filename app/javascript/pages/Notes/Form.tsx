import React, { FC } from "react";
import { notes_path, note_path } from "routes.js.erb";
import Link from "components/Link";
import Button from "components/Button";
import Headline from "components/Headline";
import { Note } from "models/Note";
import useActions from "hooks/useActions";

interface FormProps {
  note?: Note;
}

const Form: FC<FormProps> = ({ note }) => {
  const { values, handleChange, handlePatch, handlePost } = useActions(
    "note",
    note,
  );

  const handleSubmit = note ? handlePatch : handlePost;

  return (
    <>
      <div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            {note && (
              <Headline>
                <Link href={notes_path()}>Notes</Link> /{" "}
                <Link href={note_path(note.id)}>{note.id}</Link> / Edit
              </Headline>
            )}
            {!note && (
              <Headline>
                <Link href={notes_path()}>Notes</Link> / New
              </Headline>
            )}
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <form onSubmit={handleSubmit}>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                  <dt className="font-medium text-gray-500 flex items-center">
                    <label htmlFor="title">Title</label>
                  </dt>
                  <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-10">
                    <input
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      className="border-2 border-gray-300 focus:border-indigo-600 rounded py-2 px-3 bg-transparent"
                    />
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                  <dt className="font-medium text-gray-500 flex items-center">
                    <label htmlFor="body">Body</label>
                  </dt>
                  <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-10">
                    <input
                      id="body"
                      value={values.body}
                      onChange={handleChange}
                      className="border-2 border-gray-300 focus:border-indigo-600 rounded py-2 px-3 bg-transparent"
                    />
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                  <dd className="mt-1 sm:mt-0 sm:col-span-12 flex justify-center items-center">
                    <Button onClick={handleSubmit} className="mr-2">
                      Submit
                    </Button>
                    <Link href={notes_path()}>Cancel</Link>
                  </dd>
                </div>
              </form>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
