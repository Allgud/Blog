import React from "react"
import "./article-card.scss"
import userPic from "../../avatars/avatar.jpg"

const ArticleCard=()=>(
  <div className="article__card">
    <div className="article__card__header">
      <div className="card__title__content">
        <span className="card__title">Some article title</span>
        <div className="card__tags">Tag1</div> 
      </div>
      <div className="article__card__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius dignissimos veritatis vitae aut nemo culpa aperiam cumque fugit dolorum?
      </p>
    </div>
    </div>
    <div className="article__card__author">
        <div className="author__info">
          <div className="author__name">Joe Mixon</div>
          <div className="article__creation__date">05, March 2020</div>
        </div>
        <div className="author__avatar">
          <img src={userPic} alt="userPic" />
        </div>
      </div>
  </div>
)

export default ArticleCard