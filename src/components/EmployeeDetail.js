import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function EmployeeDetail(props) {

    return (
        <>
           <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <Box
          sx={{
            marginTop: 4,
            p:6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
          >
          <img src={props.emp.profile_image} alt="Img" />
          </Box>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Employee name: {props.emp.name}
            </Typography>
            <Box textAlign='center'>
              <Typography>
              Employee no: {props.emp.emp_number}    
              </Typography>
            </Box>
          </Container>
        </Box> 
        </>
    )
}

export default EmployeeDetail
