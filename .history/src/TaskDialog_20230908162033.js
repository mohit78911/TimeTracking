import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import './TaskDial'

export default function AlertDialog({ handleClose, handleClickOpen, open }) {
  return (
    <div>
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
        <DialogTitle id="alert-dialog-title">
          {"Add Your Task here!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Add Your Daily Task.
          </DialogContentText>
        </DialogContent>
        <input placeholder="Add your daily routine " />
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
