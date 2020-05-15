import React from 'react'
import './Menu.css'

const Menu = ({filterArticleCategory}) => {
    return (
        <div className='menu-nav'>
            <button className='menu-button' name='local' onClick={filterArticleCategory}> Local </button>
        </div>
    )
}

export default Menu