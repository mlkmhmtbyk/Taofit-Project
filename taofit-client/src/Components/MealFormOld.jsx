import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import TimeField from './TimeField';
import Grid from '@mui/material/Unstable_Grid2'; 
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Button from '@mui/material/Button';

const style = {
  position: 'relative',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton sx={{margin:3}} onClick={handleOpen} size="medium">
        <AddCircleIcon fontSize="inherit" sx={{color:'#1976d2'}}/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 900 , height: 230}}>
          <Grid container spacing={3}>
            <Grid xs={4} container justifyContent="center">
            </Grid>
            <Grid xs={4} container justifyContent="center">
              <h2 id="child-modal-title">Add Food</h2>
            </Grid>
            <Grid xs={4} container justifyContent="flex-end">
              <IconButton sx={{ padding:3}} 
              onClick={handleClose} size="small">
                <CloseRoundedIcon fontSize="inherit" sx={{color:'#1976d2'}}/>
              </IconButton>
            </Grid>
            <Grid xs={4} sx={{paddingLeft:2,paddingRight:2}} container justifyContent="center">
              <TextField size="small" fullWidth id="FoodName" label="food name" variant="outlined" />
              
            </Grid>
            <Grid xs={4} container sx={{paddingLeft:2,paddingRight:2}} justifyContent="center">
              <TextField size="small" label="amount" id="Amount" type="number" fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">g</InputAdornment>,
                }}
              /> 
            </Grid>
            <Grid xs={4} sx={{paddingLeft:2,paddingRight:2}} container justifyContent="center">
              <TextField size="small" label="Calory" id="Calory" type="number" fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">kcal</InputAdornment>,
                }}
              /> 
            </Grid>
            <Grid xs={12} container  justifyContent="center">
              <Box sx={{ m: 1 }} />
            </Grid>
            <Grid xs={4} sx={{paddingLeft:2,paddingRight:2}}  container justifyContent="center">
              <TextField fullWidth size="small" label="carbs" id="Carbs" type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">kcal</InputAdornment>,
                }}
              /> 
            </Grid>
            <Grid xs={4} sx={{paddingLeft:2,paddingRight:2}}  container  justifyContent="center">
              <TextField fullWidth size="small" label="protein" id="Protein" type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">g</InputAdornment>,
                }}
              /> 
            </Grid>
            <Grid xs={4} sx={{paddingLeft:2,paddingRight:2}}  container  justifyContent="center">
            <TextField fullWidth size="small" label="fat" id="Fat" type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">g</InputAdornment>,
                }}
              /> 
            </Grid>
            <Grid xs={12}>
            </Grid>
            <Grid xs={4} sx={{paddingLeft:2,paddingRight:2, paddingBottom:3}} >
              <Button variant="contained" size="small">
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen} size="large">
        <AddCircleIcon fontSize="inherit" sx={{color:'#1976d2'}}/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <Grid container spacing={2}>
          <Grid xs={4} container justifyContent="center">
          </Grid>
          <Grid xs={4} container justifyContent="center">
          <h1 id="parent-modal-title">Add Meal</h1>
          </Grid>
          <Grid xs={4} container justifyContent="flex-end">
          <IconButton sx={{ padding:4}} 
            onClick={handleClose} size="small">
            <CloseRoundedIcon fontSize="inherit" sx={{color:'#1976d2'}}/>
          </IconButton>
          </Grid>
          <Grid xs={9} container justifyContent="center">
            <TextField fullWidth id="MealName" label="meal name" variant="outlined" />
          </Grid>
          <Grid xs={3} container justifyContent="center">
          <TimeField></TimeField>
          </Grid>
            <ChildModal />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}