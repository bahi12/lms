import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './template/Layout';
import Home from './components/Home';
import Login from './components/auth/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="*" element={NotFound} />
      </Routes>
    </Layout>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default App;