import './App.css'
import Home from './Liff/Home'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
