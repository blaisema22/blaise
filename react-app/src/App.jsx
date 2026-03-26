import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ParentList from './components/school/ParentList'
import AddParent from './components/school/AddParent'
import TradeList from './components/school/TradeList'
import TraineeList from './components/school/TraineeList'

export default function App() {
  return (
    <div>
      <nav style={{padding:10, borderBottom:'1px solid #ccc'}}>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/parents">Parents</Link> | <Link to="/trades">Trades</Link> | <Link to="/trainees">Trainees</Link>
      </nav>
      <div style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/parents" element={<ParentList/>} />
          <Route path="/parents/add" element={<AddParent/>} />
          <Route path="/trades" element={<TradeList/>} />
          <Route path="/trainees" element={<TraineeList/>} />
        </Routes>
      </div>
    </div>
  )
}
