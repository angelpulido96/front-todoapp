import React, { useEffect, useRef, useState } from 'react'

// Material UI
import { Button, FormHelperText, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'

import { useFuleUploader } from '@/styles/useStyles/fileUploaderStyles'
import { Props, UploadState } from '@/interfaces/uploadState'
import utils from './utils'
import Utils from '@/resources/Utils'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import LoopIcon from '@mui/icons-material/Loop';

const FileUploader = ({ file, disabled, ...props }: Props) => {

  const classes = useFuleUploader()

  const initialState: UploadState = {
    id: '',
    types: '',
    typesAccepted: [],
    file: null,

    open: false,
    drag: false,
  }

  const [state, setState] = useState({ ...initialState })
  const [dragCounter, setDragCounter] = useState(0)
  const fileFieldDocument = useRef<HTMLInputElement>(null)
  const dragField = useRef<HTMLDivElement>(null)

  const handleAddFile = async (files: any) => {
    try {
      let file = files[0];

      if (file.type.includes('image')) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e: ProgressEvent<FileReader>) {

          let image = new Image()
          image.src = e.target?.result as string
          image.onload = () => {
            if (typeof reader.result === 'string') {
              file = {
                fileName: file.name,
                type: file.type,
                size: file.size,
                width: image.width,
                height: image.height,
                url: e.target?.result
              }
              props.setFile(file)
              props.handleErrorFile && props.handleErrorFile()
            }
          }
        }
        reader.onerror = function (event: ProgressEvent<FileReader>) {
          throw new Error(event.target?.error?.message)
        }
      } else {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = (e: ProgressEvent<FileReader>) => {

          const buffer = e.target?.result as ArrayBuffer
          const newBAse = Utils.arrayBufferToBase64(buffer, file.type)

          file = {
            fileName: file.name,
            type: file.type,
            size: file.size,
            url: newBAse
          }
          props.setFile(file)
          props.handleErrorFile && props.handleErrorFile()
        }
      }
    } catch (error) {
      console.log('[Error filereader]', error)
    }
  }

  useEffect(() => {
    setState((prevState) => ({ ...prevState, id: utils.generateId() }))
    handleRender()

    let div = dragField.current

    div?.addEventListener('dragenter', handleDragIn)
    div?.addEventListener('dragleave', handleDragOut)
    div?.addEventListener('dragover', handleDrag)
    div?.addEventListener('drop', handleDrop)

    return () => {
      div?.removeEventListener('dragenter', handleDragIn);
      div?.removeEventListener('dragleave', handleDragOut);
      div?.removeEventListener('dragover', handleDrag);
      div?.removeEventListener('drop', handleDrop);
    }

  }, [state.open])

  const handleDrag = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter + 1)
    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      setState({ ...state, drag: true })
    }
  }
  const handleDragOut = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter - 1)
    if (dragCounter === 0) {

      setState({ ...state, drag: false })
    }
  }
  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setState({ ...state, drag: false })
    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      handleAddFile(e.dataTransfer.files)
      e.dataTransfer.clearData()
      setDragCounter(0)
    }
  }

  const handleRender = () => {
    const newTypes = utils.inputTypesAllowed(props.typesAccepted)
    setState((prevState) => ({ ...prevState, types: newTypes }))
  }

  const handleRenderImage = () => {

    if (file.type.includes('image')) {
      return (
        <Tooltip title={'Show image'}>
          <Button
            fullWidth>
            <img src={file.url} className={classes.image} />
          </Button>
        </Tooltip>
      )
    } else if (file.type === 'application/pdf') {
      return (
        <div className={classes.alignCenter}>
          <Stack>
            <iframe src={file.url} style={{ width: '100%' }} />
          </Stack>
        </div>
      )
    }
  }

  return (
    <>
      <div className={!props.error ? classes.content : classes.contentError}>
        <input
          id={state.id}
          name={state.id}
          type="file"
          style={{ display: "none" }}
          accept={state.types || 'image/png, image/jpeg'}
          onChange={(e) => handleAddFile(e.target.files)}
          disabled={disabled}
          ref={fileFieldDocument}
        />
        <div>
          {
            file.url ?
              <div className={classes.fileContainer}>
                {handleRenderImage()}
                < div className={classes.deleteButton}>
                  <IconButton className={classes.alignCenter} onClick={props.handleDeleteImage}>
                    <Tooltip placement="right" title={'Remove'}>
                      <HighlightOffIcon />
                    </Tooltip>
                  </IconButton>
                </div>

                <div className={classes.replaceButton}>
                  <IconButton className={classes.alignCenter} onClick={() => fileFieldDocument.current?.click()}>
                    <Tooltip placement="right" title={'Replace'}>
                      <LoopIcon />
                    </Tooltip>
                  </IconButton>
                </div>
              </div>
              :
              <div ref={dragField}>
                <label htmlFor={state.id}>
                  <div className={state.drag ? classes.uploadImageDrag : classes.uploadImage} >
                    <div className={classes.alignContent}>
                      <div className={classes.uploadIcon}>
                        <ImageIcon className={classes.alignCenter} />
                      </div>
                      <Typography variant='body1' align='center'>{props.description ? props.description : 'Drag or select your image'}</Typography>
                      <Typography display="block" variant='caption' align='center'>{props.text}</Typography>
                    </div>
                  </div>
                </label>
              </div>
          }
        </div>
      </div>
      {
        props.error && (
          <FormHelperText style={{ marginLeft: 12, color: '#d32f2f' }} >{props.helperText}</FormHelperText>
        )
      }
    </>
  )
}

export default FileUploader