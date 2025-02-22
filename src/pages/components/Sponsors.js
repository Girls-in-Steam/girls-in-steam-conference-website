import './../styles/SupportUs.css';
import { Grid } from '@mui/material';
import Yoggu from '../images/Yoggu_Black-01 (1).png';
import DangGood from '../images/DangGoodBath-removebg-preview.png';
import smartSweet from '../images/SS-Logo-Vector_White-230131.png';
import mc from '../images/McElhanney.png';
import SAC from '../images/SAC_FINAL-wordmark-colour.png';

export default function Sponsors() {
  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item sm={12} md={10} className="CenteredGridItem">
          <div className="SupportSectionContainer">
            <h1 className="blurb">THANK YOU SO MUCH TO OUR SPONSORS</h1>
            <div className="BoxContainer">
              {/* Replace placeholder logos with actual sponsor logos */}
              <img src={mc} alt="Sponsor Logo" className="SponsorLogoMc" />
              <img src={Yoggu} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={SAC} alt="Sponsor Logo" className="SponsorLogoSAC" />
              <img src={DangGood} alt="Sponsor Logo" className="SponsorLogoDang" />
              <img src={smartSweet} alt="Sponsor Logo" className="SponsorLogoSmartSweet" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
