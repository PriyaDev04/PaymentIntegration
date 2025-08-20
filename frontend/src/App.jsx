import React from 'react'
import Products from './components/Products'
import PaymentSuccess from './components/PaymentSuccess'
import proImages from './components/data'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Products priya={proImages} />} />
        <Route path='/paymentSuccess' element={<PaymentSuccess />} />

      </Routes>
    </Router>
  )
}

export default App 