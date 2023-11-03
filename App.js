// single element

{/* <h1>
"Hello World from React!"
</h1> */}

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, // to give attributes
//   "Hello World from React!"
// );

// Nested Element with only one childs child

{/* <div id = "parent">
    <div id="child">
        <h1 id= "heading"> only one child
        "Nested Hello world"  
        </h1>
    </div>
</div> */}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "Nested Hello world")
//   )
// );

// Nested Element with siblings

//isme child k 2 child hai h1 and h2 to agr aise siblings bnanae ho to array me convert krdo 3rd arguement ko

{/* <div id = "parent">
    <div id="child">
        <h1 id= "heading1"> //child1
        "Nested Hello world 1"  
        </h1>
        <h2 id= "heading2"> //child2
        "Nested Hello world 2"  
        </h2>
    </div>
</div>  */}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading1" }, "Nested Hello world h1"),React.createElement("h2", { id: "heading2" }, "Nested Hello world h2")]
  )
);


const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(parent);
