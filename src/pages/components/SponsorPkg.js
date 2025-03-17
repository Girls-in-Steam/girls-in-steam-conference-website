import './../styles/SponsorPkg.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function SponsorPkg() {
  const [isOpen, setOpen] = useState(false);

  const togglePkg = () => {
    setOpen(!isOpen);
  };

  if (isOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div id="SponsorPkg">
      <Button
        onClick={togglePkg}
        className="openButton"
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

      {isOpen && (
        <div className="pkgContainer">
          <div className="closeBtnContainer">
            <Button className="closeButton" size="large" onClick={togglePkg}>
              <CloseIcon fontSize="large" style={{ color: 'white' }} />
            </Button>
          </div>
          <div className="PdfContainer">
            <iframe
              className="pdf"
              src="https://drive.google.com/file/d/1yAUocidSGu05fnW2iRjO4XaJnlYz7QxO/preview"
            />
          </div>
          <a className="sponsorlink" href="mailto:UBC.sponsorship@girlsinsteam.org">
            Become a Sponsor
          </a>
        </div>
      )}
    </div>
  );
}
