import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function Admin() {

    let history = useHistory();
    const [depts, setDepts] = useState([]);

    async function getDepartments() {
        const response = await fetch('https://officemanager.altd.in/api/frontend/departments');
        const data = await response.json();
        setDepts(data.data.departments);
    }

    useEffect(() => {
        getDepartments();
    }, []);

    function handleClick() {
        localStorage.clear();
        history.push('/')
    }

    async function deleteDept() {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json' },
          };
          const res = await fetch("https://officemanager.altd.in/api/backend/departments/destroy/1", options);
          const data = await res.json();
    }

    useEffect(() => {
        deleteDept();
    }, []);

    const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    }));

    return (
        <>
        <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              sx={{ py: 6}}
            >
              DEPARTMENTS
            </Typography>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={6}>
              
                {depts.map((item) => {
                    return (
                        <Grid item key={item.id} sm={12} md={6} lg={3}>
                      <Card 
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                          width: '80%',
                          p: '8%',
                          }}
                          image={item.profile_image}
                          alt="random"
                        />
                        <CardContent>
                        <Typography variant="h5" component="h2">
                        {item.department_name}
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => {deleteDept()}} size="small">Delete</Button>
                          <Button size="small">Edit</Button>
                        </CardActions>
                      </Card>
                      </Grid>
                    )}
                )}
              
            </Grid>
        </Container>
        <Box textAlign='center'>
            <Button 
              sx={{ mt: 2, mb: 1 }} 
              variant="outlined"
              onClick={() => {handleClick()}}
            >
            Log out from Admin
            </Button>
            </Box>
        </Container>
        </>
    )
}

export default Admin;
