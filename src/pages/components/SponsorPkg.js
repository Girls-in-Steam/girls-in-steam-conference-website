import './../styles/SponsorPkg.css';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/navbarlogo.png';
import CloseIcon from '@mui/icons-material/Close';

export default function SponsorPkg() {
  const dialogRef = useRef();
  return (
    <div id="SponsorPkg">
      {/* opened dialog */}
      <dialog className="popup" ref={dialogRef}>
        <div className="pkgContainer">
          {/* top part */}
          <Box
            className="toppart"
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              backgroundColor: '#472E86',
              width: '100%',
              boxSizing: 'border-box'
            }}>
            <Toolbar
              id="toolbar"
              sx={{
                width: '100%',
                padding: '0px 16px 5px',
                minHeight: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}>
              <div
                className="navbar-logo"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <img src={logo} aria-label="logo" height="50px" data-testid="App-logo" />
              </div>
              <h3 className="blurb">Sponsorship Package</h3>
              <Button
                size="large"
                onClick={() => {
                  dialogRef.current?.close();
                }}>
                <CloseIcon fontSize="large" style={{ color: 'white' }}></CloseIcon>
              </Button>
            </Toolbar>
          </Box>

          {/* for pdf and link */}
          <div className="mainpart">
            <div className="pdfcontainer">
              <iframe
                className="pdf"
                src="https://drive.google.com/file/d/1yAUocidSGu05fnW2iRjO4XaJnlYz7QxO/preview"
              />
            </div>
            <a className="sponsorlink" href="mailto:UBC.sponsorship@girlsinsteam.org">
              Become a Sponsor
            </a>
          </div>
        </div>
      </dialog>

      {/* to open dialog */}
      <Button
        onClick={() => {
          dialogRef.current?.showModal();
        }}
        sx={{
          width: 300,
          height: 50,
          backgroundColor: '#6363AB',
          color: 'white',
          borderRadius: 4,
          fontFamily: 'Josefin Sans',
          fontSize: 18,
          fontWeight: 700,
          marginTop: 2,
          boxShadow: '0 0 10px white',
          zIndex: 2,
          '&:hover': {
            boxShadow: '0 0 15px white'
          }
        }}
        variant="contained">
        Sponsorship Package
      </Button>
    </div>
  );
}
