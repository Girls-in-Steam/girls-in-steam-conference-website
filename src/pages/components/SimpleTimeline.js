import React from 'react';
import './../styles/SimpleTimeline.css';
import { MdScience } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';
import { ImPlus } from 'react-icons/im';

const SimpleTimeline = () => {
  const timelineItems = [
    {
      time: '8:00AM - 8:30AM',
      title: '@ Engineering Student Centre',
      content: 'Registration'
    },
    {
      time: '8:30AM - 9:30AM',
      title: '@ Engineering Student Centre',
      content: 'Opening Ceremony'
    },
    {
      time: '9:00AM - 10:00PM',
      title: '@ Engineering Student Centre',
      content: 'Opening Keynote'
    },
    {
      time: '10:30AM - 11:00AM',
      title: '@ TBD',
      content: 'Breakfast'
    },
    {
      time: '11:00AM - 2:30PM',
      title: '@ TBD',
      content: 'STEAM Workshop Breakout'
    },
    {
      time: '1:00PM - 2:00 PM',
      title: '@ TBD',
      content: 'Lunch'
    },
    {
      time: '2:30PM - 3:20PM',
      title: '@ TBD',
      content: 'Networking & Boothing Session'
    },
    {
      time: '3:20PM - 4:20PM',
      title: '@ TBD',
      content: 'STEAM Panels'
    },
    {
      time: '4:20PM - 4:30PM',
      title: '@ TBD',
      content: 'Break'
    },
    {
      time: '4:30PM - 5:00 PM',
      title: '@ TBD',
      content: 'Closing Keynote'
    },
    {
      time: '5:00PM - 5:30PM',
      title: '@ TBD',
      content: 'Closing Ceremony'
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
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <ImPlus
        style={{
          position: 'absolute',
          bottom: '40%',
          right: '-5%',
          color: '#A795D6',
          fontSize: '60px',
          strokeWidth: '1px',
          filter: 'drop-shadow(0 0 10px white)',
          transform: 'rotate(20deg)'
        }}
      />
      <ImPlus
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-40%',
          color: '#9F8AA9',
          opacity: '0.3',
          fontSize: '200px',
          strokeWidth: '1px',
          filter: 'drop-shadow(0 0 10px white)',
          transform: 'rotate(45deg)',
          overflow: 'hidden'
        }}
      />

      <FaGear
        style={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          fontSize: '120px',
          zIndex: 1,
          color: '#ABA0CE',
          filter: 'drop-shadow(0 0 10px white)', // Apply a white glow effect using filter,
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
          left: '-10%',
          fontSize: '120px',
          transform: 'rotate(-30deg)',
          color: '#B8B2DA',
          filter: 'drop-shadow(0 0 10px white)'
        }}
      />

      <MdScience
        style={{
          position: 'absolute',
          top: '35%',
          left: '-25%',
          fontSize: '600px',
          transform: 'rotate(-30deg)',
          color: '#AD83C2',
          opacity: '0.4'
        }}
      />
    </section>
  );
};

export default SimpleTimeline;
