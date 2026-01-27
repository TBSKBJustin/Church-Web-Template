import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Beliefs from './pages/Beliefs'
import Leadership from './pages/Leadership'
import Sermons from './pages/Sermons'
import ImNewHere from './pages/ImNewHere'
import Give from './pages/Give'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/im-new-here" element={<ImNewHere />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  )
}

export default App
