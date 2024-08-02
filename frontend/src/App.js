import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './template/Layout';
import Home from './components/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;