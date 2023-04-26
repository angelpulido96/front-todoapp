import React, { useEffect, useRef } from 'react'
import { PrimaryButton } from './styles/Buttons'
import { TextField } from '@mui/material'

interface Props {
  label?: string,
  placeholder?: string,
  handleAction: () => void
}

const Head = (props: Props) => {


  return (
    <div style={{
      position: 'absolute',
      top: 80,
      accentColor: 'red',
      right: 50,
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        style={{
          marginRight: 12
        }}
        size='small'
      />
      <PrimaryButton variant='outlined'
        onClick={props.handleAction}
        style={{
          width: 200
        }}
      >Add task
      </PrimaryButton>
    </div>
  )
}

export default Head