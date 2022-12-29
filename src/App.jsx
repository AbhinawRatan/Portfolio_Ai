import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import About from './Pages/About us/about'
import Contact from './Pages/contact/contact'
import Daizy from './Pages/Blogs/Daizy/daizy'
import Jpeg from './Pages/Blogs/Jpeg/jpeg'
import AR from './Pages/Blogs/AR101/ar'
import Imposter from './Pages/Blogs/Imposter/imposter'



import Header from './componets/header'
import Footer from './componets/footer'
import Ok from './componets/contact'
import ScrollToTop from './scrollToTop'

function App() {

  return (
    <div className="App">
     <Router>
      <ScrollToTop/>
    <Header/>
       <Routes>
      <Route path=''element={<Home/>}/>
      <Route path='About'element={<About/>}/>
      <Route path='Contact'element={<Contact/>}/>
      <Route path='/Blogs/daizy'element={<Daizy/>}/>
      <Route path='/Blogs/jpeg'element={<Jpeg/>}/>
      <Route path='/Blogs/AR101'element={<AR/>}/>
      <Route path='/Blogs/Imposter'element={<Imposter/>}/>




       </Routes>
     
       <Ok/>
        <Footer/>
     


    </Router>
    
    </div>
  )
}

export default App
