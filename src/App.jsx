import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy load page components
const Home = lazy(() => import('./Pages/Home/home'))
const About = lazy(() => import('./Pages/About us/about'))
const Contact = lazy(() => import('./Pages/contact/contact'))
const Daizy = lazy(() => import('./Pages/Blogs/Daizy/daizy'))
const Jpeg = lazy(() => import('./Pages/Blogs/Jpeg/jpeg'))
const AR = lazy(() => import('./Pages/Blogs/AR101/ar'))
const Imposter = lazy(() => import('./Pages/Blogs/Imposter/imposter'))

import Header from './componets/header'
import Footer from './componets/footer'
import Ok from './componets/contact'
import ScrollToTop from './scrollToTop'

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div>
  </div>
)

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='/Blogs/daizy' element={<Daizy />} />
            <Route path='/Blogs/jpeg' element={<Jpeg />} />
            <Route path='/Blogs/AR101' element={<AR />} />
            <Route path='/Blogs/Imposter' element={<Imposter />} />
          </Routes>
        </Suspense>
        <Ok />
        <Footer />
      </Router>
    </div>
  )
}

export default App
