import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./TaskDialog.css";
import { toast, ToastContainer } from "react-toastify";
import { TextField } from "@mui/material";

export default function AlertDialog({ handleClose, handleClickOpen, open }) {
  const [data, setData] = React.useState([]);
  const [inputData, setInputData] = React.useState("");

  const addDataHandler = () => {
    if (inputData === "") {
      toast.error("Please Fill Input Field");
    } else {
      setData([...data, inputData]);
      setInputData("");
    }
  };
  return (
    <div>
         <div>
        {data.map((val) => {
          return (
            <div>
              <h2>{val}</h2>
            </div>
          );
        })}
      </div>
      <div className="taskbtncontainer">
        <button className="taskbtn" onClick={handleClickOpen}>
          <AddCircleIcon />
          Add Task
        </button>
      </div>
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
        onKeyDown={(e)=>{if(e)}}
          className="addtaskinput"
          label="Add your daily routine "
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button onClick={() => addDataHandler()}>Add</Button>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
     
      <ToastContainer />
    </div>
  );
}
