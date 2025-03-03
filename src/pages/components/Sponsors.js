import './../styles/SupportUs.css';
import { Grid } from '@mui/material';
import Yoggu from '../images/Yoggu_Black-01 (1).png';
import DangGood from '../images/DangGoodBath-removebg-preview.png';
import smartSweet from '../images/smartsweet.webp';
import mc from '../images/McElhanney.png';
import SAC from '../images/SAC_FINAL-wordmark-colour.png';
import cima from '../images/CIMA+_logo_slogan_EN_2024_VERTICAL.png';
import donut from '../images/LD_BRAND_FULL_NODATE_FIN_LRG.png';
import coastal from '../images/coastal.png';
import SponsorPkg from './SponsorPkg';

export default function Sponsors() {
  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item xs={12} className="CenteredGridItem">
          <div className="SupportSectionContainer">
            <h1 className="blurb">THANK YOU TO OUR SPONSORS</h1>
            <div className="BoxContainer">
              {/* Top Row: First 4 Logos */}
              <div className="LogoRow">
                <img src={mc} alt="Sponsor Logo" className="SponsorLogo" />
                <img src={Yoggu} alt="Sponsor Logo" className="SponsorLogo" />
                <img src={SAC} alt="Sponsor Logo" className="SponsorLogo" />
                <img src={DangGood} alt="Sponsor Logo" className="SponsorLogo" />
              </div>
              {/* Bottom Row: Next 4 Logos */}
              <div className="LogoRow">
                <img src={smartSweet} alt="Sponsor Logo" className="SponsorLogo" />
                <img src={cima} alt="Sponsor Logo" className="SponsorLogo" />
                <img src={donut} alt="Sponsor Logo" className="SponsorLogo" />
                <img src={coastal} alt="Sponsor Logo" className="SponsorLogo" />
              </div>
            </div>
            <SponsorPkg />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
