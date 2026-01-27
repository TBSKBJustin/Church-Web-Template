import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ImNewHere from './pages/ImNewHere'
import Leadership from './pages/Leadership'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/im-new-here" element={<ImNewHere />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </Layout>
  )
}

export default App
