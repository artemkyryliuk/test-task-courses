import { Box, TextField, Typography } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { searchTopic } from '../store/courseSlice'

export default function SearchBar() {
  const dispatch = useAppDispatch()

  const { mutatedDetails, searchQuery } = useAppSelector(
    (state) => state.course
  )

  return (
    <Box display="flex" alignItems="center" gap={3} padding={3}>
      <TextField
        label="Search topic by name"
        onChange={(e) => dispatch(searchTopic(e.target.value))}
      />
      {searchQuery.length > 0 && (
        <Typography
          sx={{
            width: '300px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {`${
            mutatedDetails.length > 0
              ? `Found ${mutatedDetails.length} result(s)`
              : `No results found`
          } for "${searchQuery}"`}
        </Typography>
      )}
    </Box>
  )
}
