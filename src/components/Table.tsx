import { IconButton, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledTableCell } from './styles/Table';
import dayjs from 'dayjs';


interface MyObject<T> {
  id: T;
  [key: string]: any;
}

interface Props {
  columns: MyObject<any>[],
  rows: MyObject<any>[],
  onEdit: (item: any) => void
}

const CustomTable = (props: Props) => {


  const handleValue = (row: any, col: any) => {
    let value = row
    let keys = col.id.split('.')

    for (const key of keys) {
      if (col.type === 'date') {
        value = dayjs(value[key]).format('DD/MM/YYYY')
      } else {
        value = value[key]
      }
    }

    return value
  }

  return (
    <div style={{
      padding: 32,
      marginTop: 50
    }}>
      <TableContainer
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              {
                props.columns.map((item: any, index: any) => {
                  return (
                    <StyledTableCell key={index} style={{ fontSize: 16 }} align="center"><strong>{item.label}</strong></StyledTableCell>
                  )
                })
              }
              <StyledTableCell align="center"><strong>Acciones</strong></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.rows.map((row, index) => (
                <TableRow key={index}>
                  {
                    props.columns.map((column, index) => (
                      <TableCell
                        key={index}
                        align='center'
                        sx={{
                          minWidth: (column.size === 'xs') ? 128 : (column.size === 'sm') ? 160 : (column.size === 'md') ? 192 : 224,
                          maxWidth: (column.size === 'xs') ? 128 : (column.size === 'sm') ? 160 : (column.size === 'md') ? 192 : 224
                        }}
                      >
                        <Typography variant='body1'>{handleValue(row, column)}</Typography>
                      </TableCell>
                    ))
                  }
                  <TableCell
                    size='small'
                    align='center'>
                    <IconButton
                      onClick={() => props.onEdit(row)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow >
              ))
            }
          </TableBody >
        </Table >
      </TableContainer >
    </div >
  )
}

export default CustomTable