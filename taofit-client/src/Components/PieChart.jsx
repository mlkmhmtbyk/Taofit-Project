import * as React from 'react';
import { useEffect, useState } from "react";
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';


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


export default function PieChart(props) {
  const meals = props;

  const [protein, setProtein] = useState([]);
  const [fat, setFat] = useState([]);
  const [carbs, setCarbs] = useState([]);

  const dataList = [
    { nutrition: 'Carbonhdrat', area: carbs*4 },
    { nutrition: 'Fat', area:  fat*9 },
    { nutrition: 'Protein', area: protein*4 }
  ];

  useEffect(() => {
    setProtein(CalculateTotalProtein(meals));
  }, [dataList])
  useEffect(() => {
    setFat(CalculateTotalFat(meals));
  }, [dataList])
  useEffect(() => {
    setCarbs(CalculateTotalCarbs(meals));
  }, [dataList])


  return(
    <>
    <Chart 
      sx={{ bgcolor: 'background.paper'}}
      data={dataList}
      height={250}
    >
      <PieSeries
        valueField="area"
        argumentField="nutrition"
        innerRadius={0.6}
      />
    </Chart>
    </>
    
  );
}