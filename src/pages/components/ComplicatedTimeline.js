import React from 'react';
import './../styles/SimpleTimeline.css';
import placeholder from '../images/catpic.jpg';
import placeholder2 from '../images/steambbt.png';
import { MdScience } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';
import { ImPlus } from 'react-icons/im';

const ComplicatedTimeline = () => {
  const timelineItems = [
    {
      time: '8:00AM - 8:30AM',
      title: '@ Engineering Student Centre',
      content: 'Registration'
    },
    {
      time: '8:30AM - 9:00AM',
      title: '@ Engineering Student Centre',
      content: 'Opening Ceremony',
      opendescription:
        "Join us for innovateHER's Opening Remarks by our Conference Co-Chairs Rachel Ng (she/her), Arnima Singh (she/her), and Founder Ariel Cao (she/her)."
    },
    {
      time: '9:00AM - 10:00PM',
      title: '@ Engineering Student Centre',
      image: placeholder,
      content: 'Opening Keynote',
      speakerdescription:
        'Speaker: First Last\nRole @ loc or title\n\nDescription/details about the activity, what will go over, etc.'
    },
    {
      time: '1:00AM - 2:30PM',
      title: '@ Abdul Ladha Science Centre',
      workshopImages: [placeholder2, placeholder2, placeholder2, placeholder2],
      content: 'STEAM Workshop Breakout',
      workshopDescription: [
        '\nA description/details about the activity, what will go over, etc. Can be as long or short as wanted.',
        'Accessible Coding and Web Design: Introduce participants to accessible coding practices and web design principles, emphasizing the importance of creating inclusive digital experiences for all users.',
        'Accessible App Development: Teach participants how to design and develop mobile apps with accessibility features that cater to users with different needs and abilities.'
      ]
    },
    {
      time: '1:00PM - 2:00PM',
      title: '@ TBD',
      content: 'Lunch'
    },
    {
      time: '2:30PM - 3:20PM',
      title: '@ TBD',
      content: 'Networking & Boothing'
    },
    {
      time: '3:20PM - 4:20PM',
      title: '@ TBD',
      content: 'STEAM Panels:',
      images: [placeholder, placeholder, placeholder, placeholder],
      description: [
        'First Last\nRole Name\n@company',
        'Second Last\nRole Name\n@company',
        'Third Last\nRole Name\n@company',
        'Fourth Last\nRole Name\n@company'
      ],
      workshop:
        '\ndescription/details about the activity, what will go over, etc. Can be as long or short as wanted.'
    },
    {
      time: '4:20PM - 4:30PM',
      title: '@ TBD',
      content: 'Break'
    },
    {
      time: '4:30PM - 5:00PM',
      title: '@TBD',
      content: 'Closing Keynote'
    },
    {
      time: '5:00PM - 5:30PM',
      title: '@ TBD',
      content: 'Closing Ceremony',
      description: 'Thank you to our particpants and sponsors for coming to InnovateHER'
    }
  ];

  // Helper function to render workshop description with bullet points and bold text for specific lines
  const renderWorkshopDescription = (workshopDescription) => {
    return (
      <div>
        {workshopDescription.map((line, index) => {
          // Check for "Accessible Coding and Web Design" or "Accessible App Development"
          if (
            line.includes('Accessible Coding and Web Design') ||
            line.includes('Accessible App Development')
          ) {
            // Split the line at the colon and wrap the part before the colon in <strong>
            const [boldText, restOfText] = line.split(':');
            return (
              <ul key={index} className="timeline-bullet-point">
                <li>
                  <strong>{boldText.trim()}:</strong> {restOfText.trim()}
                </li>
              </ul>
            );
          } else if (line.startsWith('Accessible')) {
            // For other "Accessible" lines, render as bullet points
            return (
              <ul key={index} className="timeline-bullet-point">
                <li>{line}</li>
              </ul>
            );
          } else {
            // For other lines, just render as a paragraph
            return (
              <p key={index} className="timeline-description">
                {line}
              </p>
            );
          }
        })}
      </div>
    );
  };

  return (
    <section className="timeline-section">
      <div className="timeline-items">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.content}</h4>
              <h5>{item.opendescription}</h5>

              {/* Check for single image */}
              {item.image && (
                <img src={item.image} alt="Timeline event" className="timeline-image" />
              )}

              {/* Check for array of images and descriptions for Panel 1 or Panel 2 */}
              {item.images && Array.isArray(item.images) && item.images.length > 0 && (
                <div className="timeline-images-container">
                  {item.images.map((image, imageIndex) => (
                    <div className="timeline-image-container" key={imageIndex}>
                      <img
                        src={image}
                        alt={`Timeline image ${imageIndex + 1}`}
                        className="timeline-image"
                      />
                      {item.description && item.description[imageIndex] && (
                        <p className="timeline-description">{item.description[imageIndex]}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Check for workshop images */}
              {item.workshopImages &&
                Array.isArray(item.workshopImages) &&
                item.workshopImages.length > 0 && (
                  <div className="timeline-images-container">
                    {item.workshopImages.map((image, imageIndex) => (
                      <div className="timeline-image-container" key={imageIndex}>
                        <img
                          src={image}
                          alt={`Workshop image ${imageIndex + 1}`}
                          className="timeline-image"
                        />
                      </div>
                    ))}
                  </div>
                )}

              {/* Render workshop description with bullet points */}
              {item.workshopDescription && renderWorkshopDescription(item.workshopDescription)}
              {item.speakerdescription && (
                <p className="timeline-description">{item.speakerdescription}</p>
              )}
            </div>
          </div>
        ))}

        <ImPlus
          style={{
            position: 'absolute',
            bottom: '40%',
            right: '-5%',
            color: '#A795D6',
            fontSize: '60px',
            strokeWidth: '1px',
            filter: 'drop-shadow(0 0 5px white)',
            transform: 'rotate(20deg)'
          }}
        />
        <ImPlus
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '-33%',
            color: '#9F8AA9',
            opacity: '0.3',
            fontSize: '300px',
            strokeWidth: '1px',
            filter: 'drop-shadow(0 0 5px white)',
            transform: 'rotate(45deg)',
            overflow: 'hidden'
          }}
        />

        <FaGear
          style={{
            position: 'absolute',
            top: '1%',
            right: '-10%',
            fontSize: '120px',
            zIndex: 1,
            color: '#ABA0CE',
            filter: 'drop-shadow(0 0 5px white)', // Apply a white glow effect using filter,
            opacity: '0.8'
          }}
        />

        <FaGear
          style={{
            position: 'absolute',
            top: '-5%',
            right: '-30%',
            fontSize: '550px',
            zIndex: 1,
            color: '#ABA0CE',
            filter: 'drop-shadow(0 0 5px white)', // Apply a white glow effect using filter,
            opacity: '0.2'
          }}
        />
        <MdScience
          style={{
            position: 'absolute',
            top: '15%',
            left: '30%',
            fontSize: '120px',
            transform: 'rotate(-30deg)',
            color: '#B8B2DA',
            filter: 'drop-shadow(0 0 5px white)'
          }}
        />

        <MdScience
          style={{
            position: 'absolute',
            top: '35%',
            left: '20%',
            fontSize: '600px',
            transform: 'rotate(-30deg)',
            color: '#AD83C2',
            opacity: '0.3'
          }}
        />
      </div>
    </section>
  );
};

export default ComplicatedTimeline;
