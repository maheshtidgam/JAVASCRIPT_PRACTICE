// src/components/Signup.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <Box width="300px" mx="auto" mt="100px">
      <Text fontSize="2xl" mb="4">Sign Up</Text>
      <VStack spacing="4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSignup}>Sign Up</Button>
      </VStack>
    </Box>
  );
};

export default Signup;
