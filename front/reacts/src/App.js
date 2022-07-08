import './App.css'
import Main from './Pages/main'
import BlockInfo from './Pages/BlockInfo'
import Container from './Components/common/Container'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
// 웹에서 쓰이는 컴포넌트  !!   웹개발을 위해서는 react-router-dom만 설치하면 됩니다.
//<BrowserRouter>는 HTML5의 history API를 활용하여 UI를 업데이트!! <BrowserRouter>가 보편적으로 쓰입니다
//<Route>   요청받은 pathname에 해당하는 컴포넌트를 렌더링합니다.

function App() {
    return (
        <>
            <Router>
                <h1>block Explorer</h1>
                <Container>
                    <Routes>
                        <Route path="/" index element={<Main />} />
                        <Route path="/BlockInfo/:number" element={<BlockInfo />} />
                    </Routes>
                </Container>
            </Router>
        </>
    )
}

export default App
