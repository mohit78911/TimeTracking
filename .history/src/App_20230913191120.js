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

// // import React, { useState } from "react";

// // export default function App() {
// //   const [data, setData] = useState([]);
// //   const [input, setInput] = useState("");
// //   const [id, setId] = useState();
// //   const addDataHandler = () => {
// //     if (input === "") {
// //       console.log("please fill input field");
// //     } else {
// //       setData([input, ...data]);
// //       console.log("dataAddedSuccessfully");
// //       setInput("")
// //     }
// //   };

// //   const deleteHandler = (id) => {
// //     const updateList = data.filter((item) => item !== id);
// //     setData(updateList  );
// //   };
// //   console.log(data);
// //   return (
// //     <div>
// //       hello
// //       <input
// //         placeholder="enter data"
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //       />
// //       <button onClick={() => addDataHandler()}>Add</button>
// //       <div>
// //         {data.map((value, i) => {
// //           return (
// //             <div key={i}>
// //               <span>{i + 1}</span>
// //               <h5>
// //                   {value}
// //               </h5>
// //               <button onClick={() => deleteHandler(value)}>Delete</button>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";
// // import "./App.css";
// // import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// // export default function App() {
// //   return (
// //     <div>
// //       <div className="nameClass">Hello boss i m Mohit Suthar</div>
// //       <button className="Clickbutton "><CheckCircleIcon /><span className="namebtn">Click Me</span></button>
// //     </div>
// //   );
// // }

import React from "react";

export default function App() {
  return (
    <div>
      <svg
        version="1.1"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 140 175"
      >
        {/* Outer circle */}
        <circle cx="70" cy="70" r="60.75" fill={outerColor} />

        {/* Countdown circle */}
        <circle cx="70" cy="70" r="59.75" fill={countdownColor} />

        {/* The black circle that covers the Color as the timer counts down */}
        <path d={draw} fill={outerColor} />

        {/* Inner circle that the play/pause button sits on */}
        <circle cx="70" cy="70" r="48" fill={innerColor} stroke={outerColor} />

        {/* Play / Pause button icons */}
        <g id="playButton" opacity={timerIsRunning ? 0 : 1}>
          <path d="M 55 50 L 55 91 L 95 69 L 55 50" fill={outerColor} />
        </g>

        <g id="pauseButton" opacity={timerIsRunning ? 1 : 0}>
          <rect
            x="53"
            y="53"
            height="36"
            width="13"
            rx="0"
            ry="0"
            fill={outerColor}
          />
          <rect
            x="74"
            y="53"
            height="36"
            width="13"
            rx="0"
            ry="0"
            fill={outerColor}
          />
        </g>

        {/* Hitbox for play/pause button */}
        <circle
          cx="70"
          cy="70"
          r="48"
          opacity="0"
          style={{
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          onClick={clickStart}
        />

        {/* Timer countdown text */}
        {displayCountdown ? (
          <text
            x="70"
            y="165"
            textAnchor="middle"
            style={{ fill: countdownColor, fontSize: "28px" }}
          >
            {timerText}
          </text>
        ) : null}
      </svg>
    </div>
  );
}
