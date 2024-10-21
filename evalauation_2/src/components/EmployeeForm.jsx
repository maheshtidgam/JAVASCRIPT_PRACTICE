// // src/components/EmployeeForm.jsx
// import React from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select } from '@chakra-ui/react';

// const EmployeeForm = ({ isOpen, onClose, onAdd }) => {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [department, setDepartment] = React.useState('');
//   const [salary, setSalary] = React.useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newEmployee = { firstName, lastName, email, department, salary };
//     onAdd(newEmployee);
//     onClose(); // Close the modal after submission
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Add Employee</ModalHeader>
//         <ModalBody>
//           <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//           <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//           <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <Select placeholder="Select Department" value={department} onChange={(e) => setDepartment(e.target.value)}>
//             <option value="Tech">Tech</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Operations">Operations</option>
//           </Select>
//           <Input placeholder="Salary" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
//         </ModalBody>
//         <ModalFooter>
//           <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
//           <Button onClick={onClose} ml={3}>Cancel</Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default EmployeeForm;


// src/components/EmployeeForm.jsx
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select } from '@chakra-ui/react';
import { ref, set } from 'firebase/database';
import { rtdb } from '../firebase'; // Import your database instance

const EmployeeForm = ({ isOpen, onClose, onAdd }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [salary, setSalary] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { firstName, lastName, email, department, salary };
    
    // Save employee data to Realtime Database
    const employeeRef = ref(rtdb, 'employees/' + email.replace('.', '_')); // Use email as unique ID
    await set(employeeRef, newEmployee);

    onAdd(newEmployee); // Update the state in the parent component
    onClose(); // Close the modal after submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Employee</ModalHeader>
        <ModalBody>
          <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Select placeholder="Select Department" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
          </Select>
          <Input placeholder="Salary" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
          <Button onClick={onClose} ml={3}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmployeeForm;

