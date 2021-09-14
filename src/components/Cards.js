import React from 'react';
import './Cards.css';

function Cards(key, details) {
    const { title, date, hdurl, explanation } = key.details;
    if(!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={hdurl} alt='picture of the day' className='card-image'/>
            </div>
            <div className='card-info'>
                <h3 className='info-section'>{title}</h3>
                <h5 className='info-section'>{date}</h5>
                <h4 className='info-section'>{explanation}</h4>
                <button>Like</button>
            </div>
        </div>
        
    )
}

export default Cards;
