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

import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}