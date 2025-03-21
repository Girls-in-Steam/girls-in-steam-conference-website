import './../styles/TheTeam.css';
import React from 'react';
import BioDialog from './BioDialog.js';
import { bioData } from '../data/bioData.js';

export default function Slider() {
  const [open, setOpen] = React.useState(false);
  const [bio, setBio] = React.useState(bioData[0]);
  const handleBioImgClick = (data) => {
    setOpen(true);
    setBio(data);
  };
  return (
    <div className="the-team">
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
