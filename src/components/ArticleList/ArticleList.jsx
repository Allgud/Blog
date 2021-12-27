import React from "react"
import "./article-list.scss"
import ArticleCard from "../ArticleCard"

const ArticleList=()=>(
    <div className="article-list">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
    </div>
)

export default ArticleList