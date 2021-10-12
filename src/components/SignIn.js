import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const theme = createTheme();

export default function SignIn() {

  let history = useHistory();

  const [loggedIn, setLoggedIn ] = useState(false);

  async function login(user) {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        email : user.email,
        password : user.password
      })
    };
    const res = await fetch("https://officemanager.altd.in/api/login", options);
    const data = await res.json();
    if(data) {
      alert("Successfully logged in")
      setLoggedIn(true); 
      history.push('/admin');  
    }
    else {
      alert("Invalid username or password!");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') === "" || data.get('password') === "") {
      alert("Empty username/password field");
    } else if (data.get('email') === "admin@officemanager.altd.in" && data.get('password') === "password") {
      login({
        email: data.get('email'),
        password: data.get('password'),
      });
    } else {
      alert("Invalid username/password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                history.push("/departments");
              }}
            >
            <Link href="#" variant="body2">
                  Continue as Guest
                </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}