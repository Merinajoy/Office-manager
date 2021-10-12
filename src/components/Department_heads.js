import React from 'react';
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

function Department_heads() {
    let history = useHistory();

    const [heads, setHeads] = useState([]);

    async function getHeads() {
        const response = await fetch('https://officemanager.altd.in/api/frontend/department-heads');
        const data = await response.json();
        setHeads(data.data.departmentHeads);
    }

    useEffect(() => {
        getHeads();
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
              Department Heads
            </Typography>
            <Box textAlign='center'>
            <Button 
              sx={{ mt: 2, mb: 1 }} 
              variant="contained"
              onClick={() => {
                history.push('/departments');
              }}
            >
            Go back to Departments
            </Button>
            </Box>
          </Container>
        </Box>
{/* End hero unit */}
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={6}>
        {heads.map((item, index) => {
              return (
                    <Grid item key={index} sm={12} md={6} lg={4}>
                      <Card 
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                          width: '90%',
                          p: '8%',
                          }}
                          image={item.profile_image}
                          alt="random"
                        />
                        <CardContent>
                        <Typography variant="h5" component="h2">
                        {item.name}
                        </Typography>
                        
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => {history.push('/employees')}} size="small">See Employees</Button>
                        </CardActions>
                      </Card>
                      </Grid>
                
              )
            })
        } 
        </Grid>
      </Container>   
      </main>
    </ThemeProvider>
  );
}

export default Department_heads;
