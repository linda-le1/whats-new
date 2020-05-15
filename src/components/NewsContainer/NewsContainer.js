import React from 'react'
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer =(props) => {
    const newsToDisplay = props.news.map(article =>
    // if (article != null) { do ... }
    < NewsArticle key={article.id} img={article.img} headline={article.headline} description={article.description} url={article.url}/>)
    // else { "can't find articles to display" }

    return (
        <div className='article-container'>
            {newsToDisplay}
        </div>
    )
}

export default NewsContainer