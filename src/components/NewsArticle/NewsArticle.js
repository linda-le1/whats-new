import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (
        <div className='news-article'>
            <div>
                <img className='news-image' src = {props.img} />
            </div>
            <h3>{props.headline}</h3>
            <p>{props.description}</p>
            <a href={props.url}>Read it here</a>
        </div>
    )
}

export default NewsArticle