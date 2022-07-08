import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = () => {
    const [data, setData] = useState([])

    const getBlock = async () => {
        const response = await axios.get('http://localhost:7200')

        const dataArr = response.data.map((v) => {
            let number = v.number
            let miner = v.miner
            let transactions = v.transactions
            v = { number, miner, transactions }
            return v
        })
        setData(dataArr)
        // console.log('Asdf', [data])
    }

    const dataArrOut = () =>
        data.map((v, k) => {
     