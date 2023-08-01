import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'

import bg from '/src/assets/bg.svg'
import TextField from '@mui/material/TextField'
import { Button, Paper, Stack } from '@mui/material'

export default function Auth() {
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
          <Stack alignItems="center" spacing={3}>
            <FormLabel> Authorization </FormLabel>

            <TextField required label="Login" />

            <TextField required label="Password" type="password" />

            <Button fullWidth variant="contained">
              Login
            </Button>
          </Stack>
        </FormControl>
      </Paper>
    </Box>
  )
}
