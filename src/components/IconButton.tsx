import { IconButton as MUIIconButton } from '@mui/material/'

export default function IconButton({
  type,
  icon,
  onClick,
}: {
  type?: 'submit'
  icon: React.ReactElement | string

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <MUIIconButton type={type} onClick={onClick}>
      {icon}
    </MUIIconButton>
  )
}
