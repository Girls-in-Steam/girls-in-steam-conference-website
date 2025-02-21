import { PiCalendarDotsFill } from 'react-icons/pi';
import { TiLocation } from 'react-icons/ti';
import { Box, Button } from '@mui/material';
import { FaGear } from 'react-icons/fa6';
import { ImPlus } from 'react-icons/im';
import { MdScience } from 'react-icons/md';
import { PiLineVerticalBold } from 'react-icons/pi';
import { BiSolidRectangle } from 'react-icons/bi';
import { FaMousePointer } from 'react-icons/fa';
import './../styles/Hero.css';
import mascot from '../images/mascot.png';

export default function Hero() {
  return (
    <div id="Hero">
      <div style={{ position: 'relative', width: '80%', height: '50vh', left: '-200px' }}>
        {/* Horizontal Line */}
        <PiLineVerticalBold
          style={{
            position: 'absolute',
            top: '-50px',
            left: '0px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'rotate(90deg) scaleY(12)' // Rotate 90 degrees and scale horizontally
          }}
        />

        {/* Vertical Lines */}
        <PiLineVerticalBold class="hanging-line-left" />

        <PiLineVerticalBold class="hanging-line-flask" />

        <PiLineVerticalBold class="hanging-line-left-gear" />

        <MdScience class="left-flask" />

        {/* Large Gear Icon */}
        <FaGear class="left-large-gear" />

        {/* Smaller Gear Icon */}
        <FaGear class="left-small-gear" />

        {/* Plus Icon */}
        <ImPlus class="left-plus" />
        <BiSolidRectangle class="left-taller-rectangle" />
        <BiSolidRectangle class="left-shorter-rectangle" />
        <FaMousePointer class="mouse-pointer" />
      </div>

      <div className="info-column">
        <h2 className="gisConference">
          GIS Conference 2025 <br />
        </h2>
        <div className="innovate-her-container">
          <h1 className="innovate">Innovate</h1>
          <h1 className="her">HER</h1>
        </div>

        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <PiCalendarDotsFill
            style={{ marginRight: '8px', verticalAlign: 'middle', color: '#6363AB' }}
          />
          <h4 className="description">March 29th, 2025</h4>
        </div>

        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <TiLocation style={{ marginRight: '8px', verticalAlign: 'middle', color: '#6363AB' }} />
          <h4 className="description" style={{ lineHeight: '1.8' }}>
            The University of British Columbia
          </h4>
        </div>

        <Box className="hero-buttons" sx={{ display: 'flex', gap: 2 }}>
          <Button
            onClick={() => {
              console.log('Button clicked');
              window.open('https://forms.gle/W1q8MdD7scvE1T5K9');
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
              zIndex: 2,
              '&:hover': {
                boxShadow: '0 0 15px white'
              }
            }}
            variant="contained">
            Notify Me
          </Button>
          <Button
            onClick={() => {
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
              zIndex: 2,
              '&:hover': {
                boxShadow: '0 0 15px white'
              }
            }}
            variant="contained">
            Sponsor GIS
          </Button>
        </Box>
      </div>

      <div className="image-container">
        <img src={mascot} alt="mascot" className="mascot-image" />
        <BiSolidRectangle class="mascot-rectangle" />
        <PiLineVerticalBold class="hanging-line-right" />
        <MdScience class="right-flask" />
        <FaGear class="right-gear" />

        {/* Plus Icon */}
        <ImPlus class="right-plus" />

        <BiSolidRectangle class="right-rectangle" />
      </div>
    </div>
  );
}
