import React from 'react'
import './Menu.css'

const Menu = ( { filterArticleCategory } ) => {
    return (
        <div className='menu-nav'>
            <h1>What's New</h1>
            <button className='menu-button' value='local' onClick={ filterArticleCategory }> Local </button>
            <button className='menu-button' value='entertainment' onClick={ filterArticleCategory }> Entertainment </button>
            <button className='menu-button' value='health' onClick={ filterArticleCategory }> Health </button>
            <button className='menu-button' value='science' onClick={ filterArticleCategory }> Science </button>
            <button className='menu-button' value='tech' onClick={ filterArticleCategory }> Tech </button>
        </div>
    )
}

export default Menu