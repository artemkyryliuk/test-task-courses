import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  TextField,
} from '@mui/material'

import { useAppDispatch } from '../hooks/hooks'
import { setIsLogined } from '../store/authSlice'
import bg from '/src/assets/bg.svg'

export default function Login() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { login, password } = e.currentTarget

    if (login.value === 'admin' && password.value === 'admin') {
      dispatch(setIsLogined(true))
      navigate('/')
      console.log('%c--- Authorized succesfully ---', 'color: lime')
    } else {
      console.log('%c--- Wrong login/password! ---', 'color: red')
    }
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
      }}
    >
      <Paper sx={{ padding: 5 }}>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Stack alignItems="center" spacing={3}>
              <FormLabel> Authorization </FormLabel>

              <TextField name="login" required label="Login" />

              <TextField
                name="password"
                required
                label="Password"
                type="password"
              />

              <Button type="submit" fullWidth variant="contained">
                Login
              </Button>
            </Stack>
          </form>
        </FormControl>
      </Paper>
    </Box>
  )
}
