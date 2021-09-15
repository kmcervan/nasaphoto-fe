import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';
import Cards from './Cards';

function AllCards() {
    const [nasaCard, setNasaCard] = useState([]);
    // const [info, setInfo] = useState([]);
    // const [title, setTitle] = useState([]);
    // const [date, setDate] = useState([]);

    const fetchData = () => {
            axios
            .get(`${BASE_URL}?api_key=${API_KEY}&count=21`)
            .then((res) => {
                console.log(res.data)
                setNasaCard(res.data);
                // setInfo(res.data.explanation);
                // setTitle(res.data.title);
                // setDate(res.data.date);
                
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
            {/* <Cards details={nasaCard} key={nasaCard[1]}/> */}
            {nasaCard.map( cardInfo => {
                console.log(cardInfo)
                return <Cards key={cardInfo.date} details={cardInfo} />
            })}
        </div>
    )
}

export default AllCards;