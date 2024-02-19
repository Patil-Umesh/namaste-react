/**
 *  <div id='parent'>
 *     <div id='child'>
 *        <h1>I'm an H1 tag</h1>
 *        <h2>I'm an H2 tag</h2>
 *     </div>
    </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
