import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Book from './components/Book'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MimesisSeries from './components/MimesisSeries'


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Book />
      <MimesisSeries />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F2]">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App