import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function FoodTable(props) {
  let foodList = props.foodList;

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell sx={{ fontWeight:700}} align="right">Amount(g)</TableCell>
            <TableCell sx={{ fontWeight:700}} align="right">Calories</TableCell>
            <TableCell sx={{ fontWeight:700}} align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell sx={{ fontWeight:700}} align="right">Protein&nbsp;(g)</TableCell>
            <TableCell sx={{ fontWeight:700}} align="right">Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodList.map((food) => (
            <TableRow
              key={food.foodName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > <TableCell>
              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
              <TableCell sx={{ textTransform: 'lowercase',fontWeight:700}}component="th" scope="food">
                
                {food.foodName} 
              </TableCell>
                <TableCell align="right">{food.amount}</TableCell>
                <TableCell align="right">{food.calory}</TableCell>
                <TableCell align="right">{food.carbs}</TableCell>
                <TableCell align="right">{food.protein}</TableCell>
                <TableCell align="right">{food.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}