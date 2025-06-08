
import './App.css'
import P1 from './screens/p1'
import P2 from './screens/p2'
import P3 from './screens/p3'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<P1 />} />
          <Route path="/playlist/:playlistId" element={<P2 />} />
          <Route path="/playlist/:playlistId/search" element={<P3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
