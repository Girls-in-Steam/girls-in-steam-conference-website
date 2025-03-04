import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export default function BioDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const bio = props.bio;

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {bio.name + ': ' + bio.role}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid
            container
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              marginBottom: '18px'
            }}>
            <img
              className="dialog-image" // Add the class here
              src={bio.src}
              alt="bio headshot"
            />
            <Typography fontSize={'40px'}>{bio.emojis}</Typography>
          </Grid>
          <Typography gutterBottom>{bio.desc}</Typography>
          <Typography sx={{ paddingLeft: '25px', color: 'primary.light' }} gutterBottom>
            {'"' + bio.quote + '"'}
          </Typography>
          <Typography sx={{ textAlign: 'right', color: 'primary.light' }}>
            <code>&#8212;</code>
            {bio.name}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
