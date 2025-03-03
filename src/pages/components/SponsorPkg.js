import './../styles/SponsorPkg.css';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function SponsorPkg() {
  const dialogRef = useRef();
  return (
    <div id="SponsorPkg">
      {/* Opened dialog */}
      <dialog className="popup" ref={dialogRef}>
        <div className="pkgContainer">
          {/* Close button */}
          <Button
            className="closeButton"
            size="large"
            onClick={() => {
              dialogRef.current?.close();
            }}>
            <CloseIcon fontSize="large" style={{ color: 'white' }} />
          </Button>

          {/* PDF and link */}
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

      {/* Button to open dialog */}
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
