import React from 'react'
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer =(props) => {
    const newsToDisplay = props.news.map(article => < NewsArticle key={article.id} img={article.img} headline={article.headline} description={article.description} url={article.url}/>)

    return (
        <div className='article-container'>
            {newsToDisplay}
        </div>
    )
}

export default NewsContainer