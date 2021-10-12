import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function Employee(props) {

    return (<Grid item key={props.id} sm={12} md={6} lg={4}>
                      <Card 
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                          width: '90%',
                          p: '8%',
                          }}
                          image={props.img}
                          alt="random"
                        />
                        <CardContent>
                        <Typography variant="h5" component="h2">
                        Name: {props.name}
                        </Typography>
                        <Typography variant="h6" component="h6">
                        Employee No: {props.empNo}
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Button 
                            onClick={() => {props.onClicked(props.id)}} 
                            size="small"
                          >
                          Details
                          </Button>
                        </CardActions>
                      </Card>
                      </Grid>)
}

export default Employee;
