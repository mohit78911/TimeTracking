// import React from "react";
// // import Api from "./Api";
// // import PasswordGenerator from "./Components/PasswordGenerator";
// import RandomPassword from "./Components/RandomPassword";
// import Timer from './Timer'
// export default function App() {
//   return (
//     <div>
//       {/* <PasswordGenerator/> */}
//       {/* <RandomPassword /> */}
//       {/* <Api/> */}
//       <Timer/>
//     </div>
//   );
// }



import React, { useState } from 'react'

export default function App() {
  const [data,setData] = useState([])
  const [input,setInput] =  useState('') 

  return (
    <div>
      hello
      <input placeholder='enter data' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>addDataHandler()}>Add</button>
    </div>
  )
}
