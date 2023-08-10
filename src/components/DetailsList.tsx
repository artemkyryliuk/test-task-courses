import {
  TableBody,
  TableRow,
  TableCell as Cell,
  TextField,
  Box,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import ListAltIcon from '@mui/icons-material/ListAlt'
import DoneIcon from '@mui/icons-material/Done'
import UpcomingIcon from '@mui/icons-material/Upcoming'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { editNote, saveNote } from '../store/courseSlice'
import IconButton from './IconButton'
import { Detail } from '../data/courses'

export default function DetailsList({
  courseIndex,
  filteredDetails,
}: {
  courseIndex: number
  filteredDetails: Detail[]
}) {
  const editingIDs = useAppSelector((state) => state.course.editiingIDs)
  const dispatch = useAppDispatch()

  return (
    <TableBody>
      {filteredDetails.map(
        ({ id, topic, date, description, type, completed, notes }) => (
          <TableRow key={id}>
            <Cell> {id} </Cell>
            <Cell> {topic} </Cell>
            <Cell sx={{ width: 200 }}>{date}</Cell>
            <Cell> {description} </Cell>

            <Cell sx={{ width: 200 }}>
              {type === 'lecture' ? (
                <Box display="flex" alignItems="center">
                  <IconButton icon={<SchoolIcon />} />
                  <p> Lecture </p>
                </Box>
              ) : (
                <Box display="flex" alignItems="center">
                  <IconButton icon={<ListAltIcon />} />
                  <p> Practical session </p>
                </Box>
              )}
            </Cell>

            <Cell sx={{ width: 200 }}>
              {completed ? (
                <IconButton icon={<DoneIcon color="success" />} />
              ) : (
                <IconButton icon={<UpcomingIcon color="info" />} />
              )}
            </Cell>

            <Cell sx={{ width: 250 }}>
              {editingIDs.includes(id) ? (
                <form
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    const text = e.currentTarget.note?.value || ''
                    dispatch(
                      saveNote({
                        courseIndex,
                        editId: id,
                        text,
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
            </Cell>
          </TableRow>
        )
      )}
    </TableBody>
  )
}
