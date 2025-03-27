import React from 'react';
import { Typography, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import Yoggu from '../images/Yoggu_Black-01 (1).png';
import DangGood from '../images/DangGoodBath-removebg-preview.png';
import smartSweet from '../images/smartsweet.webp';
import mc from '../images/McElhanney.png';
import SAC from '../images/SAC_FINAL-wordmark-colour.png';
import cima from '../images/CIMA+_logo_slogan_EN_2024_VERTICAL.png';
import donut from '../images/LD_BRAND_FULL_NODATE_FIN_LRG.png';
import oztrekk from '../images/oztrekk.jpeg';
import luscan from '../images/luscan.jpg';
import unclefatih from '../images/unclefatih.png';
import vgb from '../images/vgb.png';
import waltergage from '../images/waltergage.png';
import './../styles/SupportUs.css';
import SponsorPkg from './SponsorPkg';

export default function Sponsors() {
  // Array of sponsor logos
  const sponsorLogos = [
    mc,
    Yoggu,
    SAC,
    DangGood,
    smartSweet,
    cima,
    donut,
    oztrekk,
    luscan,
    unclefatih,
    vgb,
    waltergage
  ];

  // Function to render a single logo with scroll animation
  const renderLogo = (logo, index) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Only trigger the animation once
      threshold: 0.1, // Trigger when 10% of the element is visible
      delay: index * 200 // Stagger the animation delay based on the index
    });

    return (
      <img
        ref={ref}
        src={logo}
        alt="Sponsor Logo"
        className="SponsorLogo"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0.8)',
          transition: `opacity 0.5s ${index * 0.2}s ease-out, transform 0.5s ${index * 0.2}s ease-out`
        }}
      />
    );
  };

  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item xs={12} className="CenteredGridItem">
          <div className="SupportSectionContainer">
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                color: '#E8C3D1',
                fontFamily: 'Josefin Sans',
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}>
              THANK YOU TO OUR SPONSORS
            </Typography>
            <div className="BoxContainer">
              {/* Top Row: First 4 Logos */}
              <div className="LogoRow">
                {sponsorLogos.slice(0, 4).map((logo, index) => renderLogo(logo, index))}
              </div>
              {/* Bottom Row: Next 4 Logos */}
              <div className="LogoRow">
                {sponsorLogos.slice(4, 8).map((logo, index) => renderLogo(logo, index + 4))}
              </div>
              <div className="LogoRow">
                {sponsorLogos.slice(8, 12).map((logo, index) => renderLogo(logo, index + 4))}
              </div>
            </div>
            {/* Centered SponsorPkg */}
            <div className="SponsorPkgContainer">
              <SponsorPkg id="sponsor-pkg"></SponsorPkg>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
