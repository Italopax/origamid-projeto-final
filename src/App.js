import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import User from './components/user/User';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserStorage } from './UserContext';
import ProtectedRoute from './components/helper/ProtectedRoute';
import { UserContext } from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="conta/*" element={<User />} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App;

