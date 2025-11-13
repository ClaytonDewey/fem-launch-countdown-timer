interface CardProps {
  number: string;
  label: string;
}

const Card = ({ number, label }: CardProps) => {
  return (
    <div className='card time__section'>
      <div className='time__segment'>
        <div className='segment__display'>
          <div className='segment__display-top'>{number}</div>
          <div className='segment__display-bottom'>{number}</div>
          <div className='segment__overlay'>
            <div className='segment__overlay-top'>{number}</div>
            <div className='segment__overlay-bottom'>{number}</div>
          </div>
        </div>
      </div>

      <div className='time__label'>{label}</div>
    </div>
  );
};
export default Card;
