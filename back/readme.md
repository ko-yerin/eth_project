??geth는 이더리움 네트워크 구축하는 아이고
web3로 geth에서 정보를 요청해서 받아오고
그걸 express서버에서 받아와서
db에 넣어주고 프론트에서 요청하면 보여주는???

# web3

web3설치
-npm install web3

# express 서버 구축

express 설치

-npm i express

-   nodemon설치
    -npm install -g nodemon
    -package.json에 script부분에  
    "start": "nodemon --watch server/ server/basic-server.js"추가

# 시퀄라이즈

MYSQL 작업을 쉽게 할 수 있도록 도와주는 라이브러리

-   설치

npm i sequelize mysql2
npm i -g sequelize-cli
sequelize init

//시퀄라이즈
/\*
ORM(Object Relational Mappimg)
객체를 통해 간접적으로 데이터베이스를 다루는 방식
직접 SQL 쿼리를 작성하지 않고 프로그래밍 언어를 이용하여 DB에 접근할 수 있음

sequelize

      얘는  DBMS MYSQL ,oracle, mssql,  postgresql... db에 관련된걸 관리할때 씀


      mysql.createPool(접속정보)
      nodejs코드에서 -->mysql접속


      SQL
      query('select * from board')-->DB

      webserver select문 작성해서 보냈다면,

      ORM find()// select * from


      //다이렉트로 보내는게 더빠르다
      근데 왜 중간에 멀껴서 보낼까?orm
      편의성, 호환성


      mysql, oracle  날짜관련  쿼리문이 조금다름
      하지만  orm을 쓰면  하나의 함수로 같은 결과

//DB연결해봅시다

const {Sequelize, DataTypes} = require('sequelize')

//인자값4개
//1.데이터베이스명 create database ingoo
//2. mysql -u rhdpfls12
//3. mysql -u rhdpfls12 -p rhdpfls12
//4. Object
// 4.1 host:localhost
// 4.2 dialect:'mysql'
const sequelize = new Sequelize('example','rhdpfls12','rhdpfls12',{//여기서 example데이터베이스 만듬
host:'localhost',
dialect:'mysql'
})

// sequelize.sync()
// .then(date=>{
// console.log('접속됨')
// })
// .catch(error =>{
// console.log('접속실패함')
// })

//위랑 같은코드
async function init(){
try{
comment()//object
await sequelize.sync({force:true})
console.log('접속됨')

        insert()
        //코드작성하면  sequelize 관련 코드를 실행할수있따
    }catch(e){
        console.log('접속실패함')
    }

}

init()

/\* 이거 만들어보쟈
create table comment(
idx auto_increment
subject varchar(30) not null,
content varchar(100) not null,
)charset-utf8mb;

\*/

function comment(){
//model을 만들어볼거다 그냥 형태를 객체형태로담을수있는 공간을 만드는거임
const Comment=sequelize.define('comment',{ //인자3개 스트링테이블명과 객체와 객체
//필드내용
subject:{
type:DataTypes.STRING(30),
allowNull:false,
},
content:{
type:DataTypes.STRING(50),
allowNull:false,
}
},{
// 옵션정보
tableName:'ingoo',
timestamps:false
})

    return Comment

}

const insert = async () => {
const USER = comment()
await USER.create({subject:'asdfas',content:'asdfasf'})
}

// 데이터를 그냥 줄테니 객체로 만들어주는게 mapping했다고 함

# cors

-npm i cors
