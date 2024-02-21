import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "Im an H1 tag from child 2"),
    React.createElement("h2", {}, "Im an H2 tag from child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
