import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

export default function Departments() {

  let history = useHistory();

    const [departments, setDepartments] = useState([]);

    async function getDepartments() {
        const response = await fetch('https://officemanager.altd.in/api/frontend/departments');
        const data = await response.json();
        setDepartments(data.data.departments);
    }

    useEffect(() => {
        getDepartments();
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <main>
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
              Departments
            </Typography>
            <Box textAlign='center'>
            <Button 
              sx={{ mt: 2, mb: 1 }} 
              variant="outlined"
              onClick={() => {
                history.push('/');
              }}
            >
            Go back to Sign in
            </Button>
            </Box>
          </Container>
        </Box>
{/* End hero unit */}
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={6}>
        {departments.map((item, index) => {
              return (
                    <Grid item key={index} sm={12} md={6} lg={3}>
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
                          <Button size="small">Details</Button>
                        </CardActions>
                      </Card>
                      </Grid>
                
              )
            })
        } 
        </Grid>
        <Box sx={{ py: 6 }} textAlign='center'>
            <Button 
              sx={{ mt: 2, mb: 1 }} 
              variant="contained"
              onClick={() => {
                history.push('/department_heads');
              }}
            >
            See Department Heads
            </Button>
            </Box>
      </Container>   
      </main>
    </ThemeProvider>
  );
}