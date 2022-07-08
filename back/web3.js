const Web3 = require('web3')
const { Block } = require('./models/index')
const db = require('./models/index')

// let accounts

// let sender
// let received

let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))
// console.log(web3)

// 최근블럭번호반환  --->31
const block = async () => {
    const latestBlock = await web3.eth.getBlockNumber() //31
    console.log('최근블럭번호', latestBlock)

    const arr = new Array()

    for (let block = 0; block <= latestBlock; block++) {
        const blockInfo = await web3.eth.getBlock(block)
        arr.push(blockInfo)
        // console.log(arr) //코드블럭을보면 밖에서안은 못보니 포문안에 콘솔을 작성해야 찍힌다
    }
    return arr
}

const saveBlockInfo = async (a) => {
    const getBlockInfo = await block()
    // console.log('12', getBlockInfo)

    for (let i of getBlockInfo) {
        const arrout = i

        // console.log(arrout)
        // console.log(arrout.number)
        db.Block.findOrCreate({
            where: {
                difficulty: arrout.difficulty,
                gasLimit: arrout.gasLimit,
                gasUsed: arrout.gasUsed,
                hash: arrout.hash,
                miner: arrout.miner,
                nonce: arrout.nonce,
                number: arrout.number,
                timestamp: arrout.timestamp,
                transactions: arrout.transactions.toString(),
                transactionsRoot: arrout.transactionsRoot,
            },
            default: {
                difficulty: arrout.difficulty,
                gasLimit: arrout.gasLimit,
                gasUsed: arrout.gasUsed,
                hash: arrout.hash,
                miner: arrout.miner,
                nonce: arrout.nonce,
                number: arrout.number,
                timestamp: arrout.timestamp,
                transactions: arrout.transactions.toString(),
                transactionsRoot: arrout.transactionsRoot,
            },
        })
    }
}

saveBlockInfo()

// const accountsInfo = async () => {
//     const sendTransactionCount = await web3.eth.getTransactionCount('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
//     console.log('보낸거래횟수', sendTransactionCount)
//     const balance = await web3.eth.getBalance('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
//     console.log('잔액', balance)
// }
// accountsInfo()

// const b = async () => {
//     block = await web3.eth.getBlock(31)

//     for (let block = 0; block <= latestBlock; block++) {
//         return block
//     }
//     console.log(block)
// }
// b()

// //전체계정가져옴
// //[
// //    '0xA60907c481933AdCEA6DB4653d558f1168dCa4f7',
// //    '0x3DCf44b4B7523F584e211E3E514Dc91384FebeD2'
// //  ]
// const b = async () => {
//     accounts = await web3.eth.getAccounts()
//     sender = accounts[0]
//     received = accounts[1]
//     // console.log(sender)
//     console.log('전체계정', accounts)
//     return accounts
// }

// b()
// console.log('asdf', accounts)

// //0번째 계정의 잔액을 가져온다--->안나옴 ㅜㅜ---> Cannot read properties of undefined (reading '0')
// //'0xA60907c481933AdCEA6DB4653d558f1168dCa4f7'--->나옴  --->60000000000000000000
// const c = async () => {
//     const balance = await web3.eth.getBalance('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
//     console.log('0번쨰 계정의 잔액', balance)
// }

// c()

// //트랜잭션 횟수구하는 매서드--->   //2
// //sender로 하니 안나옴
// const d = async () => {
//     const txCount = await web3.eth.getTransactionCount('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7')
//     console.log('0번쨰 계정의 트랜잭션 횟수', txCount)
// }

// d()

// const e = async () => {
//     const txCount = await web3.eth.getTransactionCount('0xA60907c481933AdCEA6DB4653d558f1168dCa4f7') //2
//     const privateKey = Buffer.from('A60907c481933AdCEA6DB4653d558f1168dCa4f7', 'hex')
//     console.log(privateKey)
// }
// e()

//제일 먼저 할 일은 가장 최근에 만들어진 블럭 번호를 아는 것이다.
// 이 번호를 알아야 블럭 번호가 0 번인 제네시스 블럭부터 현재 블럭까지 읽어 데이터베이스에 저장할 수 있기 때문이다.
// get block으로 0번부터 getBlockNumber으로 반환된 최근블록까지의 정보를 모두 가져온다.

// 0번째 블럭부터 블럭을 순회할때 블럭 내에 들어있는 트랜잭션 해쉬값으로 트랜잭션 정보를 읽어온다

// 불러온 트랜잭션에 대하여 from 주소 to 주소를 파싱한다.

// 이벤트도 따로 조회하여 데이터를 마련한다.

// filter.watch()
// 필터를 생성한 다음 watch 함수를 호출하여 이벤트를 모니터링한다.
// watch 함수는 새로운 블럭이 생성될 때마다 호출된다.
// 따라서 이 함수를 사용하면 블럭이 생길 때 마다 블럭 정보를 데이터베이스에  저장할 수 있다.

module.exports = { saveBlockInfo }
