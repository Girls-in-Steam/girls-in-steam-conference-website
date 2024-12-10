import React from 'react';
import './../styles/SimpleTimeline.css';
import placeholder from '../images/catpic.jpg';

const ComplicatedTimeline = () => {
  const timelineItems = [
    {
      time: '6:00AM',
      title: '@ Complicated Abdul Ladha Science Centre',
      content: 'Registration'
    },
    {
      time: '7:00AM',
      title: '@ Large Lecture Hall',
      content: 'Opening remarks\n\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.'
    },
    {
      time: '8:45AM',
      title: '@ Abdul Ladha Science Centre',
      image: placeholder,
      headerContent: 'Opening Keynote\n\nSpeaker:', // Split into header content
      content: 'First Last\nrole @ loc or title\n\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.'
    },
    {
      time: '7:45AM',
      title: '@ Abdul Ladha Science Centre',
      images: [placeholder, placeholder, placeholder, placeholder], // Use an array for multiple images
      headerContent: 'Panel 1: Science and Engineering\nSpeakers:', // Split into header content
      content: 'First Last\nrole @ loc or title\n\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.'
    },
    {
      time: '8:00AM',
      title: '@ Large Lecture Hall',
      content: 'Lunch'
    },
    {
      time: '8:45AM',
      title: '@ Abdul Ladha Science Centre',
      images: [placeholder, placeholder],
      headerContent: 'Work Shop Break Out 1',
      content: 'A description/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.\n Accessible Coding and Web Design: Introduce participants to accessible coding practices and web design principles, emphasizing the importance of creating inclusive digital experiences for all users.\nAccessible App Development: Teach participants how to design and develop mobile apps with accessibility features that cater to users with different needs and abilities.'
    },
    {
      time: '10:45AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Coffee Break'
    },
    {
      time: '11:00AM',
      title: '@ Abdul Ladha Science Centre',
      images: [placeholder, placeholder,],
      headerContent: 'Work Shop Break Out 1',
      content: 'A description/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.\n Accessible Coding and Web Design: Introduce participants to accessible coding practices and web design principles, emphasizing the importance of creating inclusive digital experiences for all users.\nAccessible App Development: Teach participants how to design and develop mobile apps with accessibility features that cater to users with different needs and abilities.'
    
    },
    {
      time: '12:00PM',
      title: '@ Abdul Ladha Science Centre',
      images: [placeholder, placeholder, placeholder, placeholder], // Use an array for multiple images
      headerContent: 'Opening Keynote\nSpeakers:', // Split into header content
      content: 'First Last\nrole @ loc or title\n\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.'
    
    },
    {
      time: '1:00PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Closing Remarks'
    },
    {
      time: '1:15PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Networking\n\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.'
    }
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-items">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              {item.headerContent && <p>{item.headerContent}</p>}
              {item.image && <img src={item.image} alt="Timeline event" className="timeline-image" />}
              {item.images && (
                <div className="timeline-images-container">
                  {item.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex} 
                      src={img} 
                      alt={`Timeline event ${imgIndex + 1}`} 
                      className="timeline-image" 
                    />
                  ))}
                </div>
              )}
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplicatedTimeline;
