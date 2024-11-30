import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NetfixSeries from "./components/NetflixCard";
import "./App.css";

function App() {
  return <>
  <NetfixSeries/>
 
  </>;
}

// const NetfixSeries = () => {
//   let age=16;
//   return (
//     <>
//       <div>
//         <img src="image.jpg" alt="" />
//       </div>
//       <h2>Name:Queen Of Tear</h2>
//       <head>Rating: 8.2</head>
//       <p>
//         Summery: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Reiciendis facere quas autem ipsam impedit quae quaerat velit quod iure
//         illo repellendus, ullam, harum id, minus totam assumenda nostrum? Ipsa,
//         doloribus.
//       </p>
//       <button>{age>=18?"Watch Now":"Not Applicable"}</button>
//     </>
//   );
// };

export default App;
