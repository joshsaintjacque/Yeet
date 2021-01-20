// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "../layouts/application.css";

Rails.start();
ActiveStorage.start();

import { App } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init();

// Make Rails named routes available to the client
window.Routes = require("routes.js.erb");

// Mount the inertia application
const el = document.getElementById("app");

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={(name) =>
      import(`../pages/${name}`).then((module) => module.default)
    }
  />,
  el,
);
