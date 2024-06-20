import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function atendidosDepartmentProvider () {

    const [treated, setTreated] = useState([])
    useEffect(() => {
        axios.get('https://observatorio-mental.onrender.com/api/getTreatedByDepartment')
        .then(treated => setTreated(treated.data))
        .catch(err => console.error(err))
    },[])

    return treated;
}