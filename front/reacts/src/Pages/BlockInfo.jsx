import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Main } from './main'
import { useParams } from 'react-router-dom'

const BlockInfo = () => {
    const [info, setInfo] = useState([])
    const param = useParams()

    // const stringOut = param.number.substring(4)
    // console.log(stringOut.number)

    const getBlock = async (number) => {
        const response = await axios.get(`http://localhost:7200/BlockInfo/${number}`)

        const numberData = response.data
        console.log('1111', numberData)

        // const blockInfo = response.data.map((v, k) => {
        //     return (
        //         <ul key={k}>
        //             <li>{v.number}</li>
        //         </ul>
        //     )
        // })
        // setInfo(blockInfo)
        setInfo(numberData)
    }

    useEffect(() => {
        getBlock(param.number)
    }, [])

    return (
        <ul>
            <li>createdAt: {info.createdAt}</li>
            <li>difficulty: {info.difficulty}</li>
            <li>gasLimit: {info.gasLimit}</li>
            <li>gasUsed: {info.gasUsed}</li>
            <li>hash: {info.hash}</li>
            <li>miner: {info.miner}</li>
            <li>nonce: {info.nonce}</li>
            <li>number: {info.number}</li>
            <li>timestamp: {info.timestamp}</li>
            <li>transactions: {info.transactions}</li>
            <li>transactionsRoot: {info.transactionsRoot}</li>
            <li>updatedAt: {info.updatedAt}</li>
        </ul>
    )
}

export default BlockInfo
