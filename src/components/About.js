import React from 'react';
import Photo from '../media/20190214_200123.jpg';

const About = () => {
  return (
    <React.Fragment>
      <h2 class="ui header">About Barry</h2>
      <img
        class="ui small left floated image"
        src={Photo}
        style={{ borderRadius: '8px' }}
        alt=""
      />
      <p>My name is Barry Rollan and I live in Atlanta, Georgia.</p>
      <p>
        Learning to master new, and often difficult, skills has been a lifelong
        penchant for me. I love to challenge myself to learn, then to apply that
        learning, even if it's just for fun. Whether it’s studying a new
        language, mastering sudoku or the Rubik’s cube, creating micro-climates
        for native plants, or playing my favorite stealth video games (for too
        long, probably), I like figuring things out.
      </p>
      <p>
        I have worked independently and gained great success as a professional
        hair stylist since 2001. While working, I completed a Bachelor’s of
        Interdisciplinary Studies in Spanish and Applied Linguistics at Georgia
        State University, where I was named Outstanding Graduating Senior in
        2006 and awarded the distinction of <em>Magna Cum Laude.</em>
      </p>
      <p>
        After that, I continued to maintain my clientele, but I also taught
        English as Foreign Language at Kaplan University and evaluated the
        spoken aspect of the Test of English as a Foreign Language at
        Educational Testing Service, managing all three positions
        simultaneously.
      </p>
      <p>
        In early 2019, I completed the certification program of Full Stack
        Development accredited by the Georgia Institute of Technology and
        Trilogy Education. I learned there that I really enjoy working with both
        the backend and frontend, but something about React techniques really
        resonated with me and I am eager to do more with that and the many
        JavaScript libraries I engaged along with CSS and HTML.{' '}
      </p>
      <p>
        On the backend, I gained a great understanding of server-side
        architecture using Node.js, Express.js, routing, APIs, and AJAX calls. I
        also learned how to manage and interact with databases, utilizing
        MongoDB and SQL.
      </p>
      <p>
        Since completing the Full Stack Development course, I've completed
        several projects and have engaged Redux, SASS, React Native, Sanity
        headless content management system and the Netlify hosting platform.{' '}
      </p>
      <p>
        I believe my aptitude for solving riddles, my knack for languages, my
        experience in visual aesthetics and my tenacious work ethic, along with
        the balance I have for being both very personable and tech-minded, make
        web and software development a perfect next move for me. I hope we are
        both lucky enough to work together!
      </p>
    </React.Fragment>
  );
};

export default About;
