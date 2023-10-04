import React, { useState, useEffect } from "react";
import "./Timer.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function Promodoro() {
    
  return (
    <div>
      <div className="timer">{formatTime(seconds)}</div>
    </div>
  )
}
