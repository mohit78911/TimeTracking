import React from 'react'

export default function TaskNumberName({taskNumber,taskName}) {
  return (
    <div>
      <div className="breakTimeNumber">
            <div style={{ opacity: "0.6" }}>#{taskNumber}</div>
            <div>
              <span style={{ wordWrap: "break-word" }}>{taskName}</span>
            </div>
          </div>
    </div>
  )
}
