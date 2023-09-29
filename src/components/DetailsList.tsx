import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { TableBody, TableRow, TableCell, TextField, Box } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import ListAltIcon from '@mui/icons-material/ListAlt'
import DoneIcon from '@mui/icons-material/Done'
import UpcomingIcon from '@mui/icons-material/Upcoming'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { updateCourses } from '../store/courseSlice'
import IconButton from './IconButton'
import type { Detail } from '../data/courses'

export default function DetailsList({
  courseIndex,
  filteredDetails,
}: {
  courseIndex: number
  filteredDetails: Detail[]
}) {
  const isLogined = useAppSelector((state) => state.auth.isLogined)

  const courses = useAppSelector((state) => state.courses)
  const dispatch = useAppDispatch()

  const [editingIDs, setEditingIDs] = useState<number[]>([])

  const handleEditNote = (id: number) => {
    setEditingIDs([...editingIDs, id])
  }

  const handleSaveNote = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()

    const text = e.currentTarget.note.value || ''

    const updatedCourses = courses.map((course, index) => {
      if (index !== courseIndex) {
        return course
      }

      const updatedDetails = course.details.map((detail) => {
        if (detail.id === id) {
          return { ...detail, notes: text }
        }
        return detail
      })

      return { ...course, details: updatedDetails }
    })

    dispatch(updateCourses(updatedCourses))
    const updatedEditingIDs = editingIDs.filter((editedID) => editedID !== id)
    setEditingIDs(updatedEditingIDs)
  }

  return (
    <>
      {isLogined ? (
        <TableBody>
          {filteredDetails.map(
            ({ id, topic, date, description, type, completed, notes }) => (
              <TableRow key={id}>
                <TableCell> {id} </TableCell>
                <TableCell> {topic} </TableCell>
                <TableCell sx={{ width: 200 }}>{date}</TableCell>
                <TableCell> {description} </TableCell>

                <TableCell sx={{ width: 200 }}>
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
                </TableCell>

                <TableCell sx={{ width: 200 }}>
                  {completed ? (
                    <IconButton icon={<DoneIcon color="success" />} />
                  ) : (
                    <IconButton icon={<UpcomingIcon color="info" />} />
                  )}
                </TableCell>

                <TableCell sx={{ width: 250 }}>
                  {editingIDs.includes(id) ? (
                    <form onSubmit={(e) => handleSaveNote(e, id)}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
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
                        onClick={() => handleEditNote(id)}
                      />

                      {notes}
                    </Box>
                  )}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  )
}
