import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./TaskDialog.css";
import { toast, ToastContainer } from "react-toastify";
import { TextField } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import TaskTable from "./TaskTable";
import { useEffect } from "react";
import { useState } from "react";

export default function AlertDialog({
  handleClose,
  handleClickOpen,
  open,
  setTaskName,
}) {
  const [data, setData] = React.useState([]);
  const [localData, setLocalData] = useState([]);
  const [inputData, setInputData] = React.useState("");

  const dataLength = data.length;

  const addDataHandler = () => {
    if (inputData === "") {
      toast.error("Please Fill Input Field");
    } else {
      setData([...data, inputData]);
      setInputData("");
      localStorage.setItem("taskData", JSON.stringify([...data, inputData]));
    }
  };

const getLocalData = localStorage.getItem("taskData")
const getDetailsFromLocal = ()=>{
  const details = JSON.parse(getLocalData)
  if(details && details.len)
}

  // useEffect(() => {
  //   localStorage.setItem("taskData", JSON.stringify(data));
  // }, []);

  const clearAll = () => {
    setData([]);
  };

  const deleteHandler = (id) => {
    // const updateList = data.filter((items) => items !== id);
    // setData(updateList);
    setData((value) => {
      return value.filter((items) => {
        return items !== id;
      });
    });
  };

  //current time running function
  const [time, setTime] = React.useState();
  const updateTime = () => {
    let currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  };
  React.useEffect(() => {
    setInterval(updateTime);
  }, []);
  return (
    <div className="DialogContainer">
      <div className="taskcontainer">
        <div>
          <div className="taskNameLogo">Task</div>
        </div>
        <div>
          <Dropdown className="transbtn">
            <Dropdown.Toggle
              variant="none"
              style={{ background: "rgb(255, 255, 255, 0.3)" }}
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu className="backSection">
              <Dropdown.Item>
                <Button
                  style={{ marginLeft: "-4px" }}
                  variant="text"
                  onClick={() => {
                    clearAll();
                  }}
                >
                  Clear Data
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* <hr className="secondLine"></hr> */}
      <div className="tableoftask">
        <TaskTable
          data={data}
          deleteHandler={deleteHandler}
          setTaskName={setTaskName}
        />
      </div>
      <div className="taskbtncontainer">
        <button className="taskbtn" onClick={handleClickOpen}>
          <AddCircleIcon />
          Add Task
        </button>
      </div>
      <div className="dataAddInputBox">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
            {"Add Your Task here!"}
          </DialogTitle>

          <TextField
            sx={{ marginRight: "5vh", marginLeft: "5vh" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addDataHandler();
              }
            }}
            className="addtaskinput"
            label="Add Your Daily Routine "
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <Button onClick={() => addDataHandler()}>Add</Button>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="countData">
        <div>Pomos : 0 / {dataLength}</div>&nbsp;&nbsp;
        <div>Finish At : {time} </div>
      </div>

      <ToastContainer />
    </div>
  );
}
