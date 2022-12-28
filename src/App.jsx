import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import About from './Pages/About us/about'
import Contact from './Pages/contact/contact'
import Header from './componets/header'
import Footer from './componets/footer'
import Ok from './componets/contact'

function App() {

  return (
    <div className="App">
     <Router>
    <Header/>
       <Routes>
      <Route path=''element={<Home/>}/>
      <Route path='About'element={<About/>}/>
      <Route path='Contact'element={<Contact/>}/>


       </Routes>
     
       <Ok/>
        <Footer/>
     


    </Router>
    
    </div>
  )
}

export default App
