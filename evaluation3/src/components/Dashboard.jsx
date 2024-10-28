// src/components/Dashboard.js
import React, { useEffect, useState, useCallback } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  HStack,
  Stack,
  Spinner,
} from '@chakra-ui/react';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, 'employees'));
    const employeesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEmployees(employeesList);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const loadMoreEmployees = async () => {
    if (lastVisible) {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const moreEmployees = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployees((prev) => [...prev, ...moreEmployees]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }
  };

  const addEmployee = async () => {
    if (name && department) {
      await addDoc(collection(db, 'employees'), { name, department });
      setName('');
      setDepartment('');
      fetchEmployees();
    }
  };

  const deleteEmployee = async (id) => {
    await deleteDoc(doc(db, 'employees', id));
    fetchEmployees();
  };

  return (
    <Box p="5">
      <Text fontSize="2xl" mb="4">Employee Dashboard</Text>
      <VStack spacing="4">
        <HStack spacing="4">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
          <Button onClick={addEmployee}>Add Employee</Button>
        </HStack>
        <VStack spacing="4">
          {employees.map(employee => (
            <HStack key={employee.id} spacing="4">
              <Text>{employee.name} - {employee.department}</Text>
              {user && user.email && (
                <>
                  <Button onClick={() => deleteEmployee(employee.id)}>Delete</Button>
                </>
              )}
            </HStack>
          ))}
        </VStack>
        {loading && <Spinner />}
        <Button onClick={loadMoreEmployees}>Load More</Button>
      </VStack>
    </Box>
  );
};

// src/components/Dashboard.js
import { signOut } from 'firebase/auth';

// Inside Dashboard component
const handleLogout = async () => {
  await signOut(auth);
  dispatch(clearUser());
};

// In the return statement
<Button onClick={handleLogout}>Logout</Button>


export default Dashboard;
