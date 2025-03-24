import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import the hook
import Ashley from '../images/AshleyKairu.JPG';
import FarahSamli from '../images/FarahSamli.jpeg';
import './../styles/KeyNote.css';
import SpeakerCard from './SpeakerCard';

export default function KeyNote() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // Use the useInView hook to detect when the section is in view
  const { ref } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5 // Trigger when 50% of the section is visible
  });

  const keynotes = [
    {
      type: 'Opening Keynote',
      topic: 'From Concept to Impact: The Intersection of STEAM, Equity & Leadership',
      title: 'Ashley Kairu (She/Her)',
      role: 'Process Engineer (Unilia Fuel Cells Inc.), Founder (BIPOC Women’s Society)',
      linkedin: 'https://www.linkedin.com/in/ashleykairu/',
      keyFocus: 'Catalyst coated membranes for fuel cell applications for heavy-duty vehicles',
      image: Ashley
    },
    {
      type: 'Closing Keynote',
      title: 'E.Farah Samli',
      topic: 'Bring Your Voice',
      role: 'Independent Contractor (PhD, Immunology and Vaccine Delivery, BS, Applied Biological Sciences) + TEDx Speaker',
      linkedin: 'https://www.linkedin.com/in/efsamli/',
      keyFocus:
        'Vaccine development and commercialization, Biomedical research and innovation, Change management and strategic planning',
      image: FarahSamli
    }
  ];

  return (
    <Box
      ref={ref} // Attach the ref to the section
      sx={{
        padding: '40px 20px',
        borderRadius: '10px',
        color: '#FFF'
        // minHeight: '100vh' // Ensure the gradient covers the entire page height
      }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#E8C3D1',
          fontFamily: 'Josefin Sans',
          fontWeight: 'bold',
          marginBottom: '40px'
        }}>
        KEYNOTE
      </Typography>
      <Box sx={{ marginBottom: '40px' }}></Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}></Box>
        {keynotes.map((keynote, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // Only trigger the animation once
            threshold: 0.1 // Trigger when 10% of the element is visible
          });

          return (
            <Box
              key={index}
              ref={ref}
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
              {/* type */}
              <Box
                sx={{
                  width: isMobile ? '80dvw' : '325px',
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    color: '#FFF',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>
                  {keynote.type}
                </Typography>

                {/* topic */}
                <Box
                  sx={{
                    height: isMobile ? 'auto' : '50px', //to align top of card
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      color: '#FFF',
                      marginBottom: '10px',
                      fontWeight: 'regular',
                      fontStyle: 'italic'
                    }}>
                    {'Topic: ' + keynote.topic}
                  </Typography>
                </Box>
              </Box>

              {/* Keynote square */}
              <React.Fragment>
                {
                  <SpeakerCard
                    name={keynote.title}
                    role={keynote.role}
                    linkedinUrl={keynote.linkedin}
                    imageUrl={keynote.image}
                    focusArea={keynote.keyFocus}></SpeakerCard>
                }
              </React.Fragment>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
