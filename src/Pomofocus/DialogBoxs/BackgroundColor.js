import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function BackgroundColor({setOpenSecond,openSecond,setColor}) {
  return (
    <div>
       <Dialog
            open={openSecond}
            onClose={() => setOpenSecond(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"BACKGROUND COLOR"}
            </DialogTitle>
            <DialogContent>
              <div className="dialogContain">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "yellowgreen",
                    borderRadius: "5px",
                  }}
                  onClick={() => setColor("#64dd17")}
                ></div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "yellow",
                    borderRadius: "5px",
                  }}
                  onClick={() => setColor("#fbc02d")}
                ></div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "purple",
                    borderRadius: "5px",
                  }}
                  onClick={() => setColor("#ba68c8")}
                ></div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "black",
                    borderRadius: "5px",
                  }}
                  onClick={() => setColor("black")}
                ></div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "skyblue",
                    borderRadius: "5px",
                  }}
                  onClick={() => setColor("#2979ff")}
                ></div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>setOpenSecond(false)}>CLOSE</Button>
            </DialogActions>
          </Dialog>
    </div>
  )
}
