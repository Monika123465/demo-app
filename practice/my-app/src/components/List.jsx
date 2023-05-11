import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/list.css'

const url = 'http://localhost:8000/api/form'

const List = () => {
    const [list, setList] = useState([]);

    const fetchForms = async () => {
        try {
            const { data } = await axios.get(url);
            setList(data);
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        fetchForms();
    }, [])

    return (
        <div className='list'>
            <button className='submit' onClick={fetchForms
            }>
                refetch
            </button>

            <ul className='ul'>

                {
                    list.map(el => {
                        return <li className='li'>
                            {el.name} - {el.email} - {el.password}
                        </li>
                    })
                }
            </ul>


        </div>
    )
}

export default List