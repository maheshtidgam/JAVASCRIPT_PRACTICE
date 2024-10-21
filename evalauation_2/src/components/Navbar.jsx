// src/components/Navbar.js
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Box, Button } from '@chakra-ui/react'; // Ensure Box is imported
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <Box bg="teal.500" p={4}>
      <Link to="/">
        <Button colorScheme="teal">Login</Button>
      </Link>
      <Link to="/dashboard">
        <Button colorScheme="teal" ml={4}>Dashboard</Button>
      </Link>
      <Button colorScheme="red" onClick={handleLogout} ml={4}>Logout</Button>
    </Box>
  );
};

export default Navbar;