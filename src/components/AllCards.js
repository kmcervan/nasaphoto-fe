import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';
import Cards from './Cards';

function AllCards() {
    const [nasaCard, setNasaCard] = useState([]);
    const fetchData = () => {
            axios
            .get(`${BASE_URL}?api_key=${API_KEY}&count=21`)
            .then((res) => {
                console.log(res.data)
                setNasaCard(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <div className='cards'>
            {nasaCard.map( cardInfo => {
                console.log(cardInfo)
                return <Cards key={cardInfo.date} details={cardInfo} />
            })}
        </div>
    )
}

export default AllCards;