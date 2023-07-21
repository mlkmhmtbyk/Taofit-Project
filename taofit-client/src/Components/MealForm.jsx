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
  width: 300,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
        <Box sx={{ ...style, width: 500 }}>
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
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}