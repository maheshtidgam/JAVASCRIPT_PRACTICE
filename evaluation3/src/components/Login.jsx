// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <Box width="300px" mx="auto" mt="100px">
      <Text fontSize="2xl" mb="4">Login</Text>
      <VStack spacing="4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
      </VStack>
    </Box>
  );
};

export default Login;
