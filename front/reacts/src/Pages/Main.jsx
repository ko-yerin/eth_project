import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [data, setData] = useState(null)

    const onClick = async () => {
        console.log('콘솔', 'ㅁㄴㅇㄴㅁ')
        const a = await axios.post('http://127.0.0.1:9900')

        console.log('aaaa', a)
    }

    useEffect(() => {
        onClick()
    }, [])

    return (
        <>
            <p>blockInfoasdsa{data}</p>
            <button
                onClick={() => {
                    console.log('sadf')
                }}
            >
                fsdf
            </button>
        </>
    )
}

export default Main
