Object.defineProperty(exports, '__esModule', { value: true })
const express = require('express')
const app = express()
const Web3 = require('web3')
const { sequelize } = require('./models')
const { saveBlockInfo } = require('./web3')

let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

sequelize
    .sync({ force: true })
    .then(() => {
        console.log('접속됨')
    })
    .catch((e) => {
        console.log(e)
        console.log('접속실패함')
    })

const autoTimer = setInterval(() => {
    saveBlockInfo()
}, 20000)

// const getweb3 = () => {
//     web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))
//     // console.log(web3)
// }

// getweb3()

// const accountsInfo = async () => {
//     const sendTransactionCount = await web3.eth.getTransactionCount('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
//     console.log('보낸거래횟수', sendTransactionCount)
//     const balance = await web3.eth.getBalance('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
//     console.log('잔액', balance)
// }
// accountsInfo()

// app.get('/', (req, res) => {
//     getBlockInfo().then((blockInfo) => {
//         res.send(blockInfo)
//     })
// })

app.get('/', async (req, res) => {
    // const sendTransactionCount = await web3.eth.getTransactionCount('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
    // const balance = await web3.eth.getBalance('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')

    res.send('hello')
    // res.send(blockInfo, sendTransactionCount, balance)
})

app.listen(9500, () => {
    console.log('서버연rif')
})
