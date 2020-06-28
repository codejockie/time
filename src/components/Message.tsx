import React from "react"

const Message = () => {
  return (
    <div id="msgs" className="tr w90">
      <div id="msg">
        <h1 id="syncHour">
          Your time is exact!
        </h1>
      </div>
      <div id="syncDtl" className="w1">
        The difference from Time was <span className="nw">+0.019 seconds</span>{" "}
        (±0.005 seconds).{" "}
      </div>
      <div id="location" className="w1">
        Time in {`{{user's city, country}}`} now:
      </div>
    </div>
  )
}

export default Message
