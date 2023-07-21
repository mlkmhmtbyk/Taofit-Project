import NavBar from './NavBar';
import MealCard from './MealCard';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DatePicker from './DatePicker';
import NutritionList from './NutritionList';
import ProgressBar from './ProgressBar';
import MealForm from './MealForm';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import { useEffect, useState } from "react";
import PieChart from './PieChart';
import dayjs from 'dayjs';

function MyDay() {
  const [meals, setMeals] = useState([]);
  const [myDayDate, setmyDayDate] = useState(dayjs().format('DD.MM.YYYY'));

  const changeDate = (date) => {
    setmyDayDate(date);
  };

  useEffect(() => {
    axios.get("https://localhost:5000/api/Meals/GetMeals").then((data) => {
      setMeals(data?.data);
    });
  }, []);

  return(
    <div>
      <NavBar/>
      <Grid container spacing={5} sx={{paddingTop:4, marginLeft:10,marginRight:10}}>
        
        <Grid xs={3}>
          <Box><DatePicker changeDate = {changeDate}></DatePicker></Box>
        </Grid>
        <Grid xs={6}>
          <ProgressBar meals={meals}></ProgressBar>
          <Box sx={{ m: 3 }} />
          <div>
          {meals.map((meal) => {
            return(
              <div>
                <MealCard key={meal.mealId} meal = {meal}> </MealCard>
                <Box key={meal.mealId} sx={{ m: 3 }} />
              </div>
              
            );
          })}
          </div>
          <MealForm></MealForm>
        </Grid>
        <Grid xs={3}>
          <PieChart {...meals}></PieChart>
          <NutritionList {...meals}></NutritionList>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default MyDay;