import React from "react"
import { getFullDate, getWeek } from "../utils/date"

const Date = () => {
  return (
    <>
      <div id="dd" className="w90 tr clockdate" title="Click for calendar">
        {getFullDate()}
        <span className="nw">week {getWeek()}</span>
      </div>
      <div id="day" className="w90 tr noprint">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/#">
          Holiday
        </a>
      </div>
      <div id="loc" className="w90 tr">
        <span id="locw">
          Sun:{" "}
          <span id="sun" className="nw">
            ↑ 04:40 ↓ 19:11 (14h 31m)
          </span>{" "}
          <a href="/#">More info</a>
        </span>
        <div className="lsp w90 tr"></div>
      </div>
    </>
  )
}

export default Date
