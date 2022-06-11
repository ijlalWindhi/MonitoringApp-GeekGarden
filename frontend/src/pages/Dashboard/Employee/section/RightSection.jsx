import React, {useState, useEffect} from 'react'
import Timer from '../../../../components/fragment/Timer/Timer'
import CardTask from '../../../../components/fragment/Card Deadline Task/CardDeadlineTask'

export default function RightSection() {
    const [data, setData] = useState({})
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item'))
        if(data) {
            setData(data)
        }
    }, [])

    return (
        <div>
            <Timer/>
            <div className='my-5'>
                <h1 className='text-4xl font-medium'>Rp{data.salary}</h1>
                <h3 className='text-input-200 text-xl'>monthly salary</h3>
            </div>
            <div>
                <h1 className='text-2xl font-medium mb-3'>Top 4 Deadline Task</h1>
                <CardTask/>
            </div>
        </div>
    )
}
