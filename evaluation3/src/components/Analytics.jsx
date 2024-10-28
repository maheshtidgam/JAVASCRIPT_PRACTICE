// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { Box, Text } from '@chakra-ui/react';

const Analytics = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setEmployeeData(data);

      // Example for salary distribution data
      const salaries = data.map(emp => emp.salary);
      setSalaryData(salaries);
    };

    fetchEmployeeData();
  }, []);

  const departmentCounts = employeeData.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const departmentData = Object.keys(departmentCounts).map(department => ({
    department,
    count: departmentCounts[department],
  }));

  return (
    <Box p="5">
      <Text fontSize="2xl" mb="4">Analytics</Text>
      <Text mb="4">Employees by Department</Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={departmentData}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <Text mb="4">Salary Distribution</Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salaryData.map((salary, index) => ({ name: `Employee ${index + 1}`, salary }))}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="salary" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Analytics;
