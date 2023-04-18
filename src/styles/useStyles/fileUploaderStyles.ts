import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

export const useFuleUploader = makeStyles((theme: Theme) => ({
  content: {
    display: 'block',
    border: 'solid 1px ' + theme.palette.background.default,
    borderRadius: 6,
    marginTop: 0,
    padding: 8,
  },
  contentError: {
    display: 'block',
    border: 'solid 2px red',
    borderRadius: 6,
    marginTop: 0,
    padding: 8,
  },
  fileContainer: {
    display: 'flex',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    borderRadius: 6,
    height: 240,
    padding: '0px 12px',
    boxShadow: '0 0 0 2px ' + theme.palette.primary.main,
  },
  fileContainerDrag: {
    display: 'flex',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    borderRadius: 6,
    height: 240,
    padding: '0px 12px',
    opacity: 0.5,
    border: 'dashed grey 2px',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    objectFit: 'contain'
  },
  uploadImage: {
    display: 'block',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    borderRadius: 6,
    cursor: 'pointer',
    height: 240,
    padding: '0px 12px',
    '&:hover': {
      boxShadow: '0 0 0 2px ' + theme.palette.primary.main,
    }
  },
  uploadImageDrag: {
    border: 'dashed grey 2px',
    opacity: 0.5,
    display: 'block',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    borderRadius: 6,
    cursor: 'pointer',
    height: 240,
    padding: '0px 12px',
    '&:hover': {
      boxShadow: '0 0 0 2px ' + theme.palette.primary.main,
    }
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: theme.palette.background.default
  },
  replaceButton: {
    position: 'absolute',
    top: 46,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: theme.palette.background.default
  },
  uploadIcon: {
    width: '48px',
    height: '48px',
    padding: '28px',
    margin: '0 auto',
    marginBottom: 8,
    borderRadius: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  alignCenter: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))