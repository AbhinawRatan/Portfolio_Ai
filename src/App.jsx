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

// Enhanced Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-500 rounded-full animate-spin animation-delay-1000 mx-auto"></div>
      </div>
      <p className="text-lg font-medium text-gray-600 animate-pulse">Loading amazing content...</p>
    </div>
  </div>
)

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        {/* Add margin-top to account for fixed header */}
        <main className="pt-20">
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
        </main>
      </Router>
    </div>
  )
}

export default App
