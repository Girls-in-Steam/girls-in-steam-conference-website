import { Grid, Typography } from '@mui/material';
import booth from './../images/booth.jpg';
import './../styles/AboutUs.css';
import './../../fonts/JosefinSans-VariableFont_wght.ttf';
import './../../fonts/Rastano.ttf';
import { FaGear } from 'react-icons/fa6';
import { GiSprout } from 'react-icons/gi';
import robotMascot from '../images/robot-mascot.png';

export default function AboutUs() {
  return (
    <div id="About">
      {/* Grid Layout */}
      <Grid container spacing={2} className="AboutUsContainer">
        {/* Left Section (Text) */}
        <Grid
          item
          id="AboutUsDesc"
          sm={12}
          md={6}
          sx={{
            position: 'relative',
            marginTop: '50px' // Move the entire grid item down
          }}>
          {/* Gear Icon inside the left text section */}
          <FaGear
            style={{
              position: 'absolute',
              top: '-5%',
              left: '-20%',
              fontSize: '190px',
              zIndex: 2,
              color: '#ABA0CE', // Use your desired color
              opacity: 0.3,
              transform: 'rotate(20deg)'
            }}
          />

          <Typography
            variant="h4"
            sx={{
              textAlign: 'left',
              color: '#E8C3D1',
              fontFamily: 'Josefin Sans',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}>
            ABOUT THE CONFERENCE
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              color: '#D0CDEA',
              fontFamily: 'Josefin Sans',
              fontWeight: 'normal',
              marginBottom: '20px'
            }}>
            At InnovateHER, our mission is to cultivate a dynamic space for high school and college
            students in the Greater Vancouver Area to explore and engage with Science, Technology,
            Engineering, Arts, and Maths (STEAM) alongside principles of Accessibility. Our full-day
            event is dedicated to bridging the gender gap in STEM industries by providing immersive
            workshops, insightful panels, and interactive experiences that embrace all dimensions of
            STEAM, including Art and Accessibility. We are committed to nurturing the talents and
            passions of young female and gender-diverse students, equipping them with the skills,
            confidence, and resources necessary to thrive in STEAM fields. Through collaboration,
            education, and empowerment, we aspire to inspire the next generation of innovators,
            problem solvers, and leaders who will shape the future of STEAM with inclusivity and
            excellence.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              color: '#D0CDEA',
              fontWeight: 'medium',
              marginBottom: '70px'
            }}>
            Join us as we embark on a journey of discovery, creativity, and empowerment, paving the
            way for a more diverse and inclusive landscape in STEAM. Together, we can break
            barriers, shatter stereotypes, and forge new pathways toward a brighter, more
            sustainable, and more equitable future for all.
          </Typography>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item sm={12} md={6} style={{ marginTop: '50px', position: 'relative' }}>
          {/* Booth Image */}
          <div className="shadow-rectangle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="photo-wrapper">
              <img src={booth} alt="Girls in STEAM Exec team" className="photo" />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Rastano',
                  color: 'black',
                  marginTop: '5px'
                }}>
                Hello from the team ;
              </Typography>
            </div>
          </div>

          {/* Robot Mascot Image placed beside and near bottom with tilt */}
          <img src={robotMascot} alt="robotMascot" className="robotMascot-image" />
          <GiSprout
            className="sprout"
            style={{
              position: 'absolute',
              top: '50%',
              right: '20%',
              fontSize: '350px',
              color: '#6363AB',
              zIndex: 1
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
