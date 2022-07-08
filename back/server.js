Object.defineProperty(exports, '__esModule', { value: true })
const express = require('express')
const app = express()
const Web3 = require('web3')
const { sequelize } = require('./models')
const { saveBlockInfo } = require('./web3')
const cors = require('cors')
const db = require('./models/index')

let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

app.use(
    cors({
        origin: '*',
        credential: 'true',
    }),
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 클라이언트로 부터 받은 http 요청 메시지 형식에서 body데이터를 해석하기 위해서 express.json()와 express.urlencoded()로 처리가 필요
// extended: false로 옵션을 주면 NodeJs에 기본으로 내장된 querystring모듈을 사용합니다.

sequelize
    .sync({ force: false })
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

app.get('/', async (req, res) => {
    const blockList = await db.Block.findAll({
        order: [['number', 'desc']],
    })

    res.send(blockList)
})

app.get('/BlockInfo/:number', async (req, res) => {
    const { number } = req.params
    const getnumber = number.substring(1) //26

    const blockNumberList = await db.Block.findOne({
        raw: true,
        where: { number: getnumber },
    })

    console.log('ADF', blockNumberList)
    res.send(blockNumberList)
})

app.listen(7200, () => {
    console.log('서버연rif')
})
