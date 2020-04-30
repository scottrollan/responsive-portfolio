import React, { useState, useEffect } from 'react';

const MetricClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 864);
    return () => clearInterval(interval);
  }, []);

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const mTime = ((h * 3600 + m * 60 + s) / 0.864).toFixed(0);
  const mTimeStr = mTime.toString();
  const mTimeArray = mTimeStr.split('');
  const mTimeFormatted = `${mTimeArray[0]}:${mTimeArray[1]}${mTimeArray[2]}:${mTimeArray[3]}${mTimeArray[4]}`;

  return (
    <span>
      <h4 style={{ margin: '0' }}>The Current Metric Time</h4>
      <h1 style={{ margin: '0' }}>{mTimeFormatted}</h1>
      <p style={{ margin: '0' }}>
        This clock measures metric time: 10 hours in a day, 100 minutes in an
        hour and 100 seconds in a minute.
      </p>
      <ul className="ui bulleted list" style={{ textAlign: 'left' }}>
        <li className="item">React with hooks</li>
        <li className="item">Javascript</li>
      </ul>
    </span>
  );
};

export default MetricClock;
