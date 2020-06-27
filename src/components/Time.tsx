import React, { useEffect, useState } from "react"

const Time = () => {
  const [[hour, min, sec], setTime] = useState(new Date().toLocaleTimeString().split(":"))
  
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString().split(":"))
    }, 1000)
  })

  return (
    <div className="clock">
      <div id="clock_bg">
        <time id="clock">
          <span className="digits">{hour}</span>
          <span className="separator">:</span>
          <span className="digits">{min}</span>
          <span className="separator">:</span>
          <span className="digits">{sec}</span>
        </time>
      </div>
    </div>
  )
}

export default Time
