import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledTableCell } from './styles/Table';


interface MyObject<T> {
  id: T;
  [key: string]: any;
}

interface Props {
  columns: MyObject<any>[],
  rows: MyObject<any>[]
}

const CustomTable = (props: Props) => {

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
                  {props.columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align='center'
                      sx={{
                        minWidth: 128,
                        maxWidth: 128,
                        overflow: 'visible',
                        whiteSpace: 'normal',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      <Typography variant='body1'>{row[column.id]}</Typography>
                    </TableCell>
                  ))}
                  <TableCell
                    align='center'>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table >
      </TableContainer >
    </div>
  )
}

export default CustomTable