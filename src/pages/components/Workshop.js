import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import SpeakerCard from './SpeakerCard';

// Import images
import FarahSamli from '../images/FarahSamli.jpeg';
import AliceHuang from '../images/AliceHuang.jpeg';
import KendraMunn from '../images/KendraMunn.jpg';
import TabreekSomani from '../images/TabreekSomani.jpg';
import SijanPoudel from '../images/SijanPoudel.jpg';
import HarmanpreetKaur from '../images/HarmanpreetKaur.jpeg';
import Flavia from '../images/Flavia.jpg';
import MichelleChan from '../images/MichelleChan.jpeg';
import FaezehYazdi from '../images/FaezehYazdi.jpg';
import Parnian from '../images/Parnian.jpeg';

export default function Workshop() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // Example data for workshops
  const workshops = [
    // Science
    {
      type: 'Science',
      title: 'E. Farah Samli (She/Her)',
      role: 'Independent Contractor + TEDx Speaker',
      organization: 'PhD, Immunology and Vaccine Delivery, BS, Applied Biological Sciences',
      linkedin: 'https://www.linkedin.com/in/efsamli/',
      keyFocus:
        'Vaccine development and commercialization, Biomedical research and innovation, Change management and strategic planning',
      image: FarahSamli, // Use the imported image
      topic: 'Designing Careers in Science'
    },
    {
      type: 'Science',
      title: 'Dr. Alice Huang (She/Her)',
      role: ' Family Medicine Resident Doctor',
      organization: 'University of Alberta',
      linkedin: 'https://www.linkedin.com/in/alicejhuang/',
      keyFocus: "Interest in Women's Health ",
      image: AliceHuang, // Use the imported image
      topic: 'Demystifying Medical School Admissions: From Aspiring Student to Practicing Physician'
    },
    // Technology
    {
      type: 'Technology',
      title: 'Tabreek Somani (She/Her)',
      role: 'Data and AI Consultant',
      organization: 'EY',
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      keyFocus:
        'Passionate about improving inclusivity in the tech industry, founded an online tutoring and volunteer management platform to provide STEM education for underserved youth, including neurodiverse students.',
      image: TabreekSomani, // Use the imported image
      topic: 'Decoding Decisions: How Data Shapes the World Around Us'
    },
    {
      type: 'Technology',
      title: 'Kendra Munn (She/Her)',
      role: '3D Urban Specialist',
      organization: 'Esri Canada',
      linkedin: 'https://www.linkedin.com/in/kendra-munn-55b087201/?originalSubdomain=ca',
      keyFocus: '3D GIS, GIS for Urban planning, Indoor GIS',
      image: KendraMunn, // Use the imported image
      topic: 'Data Collection & Visualization in ArcGIS'
    },
    // Engineering
    {
      type: 'Engineering',
      title: 'Sijan Poudel',
      role: ' Founder of Docdachi & Chibikawa AI, Software Engineer, Generative AI',
      organization: 'Heroic Design',
      linkedin: 'https://www.linkedin.com/in/sijan-poudel-24b036174/?originalSubdomain=ca',
      keyFocus: 'Key Expertise in Figma Design, Full Stack Development, Generative AI',
      image: SijanPoudel, // Use the imported image
      topic: 'From Zero to Pro: Build and Launch Your Web App in Under 60 minutes with AI'
    },
    {
      type: 'Engineering',
      title: 'Harmanpreet Kaur (She/Her)',
      role: 'Software Engineer',
      organization: 'Microsoft',
      linkedin: 'https://www.linkedin.com/in/hkaur023/',
      keyFocus:
        'Full Stack Engineer passionate about crafting sleek, user-friendly interfaces that make applications intuitive and effortless to use.',
      image: HarmanpreetKaur, // Use the imported image
      topic: 'Engineering Your Future: How to Break Into Software Engineering'
    },
    // Arts
    {
      type: 'Arts',
      title: 'Flavia Chonso',
      role: 'Senior Product Designer',
      organization: 'Compass Digital',
      linkedin: 'https://www.linkedin.com/in/flachonso',
      keyFocus: 'Product Design/UX/UI Design',
      image: Flavia, // Use the imported image
      topic: 'Designing Accessible Data Visualizations for Everyone'
    },
    {
      type: 'Arts',
      title: 'Michelle Chan',
      role: ' Senior Experience Design Lead',
      organization: 'Province of British Columbia',
      linkedin: 'https://www.linkedin.com/in/michellechan428/?originalSubdomain=ca',
      keyFocus: 'Making user-centred design fun, accessible and sustainable for the community',
      image: MichelleChan,
      topic:
        'Creating for critters, creatures and carnivores: INNOVATING the civic experience of Zootopia'
    },
    // Math
    {
      type: 'Math',
      title: 'Dr. Faezeh Yazdi (She/Her)',
      role: 'Postdoctoral Fellow, Department of Statistics and Actuarial Science',
      organization: 'SFU.',
      linkedin: 'https://www.linkedin.com/in/faezeh-yazdi-3983787a/',
      keyFocus:
        'Computer model (simulator) calibration, Emulation and uncertainty quantification, Experimental design and advanced statistical methods',
      image: FaezehYazdi, // Use the imported image
      topic: 'The Power of Statistics and Mathematics in Real-World Problem Solving'
    },
    {
      type: 'Math',
      title: 'Parnian Rezaei (She/Her)',
      role: 'Quantitative Researcher',
      organization: 'SFU Department of Statistics and Actuarial Science.',
      linkedin: 'https://www.linkedin.com/in/parnian-rezaei/?originalSubdomain=ca',
      keyFocus:
        'Mathematics behind financial systems, blending theory and real- world application to drive meaningful insights and support sound financial decision-making',
      image: Parnian, // Use the imported image
      topic: 'The Power of Statistics and Mathematics in Real-World Problem Solving'
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
        return { emoji: '🔭', location: '@ BUCH D314' };
      case 'Technology':
        return { emoji: '💻', location: '@ BUCH D316' };
      case 'Engineering':
        return { emoji: '📋', location: '@ BUCH D322' };
      case 'Arts':
        return { emoji: '📑', location: '@ Buch D323' };
      case 'Math':
        return { emoji: '🧮', location: '@ Buch D317' };
      default:
        return { emoji: '', location: '' };
    }
  };

  return (
    <Box
      sx={{
        padding: '40px 20px',
        borderRadius: '10px',
        color: '#FFF',
        minHeight: '100vh' // Ensure the gradient covers the entire page height
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
          alignItems: 'center'
        }}>
        <Typography variant="body1" sx={{ textAlign: 'left', color: '#FFF', marginBottom: '10px' }}>
          • Attendees are encouraged to have lunch between workshops.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', color: '#FFF', marginBottom: '10px' }}>
          • Each category (Science, Arts, Math, Technology, Engineering) has 2 workshops. Attendees
          are welcome to attend any 2 workshops of their choice!
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', color: '#FFF', marginBottom: '10px' }}>
          • During lunch, attendees are encouraged to go to our career/networking fair with booths
          from sponsors & partners which will be set up in Location TBD.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '40px' }}>
        {groupedWorkshops.map((group, groupIndex) => {
          const { emoji, location } = getWorkshopDetails(group[0].type); // Get emoji and location for the group
          return (
            <Box key={groupIndex} sx={{ marginBottom: '40px' }}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  color: '#fff',
                  fontFamily: 'Josefin Sans',
                  marginBottom: '20px'
                }}>
                {emoji} {group[0].type} Workshops {location}
              </Typography>
              {/* Workshop pair */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                  marginBottom: '20px'
                }}>
                {group.map((workshop, index) => {
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
                      {/* Time Label */}

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
                          {workshop.type === 'Math'
                            ? '2:00 PM - 3:00 PM'
                            : index === 0
                              ? '11:00 AM - 12:00 PM'
                              : '2:00 PM - 3:00 PM'}
                        </Typography>
                        <Box
                          sx={{
                            height: isMobile ? 'auto' : '65px', //to align top of card
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
                            {'Topic: ' + workshop.topic}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Workshop square */}
                      <React.Fragment>
                        {
                          <SpeakerCard
                            name={workshop.title}
                            role={workshop.role + ' (' + workshop.organization + ')'}
                            linkedinUrl={workshop.linkedin}
                            imageUrl={workshop.image}
                            focusArea={workshop.keyFocus}></SpeakerCard>
                        }
                      </React.Fragment>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
