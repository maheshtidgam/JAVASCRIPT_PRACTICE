// // src/components/Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import { VStack, Button, Input } from '@chakra-ui/react';
// import { useDisclosure } from '@chakra-ui/react'; // Import useDisclosure here
// import EmployeeForm from './EmployeeForm';
// import EmployeeTable from './EmployeeTable';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase'; // Ensure this import points to your Firebase config

// const Dashboard = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const { isOpen, onOpen, onClose } = useDisclosure(); // Use the useDisclosure hook

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const employeeCollection = collection(db, "employees");
//       const employeeSnapshot = await getDocs(employeeCollection);
//       const employeeList = employeeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setEmployees(employeeList);
//     };

//     fetchEmployees();
//   }, []);

//   const handleAddEmployee = (newEmployee) => {
//     setEmployees((prev) => [...prev, newEmployee]);
//   };

//   const filteredEmployees = employees.filter(employee => 
//     employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <VStack spacing={4}>
//       <Input 
//         placeholder="Search by First Name" 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)} 
//       />
//       <Button colorScheme="teal" onClick={onOpen}>Add Employee</Button>
//       <EmployeeForm isOpen={isOpen} onClose={onClose} onAdd={handleAddEmployee} />
//       <EmployeeTable employees={filteredEmployees.slice(0, 5)} />
//       {/* Add Pagination controls here */}
//     </VStack>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { VStack, Button, Input } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
import { ref, get, remove, set } from 'firebase/database';
import { rtdb } from '../firebase'; // Import your Realtime Database instance

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeRef = ref(rtdb, 'employees');
      const snapshot = await get(employeeRef);
      const employeeList = snapshot.val() ? Object.values(snapshot.val()) : [];
      setEmployees(employeeList);
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const handleDeleteEmployee = async (email) => {
    const employeeRef = ref(rtdb, 'employees/' + email.replace('.', '_'));
    await remove(employeeRef);
    setEmployees((prev) => prev.filter(emp => emp.email !== email));
  };

  const handleEditEmployee = async (updatedEmployee) => {
    const employeeRef = ref(rtdb, 'employees/' + updatedEmployee.email.replace('.', '_'));
    await set(employeeRef, updatedEmployee);
    setEmployees((prev) => prev.map(emp => emp.email === updatedEmployee.email ? updatedEmployee : emp));
  };

  const filteredEmployees = employees.filter(employee => 
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VStack spacing={4}>
      <Input 
        placeholder="Search by First Name" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <Button colorScheme="teal" onClick={onOpen}>Add Employee</Button>
      <EmployeeForm isOpen={isOpen} onClose={onClose} onAdd={handleAddEmployee} />
      <EmployeeTable 
        employees={filteredEmployees.slice(0, 5)} 
        onDelete={handleDeleteEmployee} 
        onEdit={handleEditEmployee} 
      />
      {/* Add Pagination controls here */}
    </VStack>
  );
};

export default Dashboard;
