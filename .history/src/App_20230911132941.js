import React from "react";
// import Api from "./Api";
// import PasswordGenerator from "./Components/PasswordGenerator";
import RandomPassword from "./Components/RandomPassword";
import Pomofocus from "./Pomofocus/Pomofocus";
import Timer from './Pomofocus/Timer'
export default function App() {
  return (
    <div>
      {/* <PasswordGenerator/> */}
      {/* <RandomPassword /> */}
      {/* <Api/> */}
      <Pomofocus/>
    </div>
  );
}

// import React, { useState } from "react";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState("");
//   const [id, setId] = useState();
//   const addDataHandler = () => {
//     if (input === "") {
//       console.log("please fill input field");
//     } else {
//       setData([input, ...data]);
//       console.log("dataAddedSuccessfully");
//       setInput("")
//     }
//   };

//   const deleteHandler = (id) => {
//     const updateList = data.filter((item) => item !== id);
//     setData(updateList  );
//   };
//   console.log(data);
//   return (
//     <div>
//       hello
//       <input
//         placeholder="enter data"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={() => addDataHandler()}>Add</button>
//       <div>
//         {data.map((value, i) => {
//           return (
//             <div key={i}>
//               <span>{i + 1}</span>
//               <h5>
//                   {value}
//               </h5>
//               <button onClick={() => deleteHandler(value)}>Delete</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
