import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './template/Layout';
import Home from './components/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';



function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route 
                    path="/me" 
                    element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={NotFound} />
      </Routes>
    </Layout>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default App;