import { IconButton as MUIIconButton } from '@mui/material/'

export default function IconButton({
  type,
  icon,
  text,
  onClick,
}: {
  type?: 'submit'
  icon: React.ReactElement | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
}) {
  return (
    <>
      <MUIIconButton type={type} onClick={onClick}>
        {icon}
      </MUIIconButton>
      {text}
    </>
  )
}
