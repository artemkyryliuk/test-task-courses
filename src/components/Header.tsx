import { Link, useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { setIsLogined } from '../store/authSlice'
import { useAppDispatch } from '../hooks/hooks'

export default function Header() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleLogOut = () => {
    dispatch(setIsLogined(false))
    navigate('/login')
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2} bgcolor="#eee">
      <Link to="/">
        <Button variant="text"> Home Page </Button>
      </Link>

      <Link to="login">
        <Button variant="outlined" onClick={handleLogOut}>
          Logout
        </Button>
      </Link>
    </Box>
  )
}
