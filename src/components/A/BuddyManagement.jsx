import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { SearchIcon } from '@heroicons/react/outline';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function BuddyManagement() {
  const [studentsData, setstudentData] = useState([]);
  const [searchParam, setsearchParam] = useState('');
  // Fetching Data From End point or JSON File
  useEffect(() => {
    axios
      .get('http://localhost:4000/studentsData')
      .then((response) => setstudentData(response.data))
      .catch((error) => console.log(error));
  }, []);
  //Filtering Data by Id or  class name or class
  const filteredData = studentsData.filter(
    (item) =>
      item.studentUniqueNumber.includes(searchParam) ||
      item.firstName.toLowerCase().includes(searchParam) ||
      item.lastName.toLowerCase().includes(searchParam) ||
      item.className.toString().includes(searchParam),
  );

  //Displaying only Specific Columns
  const columns = [
    {
      field: 'studentUniqueNumber',
      headerName: 'Student No',
      flex: 1,
      renderCell: (param) => (
        <Link
          to='/studentdata'
          className='no-underline'
          state={{ student: { ...param.row } }}
        >
          {param.value}
        </Link>
      ),
    },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1,
      headerClassName: 'bold-header',
    },
    { field: 'lastName', headerName: 'Last name', flex: 1 },
    { field: 'className', headerName: 'class', flex: 1 },
    { field: 'mobileNumber', headerName: 'Mobile', flex: 1 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <div className='text-center'>
        <Typography variant='h3' className=' font-bold mt-5 text-blue-500'>
          {' '}
          Students Data
        </Typography>
        <Typography component='div' className=' font-bold mt-5 text-blue-500'>
          {' '}
          Total Number of Students are {studentsData.length}
        </Typography>

        <div className='flex text-center  p-2 rounded-lg border-2 border-gray-500 max-w-md ml-auto mb-3 mr-5'>
          <input
            type='email'
            className='w-full outline-none bg-transparent text-gray-600 text-sm pl-3 pr-10 '
            placeholder='Search here by Id, Name, Class'
            onChange={(e) => setsearchParam(e.target.value)}
          />
          <SearchIcon className='   size-10 text-gray-600  mr-3  ' />
        </div>
        <Paper className='w-full border rounded-md shadow '>
          <DataGrid
            rows={filteredData}
            columns={columns}
            getRowId={(row) => row.studentUniqueNumber}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              border: 0,
            }}
          />
        </Paper>
      </div>
    </>
  );
}
