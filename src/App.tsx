import React from "react"
import Header from "./components/Header"
import Message from "./components/Message"
import Time from "./components/Time"
import Date from "./components/Date"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <div id="time_section">
        <Message />
        <Time />
        <Date />
      </div>
    </>
  )
}

export default App
