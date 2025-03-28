export const execTeamFAQData = [
  {
    question: 'How much are tickets for the event?',
    answer: `The event is free!`
  },
  {
    question: 'Will food be provided at the event?',
    answer: 'Yes! Lunch will be served and there will be snacks throughout the event.'
  },
  {
    question: 'Where can I find the schedule?',
    answer: 'You can find it on our website here!'
  },
  {
    question: 'When and where will the conference take place?',
    answer: `Saturday, March 29 at Engineering Student Centre (ESC)`
  },
  {
    question: 'How do I register for the conference?',
    answer: (
      <>
        You can register online{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHzIv94vHN2GUgBvjKrfsPwtj0EWYL9mVN4gkchY4X0PLZFQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#D0CDEA', textDecoration: 'underline' }} // White color and underline
        >
          here
        </a>
        . Early registration is encouraged to secure your spot.
      </>
    )
  },
  {
    question: 'What is included in the registration fee?',
    answer: `The fee includes access to all sessions, keynote speeches, workshops, 
            networking opportunities, and refreshments during the event.`
  }
];
