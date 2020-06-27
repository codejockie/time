import React from "react"
import Header from "./components/Header"
import Message from "./components/Message"
import Time from "./components/Time"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <div id="time_section">
        <Message />
        <Time />
      </div>
    </>
  )
}

export default App
