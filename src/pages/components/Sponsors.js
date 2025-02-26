import './../styles/SupportUs.css';
import { Grid } from '@mui/material';
import SponsorLogoPlaceHolder from '../images/SponsorLogoPlaceHolder.png';
import Yoggu from '../images/Yoggu_Black-01 (1).png';
import DangGood from '../images/DangGoodBath-removebg-preview.png';
import smartSweet from '../images/SS-Logo-Vector_White-230131.png';
import mc from '../images/McElhanney - Logo 08-21-2023.png';
import coastal from '../images/COASTAL REIGN LOGO.png';
import SAC from '../images/SAC_FINAL-wordmark-colour.png';
import cima from '../images/CIMA+_logo_slogan_EN_2024_VERTICAL.png';
import donut from '../images/LD_BRAND_FULL_NODATE_FIN_LRG.png';

export default function Sponsors() {
  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item sm={12} md={10} className="CenteredGridItem">
          <div className="SupportSectionContainer">
            <h1 className="blurb">THANK YOU SO MUCH TO OUR SPONSORS</h1>
            <div className="BoxContainer">
              {/* Replace placeholder logos with actual sponsor logos */}
              <img src={Yoggu} alt="Sponsor Logo" className="SponsorLogo" />              
              <img src={smartSweet} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={mc} alt="Sponsor Logo" className="SponsorLogo" />              
              <img src={SAC} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={DangGood} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={cima} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={donut} alt="Sponsor Logo" className="SponsorLogo" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
