import React from 'react';
import { Typography, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon

// Import all images
import Flavia from '../images/Flavia.jpg';

export default function Workshop() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is mobile-sized

  // Example data for workshops
  const workshops = [
    {
      type: 'Science',
      title: 'placeholder',
      role: 'placeholder',
      organization: 'placeholder',
      linkedin: 'https://spph.ubc.ca/faculty/professors/annalee-yassi/',
      keyFocus: 'placeholder',
      image: 'tbd' // Use the imported image
    },
    {
      type: 'Science',
      title: 'placeholder',
      role: 'placeholder',
      organization: 'placeholder',
      linkedin: 'https://www.linkedin.com/in/ashiana-sunderji-58715b1b5 ',
      keyFocus: 'placeholder',
      image: 'tbd' // Use the imported image
    },
    {
      type: 'Technology',
      title: 'Tabreek Somani ',
      role: 'placeholder',
      organization: 'placeholder',
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      keyFocus: 'placeholder',
      image: 'tbd' // Use the imported image
    },
    {
      type: 'Technology',
      title: 'Kendra Munn',
      role: 'placeholder',
      organization: 'placeholder',
      linkedin: 'https://www.linkedin.com/in/bobbrown',
      keyFocus: 'placeholder',
      image: 'tbd' // Use the imported image
    },
    {
      type: 'Engineering',
      title: 'tbd',
      role: 'tbd',
      organization: 'tbd',
      linkedin: 'https://www.linkedin.com/in/charliedavis',
      keyFocus: 'tbd',
      image: 'tbd' // Use the imported image
    },
    {
      type: 'Engineering',
      title: 'tbd',
      role: 'tbd',
      organization: 'tbd',
      linkedin: 'https://www.linkedin.com/in/dianaevans',
      keyFocus: 'tbd',
      image: 'tbd' // Use the imported image
    },
    {
      type: 'Arts and Math',
      title: 'Flavia Chonso',
      role: 'Senior Product Designer',
      organization: 'Compass Digital',
      linkedin: 'https://www.linkedin.com/in/flachonso',
      keyFocus: 'Product Design/UX/UI Design',
      image: Flavia // Use the imported image
    },
    {
      type: 'Arts and Math',
      title: 'placeholder',
      role: 'Placeholder',
      organization: 'Creative Studio',
      linkedin: 'https://www.linkedin.com/in/frankharris',
      keyFocus: 'placeholder',
      image: 'tbd' // Use the imported image
    }
  ];

  // Group workshops into pairs
  const groupedWorkshops = [];
  for (let i = 0; i < workshops.length; i += 2) {
    groupedWorkshops.push(workshops.slice(i, i + 2));
  }

  // Function to get emoji and location based on workshop type
  const getWorkshopDetails = (type) => {
    switch (type) {
      case 'Science':
        return { emoji: '🔭', location: '@ CEME 1202' };
      case 'Technology':
        return { emoji: '💻', location: '@ MCLD 2018' };
      case 'Engineering':
        return { emoji: '📋', location: '@ MCLD 3018' };
      case 'Arts and Math':
        return { emoji: '📑 🧮', location: '@ MCLD 2014' };
      default:
        return { emoji: '', location: '' };
    }
  };

  return (
    <Box
      sx={{
        padding: isMobile ? '20px 10px' : '40px 20px', // Adjust padding for mobile
        background: 'radial-gradient(circle, #584D7A, #57579F, #584D7A)', // New radial gradient
        borderRadius: '10px',
        color: '#FFF',
        width: '100%', // Span the entire page width
        boxSizing: 'border-box' // Ensure padding is included in the width
      }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'} // Adjust font size for mobile
        sx={{
          textAlign: 'center',
          color: '#E8C3D1',
          fontFamily: 'Josefin Sans',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
        STEAM WORKSHOPS
      </Typography>
      {/* Note Section */}
      <Box
        sx={{
          maxWidth: '800px',
          margin: '0 auto 40px auto', // Center and add margin below
          padding: '20px',
          backgroundColor: 'transparent', // Transparent background
          borderRadius: '10px',
          alignItems: 'left'
        }}>
        <Typography variant="body1" sx={{ textAlign: 'left', color: '#FFF', marginBottom: '10px' }}>
          • Attendees are encouraged to have lunch between workshops.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', color: '#FFF', marginBottom: '10px' }}>
          • Each category (Science, Arts & Math, Technology, Engineering) has 2 workshops. Attendees
          are welcome to attend any 2 workshops of their choice!
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', color: '#FFF', marginBottom: '10px' }}>
          • During lunch, attendees are encouraged to go to our career/networking fair with booths
          from sponsors & partners which will be set up in Location TBD.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px', // Space between groups
          maxWidth: '1200px', // Limit the width of the grid
          margin: '0 auto', // Center the grid
          width: '100%' // Span the entire width
        }}>
        {groupedWorkshops.map((group, groupIndex) => {
          const { emoji, location } = getWorkshopDetails(group[0].type); // Get emoji and location for the group
          return (
            <Box key={groupIndex}>
              {/* Text above the pair of workshops */}
              <Typography
                variant={isMobile ? 'h6' : 'h5'} // Adjust font size for mobile
                sx={{
                  textAlign: 'center',
                  color: '#fff',
                  fontFamily: 'Josefin Sans',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                {emoji} {group[0].type} Workshops{' '}
                <Typography component="span" sx={{ fontStyle: 'italic' }}>
                  {location}
                </Typography>
              </Typography>
              {/* Workshop pair */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', // Single column for mobile
                  gap: '10px', // Reduced gap between squares
                  justifyContent: 'center', // Center the grid items
                  width: 'fit-content', // Fit content width
                  margin: '0 auto' // Center the grid
                }}>
                {group.map((workshop, index) => (
                  <Box key={index}>
                    {/* Time Label */}
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: 'center',
                        color: '#FFF',
                        marginBottom: '10px',
                        fontWeight: 'bold'
                      }}>
                      {index === 0
                        ? '11:00 AM - 12:00 PM' // Left box
                        : groupIndex === 0 || groupIndex === 3
                          ? '1:30 PM - 2:30 PM' // First and fourth right boxes
                          : '12:00 PM - 1:00 PM'}{' '}
                      {/* Second and third right boxes */}
                    </Typography>
                    {/* Workshop square */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(171, 165, 217, 0.2)', // Semi-transparent background
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'left',
                        color: '#FFF',
                        width: isMobile ? '100%' : '400px', // Full width on mobile
                        height: isMobile ? 'auto' : '350px', // Auto height on mobile
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the image and text
                        position: 'relative' // For the vertical line
                      }}>
                      {/* Circular Photo */}
                      <Box
                        sx={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          backgroundColor: '#FFF', // Placeholder for the image
                          marginBottom: '10px',
                          overflow: 'hidden'
                        }}>
                        <img
                          src={workshop.image} // Use the imported image
                          alt={workshop.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Box>
                      {/* Name and LinkedIn Icon */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '10px'
                        }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                          {workshop.title}
                        </Typography>
                        <IconButton
                          href={workshop.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: '#0A66C2', padding: '0' }}>
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                      {/* Role and Organization */}
                      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                        {workshop.role} ({workshop.organization})
                      </Typography>
                      {/* Key Focus Area/Research Interest */}
                      <Typography
                        variant="body1"
                        sx={{ fontStyle: 'italic', marginBottom: '10px' }}>
                        Key Focus Area/Research Interest:
                      </Typography>
                      <Typography variant="body1">{workshop.keyFocus}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
