import React from "react"
import "./app.scss"
import NavBar from "../NavBar"

const App =()=> (
  <div className="app">
    <NavBar />
    <div className="container">
      <h1>Content</h1>
    </div>
  </div>
)

export default App