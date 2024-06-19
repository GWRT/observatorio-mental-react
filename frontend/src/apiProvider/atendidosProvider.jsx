import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function atendidosProvider () {

    const [treated, setTreated] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/getTreatedForDiagnosis')
        .then(treated => setTreated(treated.data))
        .catch(err => console.error(err))
    },[])

    return treated;
}