interface CardProps {
  number: string;
  label: string;
}

const Card = ({ number, label }: CardProps) => {
  return (
    <div className='card timer__card'>
      <div className='timer__number'>{number}</div>
      <div className='timer__label'>{label}</div>
    </div>
  );
};
export default Card;
