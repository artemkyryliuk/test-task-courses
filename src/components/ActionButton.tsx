import { Button } from '@mui/material'

export default function ActionButton({ icon }: { icon: React.ComponentType }) {
  const Component = icon

  return (
    <Button sx={{ minWidth: '16px' }}>
      <Component />
    </Button>
  )
}
