import { TableBody, TableRow, TableCell, TextField, Box } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import ListAltIcon from '@mui/icons-material/ListAlt'
import DoneIcon from '@mui/icons-material/Done'
import UpcomingIcon from '@mui/icons-material/Upcoming'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import { Detail } from '../data/types/course'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { editNote, saveNote } from '../store/courseSlice'
import IconButton from './IconButton'

export default function DetailsList({
  mutatedDetails,
}: {
  mutatedDetails: Detail[]
}) {
  const editingIDs = useAppSelector((state) => state.course.editiingIDs)

  const dispatch = useAppDispatch()

  return (
    <TableBody>
      {mutatedDetails.map(
        ({ id, name, date, description, type, completed, notes }) => (
          <TableRow
            key={id}
            sx={{
              '&:nth-of-type(odd)': {
                backgroundColor: '#eee',
              },
            }}
          >
            <TableCell> {id} </TableCell>
            <TableCell> {name} </TableCell>
            <TableCell sx={{ width: 200 }}>{date}</TableCell>
            <TableCell> {description} </TableCell>

            <TableCell sx={{ width: 200 }}>
              {type === 'Lecture' ? (
                <IconButton icon={<SchoolIcon />} text="Lecture" />
              ) : (
                <IconButton icon={<ListAltIcon />} text="Practical session" />
              )}
            </TableCell>

            <TableCell sx={{ width: 200 }}>
              {completed ? (
                <IconButton icon={<DoneIcon color="success" />} text="Passed" />
              ) : (
                <IconButton
                  icon={<UpcomingIcon color="info" />}
                  text="Upcoming"
                />
              )}
            </TableCell>

            <TableCell sx={{ width: 250 }}>
              {editingIDs.includes(id) ? (
                <form
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    dispatch(
                      saveNote({
                        editId: id,
                        text: e.currentTarget.note.value,
                      })
                    )
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                      type="submit"
                      icon={<SaveIcon color="info" />}
                    />

                    <TextField
                      autoFocus
                      name="note"
                      defaultValue={notes}
                      variant="standard"
                    />
                  </Box>
                </form>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    icon={<EditIcon />}
                    onClick={() => dispatch(editNote(id))}
                  />

                  {notes}
                </Box>
              )}
            </TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  )
}
