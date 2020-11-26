import React from "react";
import ReactDOM from "react-dom";

// Mount function to start app, then choose what to return
// Use ", element" to show where the element should be imported
const mount = (element) => {
  ReactDOM.render(<h1>Hello World!</h1>, element);
};

// 1. isolation and dev
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  devRoot && mount(devRoot);
}

// 2. running through a container
export { mount };
