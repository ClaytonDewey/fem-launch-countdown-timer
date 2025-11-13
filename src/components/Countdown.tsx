import { useState, useEffect } from 'react';
import { Card } from '.';

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Create a target date that is always 7 days from now
    const centralTarget = new Date();
    centralTarget.setDate(centralTarget.getDate() + 4);
    centralTarget.setHours(14, 30, 0, 0); // Set to 2:30 PM

    const targetInCentral = new Date(
      centralTarget.toLocaleDateString('en-US', { timeZone: 'America/Chicago' })
    );

    const futureTime = targetInCentral.getTime();
    const now = new Date().getTime();
    const t = futureTime - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    if (t > 0) {
      // calculate all values
      const days = Math.floor(t / oneDay);
      const hours = Math.floor((t % oneDay) / oneHour);
      const minutes = Math.floor((t % oneHour) / oneMinute);
      const seconds = Math.floor((t % oneMinute) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up interval to update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const format = (item: number) => (item < 10 ? `0${item}` : item);

  const cardData = [
    { id: 1, title: 'Days', value: format(timeLeft.days).toString() },
    { id: 2, title: 'Hours', value: format(timeLeft.hours).toString() },
    { id: 3, title: 'Minutes', value: format(timeLeft.minutes).toString() },
    { id: 4, title: 'Seconds', value: format(timeLeft.seconds).toString() },
  ];

  return (
    <main>
      <section className='countdown__wrapper'>
        {cardData.map(({ id, title, value }) => (
          <Card key={id} label={title} number={value} />
        ))}
      </section>
    </main>
  );
};
export default Countdown;
