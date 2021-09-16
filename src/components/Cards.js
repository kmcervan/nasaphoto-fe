import React from 'react';
import Heart from '../pictures/heart.png';
import Liked from '../pictures/like-heart.png';

function Cards(key) {
    const { title, date, hdurl, explanation } = key.details;

    const likeButton = document.querySelector('.image-container');
    let picture = document.querySelector('.heart-image');
    let clicked = false;

    function likeUnlike(){
        likeButton.addEventListener('click', () => {
            if(!clicked){
                clicked = true;
                picture.innerHTML = `<img className='heart-image like' src=${Heart}>`; // Change this to help swap out the pictures !!!**********
            }else{
                clicked= false;
                picture.innerHTML = `<img className='heart-image unlike' src=${Liked} />`
            }
        });
    }

    return (
        <div className='card-container'>
            <div className='image-container' onClick={likeUnlike}>
                <img src={hdurl} alt='picture of the day' className='card-image'/>
                <div className='image-hover-heart like unlike' >
                    <div className='heart-image' ></div>
                    <img className='heart-image like ' src={Heart} />
                    {/* <img className='heart-image unlike' src={Liked} visibility='hidden'  /> */}
                </div>
            </div>
            <div className='card-info'>
                <button>Like</button>
                <h3 className='info-section'><a href={hdurl} target='_blank' rel="noreferrer" className='nasa-photo-link'>{title}</a> </h3>
                <h5 className='info-section'>{date}</h5>
                <h4 className='info-section'>{explanation}</h4>
            </div>
        </div>
    )
}

export default Cards;
