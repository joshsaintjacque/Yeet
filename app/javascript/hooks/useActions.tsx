import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { plural, singular } from "pluralize";
import Routes from "routes.js.erb";
import { Record } from "models/Record";

function useActions<T extends Record>(entity_name: string, record?: T) {
  const [values, setValues] = useState({ ...record });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.id;
    const value = event.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handlePatch = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    Inertia.patch(Routes[`${singular(entity_name)}_path`](record?.id), values);
  };

  const handlePost = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    Inertia.post(Routes[`${plural(entity_name)}_path`](), values);
  };

  function handleDelete() {
    Inertia.delete(Routes[`${singular(entity_name)}_path`](record?.id));
  }

  return {
    values: values as T,
    handleChange,
    handlePatch,
    handlePost,
    handleDelete,
  };
}

export default useActions;
