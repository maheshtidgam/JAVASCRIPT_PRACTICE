// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
