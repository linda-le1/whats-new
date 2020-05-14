import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer =(props) => {
    const localNews = props.local.map(article => < NewsArticle key={article.id} img={article.img} headline={article.headline} description={article.description} url={article.url}/>)
    // (article => < NewsArticle key = {
    //         article.id
    //     }
    //     image = {
    //         article.img
    //     }
    //     headline = {
    //         article.headline
    //     }
    //     description = {
    //         article.description
    //     }
    //     url = {
    //         article.url
    //     }
    //     />)

    return (
        <div className='article-container'>
            {localNews}
        </div>
    )
}

export default NewsContainer;