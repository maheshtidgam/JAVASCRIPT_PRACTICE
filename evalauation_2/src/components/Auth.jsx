// src/components/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { Button, Input, VStack, Heading } from '@chakra-ui/react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const db = getDatabase();
    await set(ref(db, 'users/' + email.replace('.', '_')), { password });
    navigate('/dashboard');
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading>Login</Heading>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </VStack>
  );
};

export default Auth;
