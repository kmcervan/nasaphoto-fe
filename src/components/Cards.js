import React from 'react';
import Heart from '../pictures/heart.png';

function Cards(key) {
    const { title, date, hdurl, explanation } = key.details;

    // const loading=()=>{
    //     if(!key) {
    //     return <h3>Working fetching your friend&apos;s details...</h3>
    //     }
    // }
    function likeButton(x) {
        x.classList.toggle("heart-image");
    }

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={hdurl} alt='picture of the day' className='card-image'/>
                <div className='image-hover-heart'>
                    <img className='heart-image' src={Heart} />
                </div>
            </div>
            <div className='card-info'>
                <button onClick={likeButton}>Like</button>
                <h3 className='info-section'><a href={hdurl} target='_blank' rel="noreferrer" className='nasa-photo-link'>{title}</a> </h3>
                <h5 className='info-section'>{date}</h5>
                <h4 className='info-section'>{explanation}</h4>
            </div>
        </div>
    )
}

export default Cards;
