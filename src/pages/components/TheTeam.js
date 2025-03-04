import './../styles/TheTeam.css';
import React from 'react';
import BioDialog from './BioDialog.js';
import { bioData } from '../data/bioData.js';

import { Typography } from '@mui/material';

export default function Slider() {
  const [open, setOpen] = React.useState(false);
  const [bio, setBio] = React.useState(bioData[0]);
  const handleBioImgClick = (data) => {
    setOpen(true);
    setBio(data);
  };
  return (
    <div className="the-team">
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '30px', color: '#E8C3D1' }}>
        THE TEAM BEHIND THE CONFERENCE
      </Typography>
      <div className="slider">
        {/* need two for infinite scrolling */}
        <div className="imgs-slide">
          {bioData.map((bio) => (
            <img
              src={bio.src}
              alt={bio.name}
              key={bio.name}
              onClick={() => handleBioImgClick(bio)}
            />
          ))}
        </div>
        <div className="imgs-slide">
          {bioData.map((bio) => (
            <img
              src={bio.src}
              alt={bio.name}
              key={bio.name}
              onClick={() => handleBioImgClick(bio)}
            />
          ))}
        </div>
      </div>
      <BioDialog open={open} setOpen={setOpen} bio={bio} />
    </div>
  );
}
