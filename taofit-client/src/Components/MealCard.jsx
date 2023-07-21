import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FoodTable from './FoodTable';
import NewFoodTable from './NewFoodTable';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FoodForm from './FoodForm';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

function getTimeFromDateString(dateString){
  let date = new Date(dateString);
  return(date.getHours().toString() +":" + 
    (date.getMinutes().toString()=="0" ? "00" : date.getMinutes().toString()));
}

function CalculateMealCalory(foodList){
  let totalCalory = 0;
  foodList.forEach(element => {
    totalCalory += element.calory;
  });
  return totalCalory;
}

export default function MediaCard(props) {
  let meal = props.meal;

  return (
    <Card sx={{ maxWidth: 1000 }}>
      <Grid container spacing={0} sx={{ padding:1, paddingLeft:3,paddingRight:3}}>
        
        <Grid xs={6}>
        <Typography variant="h5" gutterBottom sx={{ textTransform: 'capitalize' }}>
        {meal?.mealName}
      </Typography>
        </Grid>
        <Grid xs={4} container justifyContent="flex-end">
        <Typography variant="h5" gutterBottom>
        {getTimeFromDateString(meal?.time)}
      </Typography>
        </Grid>
        <Grid xs={2} container justifyContent="flex-end">
        <Typography sx=
        {{border:1, borderRadius:2, paddingLeft:1,paddingRight:1, borderColor:'#1976d2', color:'#1976d2' }} 
        variant="h6" gutterBottom>
         {CalculateMealCalory(meal?.foods)} 
      </Typography>
        </Grid>
      </Grid>
      <CardContent>
      
        <FoodTable foodList={meal?.foods}></FoodTable>
        {/* <NewFoodTable foodList={meal?.foods}></NewFoodTable> */}
      </CardContent>
      <CardActions>
      <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      >
      <Box >
        <FoodForm></FoodForm>
        <ButtonGroup size="small" >
          <Button sx={{ textTransform: 'capitalize'}}>Edit</Button>
          <Button sx={{ textTransform: 'capitalize'}}>Delete</Button>
        </ButtonGroup>
      </Box>
      
    </ButtonGroup>
      </CardActions>
      
    </Card >
  );
}