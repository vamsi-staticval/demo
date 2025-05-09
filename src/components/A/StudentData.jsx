import { Box, Paper, Button } from '@mui/material';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
export default function StudentData() {
  const navigate = useNavigate();
  const location = useLocation();
  const studentdata = location.state?.student;
  return (
    <>
      <Box className='flex'>
        <div className='m-3'>
          <Button
            variant='contained'
            onClick={() => {
              navigate('/buddies');
            }}
          >
            Previous
          </Button>
        </div>
        <div className=' w-full text-center'>
          <h1 className='text-center  text-blue-500'>
            Hi, welcome {studentdata.firstName + ' ' + studentdata.lastName}
          </h1>
        </div>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ width: '60%', margin: '0 auto', padding: 2 }}
      >
        <Table>
          <TableBody>
            {Object.keys(studentdata).map((key_name) => (
              <TableRow key={studentdata.id}>
                <TableCell component='th' scope='row'>
                  <b>{key_name}</b>
                </TableCell>
                <TableCell>{studentdata[key_name]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
