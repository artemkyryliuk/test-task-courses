import { Box, TextField, Typography } from '@mui/material'

import type { Detail } from '../data/courses'

export default function SearchBar({
  filteredDetails,
  searchQuery,
  onChange,
}: {
  filteredDetails: Detail[]
  searchQuery: string
  onChange: (inputValue: string) => void
}) {
  return (
    <Box display="flex" alignItems="center" gap={3} padding={3}>
      <TextField
        autoFocus
        label="Search topic by name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
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
            filteredDetails.length > 0
              ? `Found ${filteredDetails.length} result(s)`
              : `No results found`
          } for "${searchQuery}"`}
        </Typography>
      )}
    </Box>
  )
}
