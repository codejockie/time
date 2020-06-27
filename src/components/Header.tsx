import React from "react"

const Header = () => {
  return (
    <div id="top">
      <div className="title">
        <h2>
          <a href="#/" target="_top" title="Time">Time</a>
        </h2>
      </div>
      <div className="icon-nav">
        <a href="#nav" title="menu">
          <div className="menu-one"></div>
          <div className="menu-two"></div>
        </a>
      </div>
    </div>
  )
}

export default Header