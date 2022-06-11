import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import {API_URL} from '../../../utils/constants'

export default function CardDeadline() {
    const [task, setTask] = useState([]);
    const [data, setData] = useState({})
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item'))
        if(data) {
            setData(data)
        }
    }, [])

    const CARD_URL = `${API_URL}task/sortByDeadline/${data.id}`;
    try{
    axios.get(CARD_URL)
        .then(res => {
            setTask(res.data.data)
    })
    }catch(err){
        console.log(err);
    }
    return (
        <>
            {task.map((item) => {
                return(
                    <div className='bg-button-100 mt-3 font-medium rounded-3xl shadow-md cursor-pointer'>
                        <div className='py-3 pl-6'>
                            <div className='flex items-center'>
                                <h1 className='text-md'>{item.name}</h1>
                                <h2 className='text-md pl-3 text-input-200'>{item.project.name}</h2>
                            </div>
                            <h3 className='text-input-100 text-sm pt-1'>{item.deadline}</h3>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
