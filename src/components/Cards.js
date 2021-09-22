import React, {useState} from 'react';
import NotLiked from '../pictures/heart.svg';
import Liked from '../pictures/heart-red.svg';

function Cards( key ) {
    const { title, date, hdurl, explanation } = key.details;
    const [isLiked, setIsLiked] = useState(false);

    const toggleCheck = () =>{
        setIsLiked(!isLiked);
    }

    const likebtn = isLiked ? Liked : NotLiked;

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={hdurl} alt='picture of the day' className='card-image'/>
                <div className='image-hover-heart' onClick={toggleCheck}>
                    <span><img className='heart-image' src={likebtn}/></span>
                </div>
            </div>
            <div className='card-info'>
                <button onClick={toggleCheck}>Like</button>
                <h3 className='info-section'><a href={hdurl} target='_blank' rel="noreferrer" className='nasa-photo-link'>{title}</a> </h3>
                <h5 className='info-section'>{date}</h5>
                <h4 className='info-section'>{explanation}</h4>
            </div>
        </div>
    )
}

export default Cards;
