import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Employee from './Employee';
import EmployeeDetail from './EmployeeDetail';

const theme = createTheme();

function Employees() {
    let history = useHistory();

    const [employees, setEmployees] = useState([]);
    const [id, setId] = useState();
    const [employee, setEmployee] = useState({});

    async function getEmployees() {
        const response = await fetch('https://officemanager.altd.in/api/frontend/employees');
        const data = await response.json();
        setEmployees(data.data.employees);
    }

    useEffect(() => {
        getEmployees();
    }, []);

    function handleClick(id) {
        setId(id);
        const emp = employees.find((item) => {
            return item.id == id;
        })
        setEmployee(emp);
        window.scrollTo(0, 0);
    }

  return (
    <ThemeProvider theme={theme}>
      <main>
        {id &&
        <EmployeeDetail 
            emp={employee}
        />}
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Employees
            </Typography>
            <Box textAlign='center'>
            <Button 
              sx={{ mt: 2, mb: 1 }} 
              variant="contained"
              onClick={() => {
                history.push('/department_heads');
              }}
            >
            Go back to Department Heads
            </Button>
            </Box>
            <Box textAlign='center'>
            <Button 
              sx={{ mt: 2, mb: 1 }} 
              variant="outlined"
              onClick={() => {
                history.push('/departments');
              }}
            >
            Go back to Departments Page
            </Button>
            </Box>
          </Container>
        </Box>
{/* End hero unit */}
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={6}>
        {employees.map((item) => {
              return <Employee 
                        key={item.id} 
                        name={item.name} 
                        id={item.id} 
                        empNo={item.emp_number} 
                        img={item.profile_image}
                        onClicked={handleClick}  
                    />
            })
        } 
        </Grid>
      </Container>   
      </main>
    </ThemeProvider>
  );
}

export default Employees
