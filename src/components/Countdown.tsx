import { Card } from '.';

const Countdown = () => {
  const cardData = [
    { id: 1, title: 'Days', value: '00' },
    { id: 2, title: 'Hours', value: '00' },
    { id: 3, title: 'Minutes', value: '00' },
    { id: 4, title: 'Seconds', value: '00' },
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
