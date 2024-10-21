// // src/components/EmployeeTable.js
// import React from 'react';
// import { Table, Tbody, Tr, Td, Button, Th, Thead } from '@chakra-ui/react';

// const EmployeeTable = ({ employees }) => {
//   return (
//     <Table variant="striped">
//       <Thead>
//         <Tr>
//           <Th>First Name</Th>
//           <Th>Last Name</Th>
//           <Th>Email</Th>
//           <Th>Department</Th>
//           <Th>Salary</Th>
//           <Th>Actions</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {employees.map((employee) => (
//           <Tr key={employee.id}>
//             <Td>{employee.firstName}</Td>
//             <Td>{employee.lastName}</Td>
//             <Td>{employee.email}</Td>
//             <Td>{employee.department}</Td>
//             <Td>{employee.salary}</Td>
//             <Td>
//               <Button colorScheme="blue" onClick={() => handleEdit(employee)}>Edit</Button>
//               <Button colorScheme="red" onClick={() => handleDelete(employee.id)}>Delete</Button>
//             </Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// };

// export default EmployeeTable;

// src/components/EmployeeTable.jsx
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Department</Th>
          <Th>Salary</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {employees.map((employee) => (
          <Tr key={employee.email}>
            <Td>{employee.firstName}</Td>
            <Td>{employee.lastName}</Td>
            <Td>{employee.email}</Td>
            <Td>{employee.department}</Td>
            <Td>{employee.salary}</Td>
            <Td>
              <Button colorScheme="yellow" onClick={() => onEdit(employee)}>Edit</Button>
              <Button colorScheme="red" onClick={() => onDelete(employee.email)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EmployeeTable;

