import { PiCalendarDotsFill } from 'react-icons/pi';
import { TiLocation } from 'react-icons/ti';
import { Box, Button } from '@mui/material';
import { FaGear } from 'react-icons/fa6';
import { ImPlus } from 'react-icons/im';
import { MdScience } from 'react-icons/md';
import { PiLineVerticalBold } from 'react-icons/pi';
import { FaMousePointer } from 'react-icons/fa';
import './../styles/Hero.css';
import mascot from '../images/mascot.png';

export default function Hero() {
  return (
    <div id="Hero">
      {/* Decorative Elements Container */}
      <div style={{ position: 'relative', width: '80%', height: '50vh', left: '-200px' }}>
        {/* Horizontal Line */}
        <PiLineVerticalBold
          className="top-left-across"
          style={{
            position: 'absolute',
            top: '-50px',
            left: '0px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'rotate(90deg) scaleY(12)', // Rotate 90 degrees and scale horizontally
            zIndex: 1 // Lower than the button
          }}
        />

        {/* Vertical Lines */}
        <PiLineVerticalBold className="hanging-line-left" style={{ zIndex: 1 }} />
        <PiLineVerticalBold className="hanging-line-flask" style={{ zIndex: 1 }} />
        <PiLineVerticalBold className="hanging-line-left-gear" style={{ zIndex: 1 }} />

        {/* Flask Icon */}
        <MdScience className="left-flask" style={{ zIndex: 1 }} />

        {/* Large Gear Icon */}
        <FaGear className="left-large-gear" style={{ zIndex: 1 }} />

        {/* Smaller Gear Icon */}
        <FaGear className="left-small-gear" style={{ zIndex: 1 }} />

        {/* Plus Icon */}
        <ImPlus className="left-plus" style={{ zIndex: 1 }} />
        <FaMousePointer className="mouse-pointer" style={{ zIndex: 1 }} />
      </div>

      {/* Info Column */}
      <div className="info-column">
        <h2 className="gisConference">
          GIS Conference 2025 <br />
        </h2>
        <div className="innovate-her-container">
          <h1 className="innovate">Innovate</h1>
          <h1 className="her">HER</h1>
        </div>

        {/* Date */}
        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <PiCalendarDotsFill
            style={{ marginRight: '8px', verticalAlign: 'middle', color: '#d0cdea' }}
          />
          <h4 className="description">March 29th, 2025</h4>
        </div>

        {/* Location */}
        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <TiLocation style={{ marginRight: '8px', verticalAlign: 'middle', color: '#d0cdea' }} />
          <h4 className="description" style={{ lineHeight: '1.8' }}>
            The University of British Columbia
          </h4>
        </div>

        {/* Buttons */}
        <Box className="hero-buttons" sx={{ display: 'flex', gap: 2 }}>
          <Button
            onClick={() => {
              console.log('Button clicked');
              window.open('https://www.bouncelife.com/events/67a6e2324801cd5a252d1aa8');
            }}
            sx={{
              width: 180,
              height: 50,
              backgroundColor: '#6363AB',
              color: 'white',
              borderRadius: 4,
              fontFamily: 'Josefin Sans',
              fontSize: 18,
              fontWeight: 700,
              marginTop: 2,
              boxShadow: '0 0 10px white',
              zIndex: 10, // Higher than decorative elements
              '&:hover': {
                boxShadow: '0 0 15px white'
              }
            }}
            variant="contained">
            Buy Tickets
          </Button>
          <Button
            onClick={() => {
              console.log('Button clicked');
              window.location.href = 'mailto:UBC.sponsorship@girlsinsteam.org';
            }}
            sx={{
              width: 180,
              height: 50,
              backgroundColor: 'rgb(125, 83, 144, 0.4)',
              color: 'white',
              borderRadius: 4,
              fontFamily: 'Josefin Sans',
              fontSize: 18,
              fontWeight: 700,
              marginTop: 2,
              boxShadow: '0 0 10px white',
              zIndex: 10, // Higher than decorative elements
              '&:hover': {
                boxShadow: '0 0 15px white'
              }
            }}
            variant="contained">
            Sponsor GIS
          </Button>
        </Box>
      </div>

      {/* Image Container */}
      <div className="image-container">
        <img src={mascot} alt="mascot" className="mascot-image" />
        <PiLineVerticalBold className="hanging-line-right" style={{ zIndex: 1 }} />
        <MdScience className="right-flask" style={{ zIndex: 1 }} />
        <FaGear className="right-gear" style={{ zIndex: 1 }} />

        {/* Plus Icon */}
        <ImPlus className="right-plus" style={{ zIndex: 1 }} />
      </div>
    </div>
  );
}
