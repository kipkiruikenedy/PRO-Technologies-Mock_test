import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path='/' element={<Home />}></Route>
   <Route exact path='/pricing' element={<Pricing />}></Route>
   <Route exact path='/checkout' element={<Checkout />}></Route>
    </Routes>
    </Router>
     
    </div>
  )
}

export default App
