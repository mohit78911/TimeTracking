import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function TaskTable({ data, deleteHandler, setTaskName }) {
  return (
    <div className="tableContainer">
      {data.map((val, i) => {
        return (
          <div key={} className="tabledata deletebtn">
            <div>
              <CheckCircleIcon />
            </div>
            <div onClick={() => setTaskName(val)} className="datatxt">
              {val}
            </div>
            <div className="">
              <button onClick={() => deleteHandler(val)} className="deletebtn">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
