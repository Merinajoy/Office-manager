import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Card(props) {
  return (
    <Grid item key={props.id} sm={12} md={6} lg={4}>
        <Card 
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="img"
                sx={{
                width: '90%',
                p: '8%',
                }}
                image={props.profile_image}
                alt="random"
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                Name: {props.name}
                </Typography>
                <Typography variant="h6" component="h6">
                Employee No: {props.emp_number}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    onClick={() => {
                        history.push('/employee')
                    }} 
                    size="small"
                >
                Details
                </Button>
            </CardActions>
        </Card>
    </Grid>           
}

export default Card;
