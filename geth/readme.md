-   web3설치함

*   트랜잭션(거래) 발생 -> 트랜잭션 풀에 담음 -> 채굴 -> 블록체인 네트워크에 저장

const Web3 = require('web3')
const ethTx = require('ethereumjs-tx').Transaction

-   geth --datadir node1 account new-->새로운 계정을 만드는 명령어
    //puppeth해서 summer.json만듬
    //--datadir
    ---->geth의 데이터베이스들과 키 스토어를 위한 데이터 디렉터리를 지정합니다.

//왜 node안에 geth는 안생겻을가 -->위에 명령어를 쳐주니 생겻다

-   게쓰실행
    geth --datadir ./node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,miner,net,txpool,web3,personal,eth" --syncmode full --networkid 7722 --port 30300 --allow-insecure-unlock
    --->이걸로 geth설정

-   geth attach http://127.0.0.1:9000 //작동중인 geth 노드의 콘솔에 연결 후 사용
-   personal.newAccount('1234') //계정생성(내 계정정보가 들어있는 이 json파일을 열어볼수있는 비번 ,계정을 lock/unlock 할수있는 접근권한을 컨트롤할수있는 비번)
    //"0xb362af453864267138538df47e36286bceae7000"
-   eth.accounts; //["0xb362af453864267138538df47e36286bceae7000"] //계정조회
-   eth.coinbase; //"0xb362af453864267138538df47e36286bceae7000" //채굴보상 획득 계정

-   admin :내 노드의 정보를 모두 조회해줌
-   admin.nodeInfo
-   admin.nodeInfo.enode
    -->enode즉 이더리움 노드는 내노드의 ip주소
    ( ipc - addtopeer 연결을 해야한다면 내 노드의 주소를 줘야해서 필요)
    ---> "enode://427bd332347cd9597681073c2a751e84e14a9006db28b31a50b9102608f457794fc9eb19aa0f8fcbdf1f6ffbc631597682057cec854353600c0443361e54173b@14.7.171.220:30303?discport=59775"

-   admin.datadir
    ---> "/home/yerin/.ethereum"

utc 해서 파일이 생성되어있을거임(utc파일은 keystore안에 생기는데 프라이빗키를 저장해둔 파일?)
--->UTC—2022-06-30T02-03-37.104215000Z—62af7eea17fbeb34bad4d49f31bbcc2b0200c312

저 파일을 메타마스크에 넣고 비번 쳐주면 계정이 메타마스크에 연결됨

-   admin.peers
    []

계정으로 바꾸기 그럼여깅에 채굴되면 코인이 채워짐

-   miner.setEtherbase(eth.accounts[1])

-   miner.start(1) //채굴 시작
-   miner.stop() //채굴 중단
-   eth.getBalance(eth.coinbase)-- wei단위

이더단위로 보고프면

-   web3.fromWei(eth.getBalance(eth.coinbase),'ether')

-   eth.getBalance('0x3dcf44b4b7523f584e211e3e514dc91384febed2') //0

-   eth.getBalance(eth.coinbase)

-   web3.fromWei(eth.getBalance('0x3dcf44b4b7523f584e211e3e514dc91384febed2'),'ether')

-   personal.sendTransaction({ from:"0xa60907c481933adcea6db4653d558f1168dca4f7",
    to:"0x3dcf44b4b7523f584e211e3e514dc91384febed2", value:web3.toWei(1,"ether") }, "1234" )
    --->0x6b8ee731f7c2ef988295671cef0eb855a6d66eb270e6357c0e219e1133a01b7a
    -->확인해보면 없다 아직 통해 배포되지 않았기 때문  
    -->채굴하기

-eth.pendingTransactions 풀에 저장되어 있는 트랜잭션 정보 확인
-->채굴전에는 저장되어 있던 거래정보가 채굴후에는 []로나온다

-   eth.blockNumber:생성된 블록수 조회
-   eth.getBlock(0) 0번째 블럭의 정보 출력

-   eth.getTransactionFromBlock( )을 사용
    원하는 트랜잭션이 존재하는 해당 블록의 숫자를 입력해 줍니다.

-   eth.getTransactionFromBlock( ).input 을 사용해서
    input 값만을 추출 할 수 있습니다.
