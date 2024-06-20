import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function atendidosProvider () {

    const [mentalNews, setMentalNews] = useState([])
    useEffect(() => {
        axios.get('https://observatorio-mental.onrender.com/api/getMentalNews')
        .then(treated => setMentalNews(treated.data))
        .catch(err => console.error(err))
    },[])

    return mentalNews;
}