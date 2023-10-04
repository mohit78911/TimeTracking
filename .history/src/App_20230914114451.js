// import React from "react";
// // import Api from "./Api";
// import PasswordGenerator from "./Components/PasswordGenerator";
// import RandomPassword from "./Components/RandomPassword";
// import Pomofocus from "./Pomofocus/Pomofocus";

// export default function App() {
//   return (
//     <div>
//       {/* <PasswordGenerator/> */}
//       {/* <RandomPassword /> */}
//       {/* <Api/> */}
//       <Pomofocus />
//     </div>
//   );
// }

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

// import React from "react";
// import "./App.css";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// export default function App() {
//   return (
//     <div>
//       <div className="nameClass">Hello boss i m Mohit Suthar</div>
//       <button className="Clickbutton "><CheckCircleIcon /><span className="namebtn">Click Me</span></button>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

const CircularTimer = ({ totalTime }) => {
  const [remainingTime, setRemainingTime] = useState(25 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateProgress = () => {
    return (remainingTime / totalTime) * 100;
  };

  const timerStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '10px solid #ccc',
    position: 'relative',
  };

  const maskStyle = {
    width: '100%',
    height: '100%',
    clipPath: `polygon(50% 50%, 50% 50%, 50% 50%)`,
    background: 'red',
    transform: `rotate(${calculateProgress() * 3.6}deg)`,
    transformOrigin: 'center center',
    transition: 'transform 1s linear',
    borderRadius: '50%',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={timerStyle}>
      <div style={maskStyle}></div>
      <div style={textStyle}>{remainingTime} sec</div>
    </div>
  );
};

export default CircularTimer;
