// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme, Button } from '@chakra-ui/react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          bg: colorMode === "light" ? "gray.100" : "gray.800",
          color: colorMode === "light" ? "black" : "white",
        },
      },
    },
  });

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Button onClick={toggleColorMode} position="fixed" top="4" right="4">
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
