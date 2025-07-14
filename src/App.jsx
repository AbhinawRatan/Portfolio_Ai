import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import About from './Pages/About us/about'
import Contact from './Pages/contact/contact'
import BlogList from './Pages/Blogs/blog-list'
import Daizy from './Pages/Blogs/Daizy/daizy'
import Jpeg from './Pages/Blogs/Jpeg/jpeg'
import AR from './Pages/Blogs/AR101/ar'
import Imposter from './Pages/Blogs/Imposter/imposter'
import AIAgents from './Pages/Blogs/AIAgents/ai-agents'
import ModernWebDev from './Pages/Blogs/ModernWebDev/modern-web-dev'

import Header from './componets/header'
import Footer from './componets/footer'
import Ok from './componets/contact'
import ScrollToTop from './scrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="pt-16"> {/* Add top padding to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blogs/daizy" element={<Daizy />} />
            <Route path="/blogs/jpeg" element={<Jpeg />} />
            <Route path="/blogs/ar101" element={<AR />} />
            <Route path="/blogs/imposter" element={<Imposter />} />
            <Route path="/blogs/ai-agents" element={<AIAgents />} />
            <Route path="/blogs/modern-web-dev" element={<ModernWebDev />} />
          </Routes>
        </main>
        <Ok />
        <Footer />
      </Router>
    </div>
  )
}

export default App
