import './App.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsPage from './view/NewsPage/NewsPage'
import UserPage from './view/UserPage/UserPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <Link to="/genesis-tik-tuk/">tikTuk</Link>
        </header>
        <Routes>
          <Route element={<NewsPage />} path="/genesis-tik-tuk/" />
          <Route element={<UserPage />} path="genesis-tik-tuk/:name" />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
