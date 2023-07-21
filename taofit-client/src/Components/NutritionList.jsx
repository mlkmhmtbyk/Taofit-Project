import * as React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";

/* function CalculateNutritions(meals){
  let totalProtein = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalProtein += meals[meal].foods[food].protein;
    }
  }
  let totalCarb = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalCarb += meals[meal].foods[food].carbs;
    }
  }
  let totalFat = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalFat += meals[meal].foods[food].fat;
    }
  }

  let totalCalory = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalCalory += meals[meal].foods[food].calory;
    }
  }

  let total = totalCarb * 4 + totalFat * 9 + totalProtein * 4;

  let totalNutrition = {
    Protein: totalProtein,
    ProteinPercentage: parseInt(100 * totalProtein * 4 / total),
    Carbs: totalCarb,
    CarbsPercentage: parseInt(100 * totalCarb * 4 / total),
    Fat: totalFat,
    FatPercentage: parseInt(100 * totalFat * 9 / total),
    Calory: totalCalory
  };
  return totalNutrition;
} */

function CalculateTotalProtein(meals){
  let totalProtein = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalProtein += meals[meal].foods[food].protein;
    }
  }
  return totalProtein;
}

function CalculateTotalCarbs(meals){
  let totalCarbs = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalCarbs += meals[meal].foods[food].carbs;
    }
  }
  return totalCarbs;
}

function CalculateTotalFat(meals){
  let totalFat = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalFat += meals[meal].foods[food].fat;
    }
  }
  return totalFat;
}
function CalculateTotalCalory(meals){
  let totalCalory = 0;
  for(const meal in meals){
    for(const food in meals[meal].foods){
      totalCalory += meals[meal].foods[food].calory;
    }
  }
  return totalCalory;
}

export default function NutritionList(props) {
  const meals = props;
  const [protein, setProtein] = useState([]);
  const [fat, setFat] = useState([]);
  const [carbs, setCarbs] = useState([]);
  const [calory, setCalory] = useState([]);
  

  const nutrition = {
    Protein: protein,
    ProteinPercentage: parseInt(100 * protein * 4 / (carbs * 4 + fat * 9 + protein * 4)),
    Carbs: carbs,
    CarbsPercentage: parseInt(100 * carbs * 4 / (carbs * 4 + fat * 9 + protein * 4)),
    Fat: fat,
    FatPercentage: parseInt(100 * fat * 9 / (carbs * 4 + fat * 9 + protein * 4)),
    Calory: calory
  };

  useEffect(() => {
    setProtein(CalculateTotalProtein(meals));
  }, [nutrition])
  useEffect(() => {
    setCarbs(CalculateTotalCarbs(meals));
  }, [nutrition])
  useEffect(() => {
    setFat(CalculateTotalFat(meals));
  }, [nutrition])
  useEffect(() => {
    setCalory(CalculateTotalCalory(meals));
  }, [nutrition])

 /*  useEffect(() => {
    setNutrition(CalculateNutritions(meals));
  }, []) */
 
    return (
    <Paper > 
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ width: 30, height: 30, backgroundColor: 'rgb(66, 165, 245)' }} alt="C" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={"Carbonhydrat (" + nutrition.Carbs + "g)"}
            secondary={"%" + nutrition.CarbsPercentage}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ width: 30, height: 30, backgroundColor: 'rgb(156, 204, 101)' }} alt="P" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={"Protein (" + nutrition.Protein + "g)"}
            secondary={"%" + nutrition.ProteinPercentage}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ width: 30, height: 30, backgroundColor:'rgb(255, 112, 67)' }} alt="F" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={"Fat (" + nutrition.Fat + "g)"}
            secondary={"%" + nutrition.FatPercentage}
          />
        </ListItem>
      </List>
    </Paper>
  );
}