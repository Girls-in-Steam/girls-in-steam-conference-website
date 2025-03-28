import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Agenda() {
  return (
    <Box
      sx={{
        padding: '40px 20px',
        borderRadius: '10px',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the entire agenda horizontally
        justifyContent: 'center', // Center the entire agenda vertically
        minHeight: '100vh',
        overflow: 'hidden' // Ensure animations don't overflow
      }}>
      {/* Add the keyframes to a style tag */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Agenda Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#E8C3D1',
          fontFamily: 'Josefin Sans',
          fontWeight: 'bold',
          marginBottom: '40px',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
          animation: 'slideIn 1s ease-out' // Apply slide-in animation
        }}>
        AGENDA
      </Typography>

      {/* Agenda Items */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '800px',
          width: '100%', // Ensure it takes full width on smaller screens
          padding: { xs: '0 10px', sm: '0 20px' } // Add padding for smaller screens
        }}>
        {/* Agenda Item 1 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' }, // Align to start on mobile, center on larger screens
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile
            animation: 'slideIn 1s ease-out 0.2s', // Slide in with delay
            animationFillMode: 'both' // Ensure the element stays visible after animation
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' }, // Full width on mobile
              fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
              textAlign: { xs: 'left', sm: 'right' } // Left-align on mobile, right-align on larger screens
            }}>
            8:00AM - 8:30AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' } // Add margin on larger screens
            }}>
            Registration @ Lobby (outside ESC)
          </Typography>
        </Box>

        {/* Agenda Item 2 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 0.4s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            8:30AM - 9:00AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Opening Ceremony @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 3 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 0.6s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            9:00AM - 10:00AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Opening Keynote @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 4 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 0.8s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            10:30AM - 11:00AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Breakfast @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 5 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 1s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            11:00AM - 12:00PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            STEAM Workshops Part 1 @ BUCHD
          </Typography>
        </Box>

        {/* Agenda Item 6 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 1s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            12:00PM - 1:50PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Lunch, Networking & Boothing Session @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 7 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 1.2s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            2:00PM - 3:00PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            STEAM Workshops Part 2 @ BUCHD
          </Typography>
        </Box>

        {/* Agenda Item 7 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 1.4s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            3:15PM - 4:15PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            STEAM Panels @ BUCHD
          </Typography>
        </Box>

        {/* Agenda Item 8 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 1.6s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            4:15PM - 4:30PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Break @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 9 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 1.8s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            4:30PM - 5:15PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Closing Keynote @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 10 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
            animation: 'slideIn 1s ease-out 2s', // Slide in with delay
            animationFillMode: 'both'
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            5:15PM - 5:30PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Final Remarks & Closing @ ESC
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
