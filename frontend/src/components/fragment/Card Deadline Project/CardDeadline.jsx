import axios from 'axios'
import { useState } from 'react';
import {API_URL} from '../../../utils/constants'

export default function CardDeadline() {
    const CARD_URL = `${API_URL}project/sort`;
    const [projects, setProjects] = useState([]);

    try{
    axios.get(CARD_URL)
        .then(res => {
            setProjects(res.data.data)
    })
    }catch(err){
        console.log(err);
    }
    return (
        <>
            {projects.map((item) => {
                return(
                    <div className='bg-button-100 mt-4 font-medium rounded-3xl shadow-md cursor-pointer'>
                        <div className='text-center py-4'>
                            <h1 className='text-xl'>{item.name}</h1>
                            <h3 className='text-input-100 text-sm pt-1'>{item.deadline}</h3>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
