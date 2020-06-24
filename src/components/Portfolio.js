import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import MetricClock from './MetricClock';
import movieTrailer from '../media/movieTrailers.jpg';
import stockSearch from '../media/stockMarket.jpg';
import personality from '../media/personality.jpg';
import employees from '../media/employees.jpg';
import newzy from '../media/newzy.jpg';
import nightLife from '../media/nightLife.jpg';
import atYourService from '../media/atYourService.jpg';
import salon from '../media/salon.jpg';
import linq from '../media/linq.jpg';
import cardMatch from '../media/cardMatch.png';
import nursery from '../media/nursery.jpg';
import clock from '../media/metricClock.png';
import calendar from '../media/calendar.jpg';

const PortfolioItem = () => {
  const [portfolioItems] = useState([
    {
      href: 'https://scottrollan.github.io/StockSearch/',
      src: stockSearch,
      description:
        'This mobile-responsive app allows a user to dynamically generate buttons that will, when clicked, see stock information for any valid stock symbol in the IEX Trading database.',
      label: 'Stock Search',
      techsUsed: ['jQuery', 'AJAX calls', 'Bootstrap', 'HTML', 'CSS'],
    },
    {
      href: 'https://naughty-lewin-713240.netlify.app/',
      src: calendar,
      description:
        "Exhibiting mastery of JavaScript, I coded this functioning calendar with buttons to move forward and backward by month, and another to 'Go To Today'",
      label: 'Working Calendar',
      techsUsed: [
        'React',
        'JavaScript',
        'date-fns from npm',
        'Bootstrap',
        'HTML',
        'CSS',
      ],
    },
    {
      href: 'https://sanity-personality-match.netlify.app/',
      src: personality,
      description:
        "A user answers a 10-question survey about their personality traits and stores it to a database.  The app generates a personality 'match' of another user.",
      label: 'Personality Match',
      techsUsed: [
        'Sanity.io (CMS)',
        'GraphQL',
        'Netlify hosting',
        'React styled components',
        'Next.js',
        'CSS Modules',
      ],
    },
    {
      href: 'https://salty-refuge-59342.herokuapp.com/',
      src: employees,
      description:
        "People within an organization are able to publicly praise teammates and co-workers within a database of kudos that's updated with each new entry.",
      label: 'Give Kudos',
      techsUsed: ['HTML', 'jQuery', 'Bootstrap', 'CSS', 'MongoDB', 'Express'],
    },
    {
      href: 'https://cryptic-tor-83545.herokuapp.com/',
      src: newzy,
      description:
        'Search news by source, keyword, country or category and save articles to a read-later store.',
      label: 'Newzy News App',
      techsUsed: [
        'React',
        'Redux',
        'bCrypt',
        'MongoDB',
        'Express',
        'Heroku',
        'Bootstrap',
      ],
    },
    {
      href: 'https://shielded-hollows-44293.herokuapp.com/',
      src: nightLife,
      description:
        'Register and/or login, search local restaurants and bars for events--by day, event type, or geographical area or see all events for a given venue.',
      label: 'nightOwl App',
      techsUsed: ['Google Maps API', 'MongoDB', 'React', 'Express', 'CSS Grid'],
    },
    {
      href: 'https://scottrollan.github.io/harrison/#/public/home',
      src: atYourService,
      description:
        "I am constructing Harrison's landscape and pressure-washing business website.",
      label: '...in progress',
      techsUsed: [
        'React',
        'React Bootstrap',
        'Node',
        'React-Router-Dom',
        'CSS and HTML',
        'GH-Pages',
      ],
    },
    {
      href: 'http://www.barryrollanstudio.com/',
      src: salon,
      description:
        'I built a website for my own salon business with buttons to text or email me and embedded, third-party code for appointment-making.',
      label: 'Salon Website',
      techsUsed: ['React with hooks', 'Semantic UI', 'CSS Modules'],
    },
    {
      href: 'http://latinolinq.org/',
      src: linq,
      description: 'A bilingual (Spanish/English) non-profit organization.',
      label: 'Non-Profit',
      techsUsed: ['Squarespace'],
    },
    {
      href: 'https://scottrollan.github.io/movieTrailers/',
      src: movieTrailer,
      description:
        'This app, with beautiful effects, lets a user search for movies by title or category to view trailers and information.',
      label: 'Movie Trailer App',
      techsUsed: [
        'jQuery and AJAX calls',
        'CSS Grid with animations',
        'Bootstrap',
      ],
    },
    {
      href: 'https://scottrollan.github.io/memory-match-game/',
      src: cardMatch,
      description:
        'This is my first game: Memory. Click cards to reveal their face values and find their match before the timer runs out.',
      label: 'Memory Game',
      techsUsed: [
        'React',
        'CSS Modules',
        'CSS animations',
        'vanilla Javascript',
      ],
    },
    {
      href: 'https://cranky-swanson-2635a4.netlify.app',
      src: nursery,
      description:
        "This nursery's 510-item inventory is searchable by various plant-growing conditions or by common or latin name.",
      label: 'Plant Nursery Website',
      techsUsed: [
        'Sanity CMS',
        'GraphQL',
        'Javascript',
        'Netlify',
        'React stylized componets',
      ],
    },
  ]);

  return (
    <React.Fragment>
      <h2 class="ui header">Portfolio</h2>

      <span className={styles.portfolioFlex}>
        <div className={styles.portImage}>
          <div className={styles.href}>
            <img src={clock} alt="" className={styles.imageEffect} />
            <div className={styles.portText}>
              <MetricClock />
            </div>
          </div>
          <div className={styles.portLabel}>
            <span>Metric Clock</span>
          </div>
        </div>

        {portfolioItems.map((p, index) => {
          return (
            <div className={styles.portImage} key={index}>
              <a
                href={p.href}
                style={{ height: '100%', width: '100%' }}
                target="blank"
              >
                <img src={p.src} alt="" className={styles.imageEffect} />
                <div className={styles.portText}>
                  {p.description}
                  <ul
                    className="ui bulleted list"
                    style={{ textAlign: 'left' }}
                  >
                    {p.techsUsed.map((li, index) => {
                      return (
                        <li key={index} className="item" style={{}}>
                          <em>{li}</em>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </a>
              <div className={styles.portLabel}>
                <span>{p.label}</span>
              </div>
            </div>
          );
        })}
      </span>
    </React.Fragment>
  );
};

export default PortfolioItem;
