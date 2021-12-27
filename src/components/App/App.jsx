import React from "react"
import "./app.scss"
import NavBar from "../NavBar"
import ArticleList from "../ArticleList"

const App =()=> (
  <div className="app">
    <NavBar />
    <div className="container">
      <ArticleList />
    </div>
  </div>
)

export default App