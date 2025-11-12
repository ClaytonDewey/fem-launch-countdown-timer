import { Icon } from '../svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer-nav'>
        <ul className='footer-socials'>
          <li>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer'
              className='footer-socials-link'>
              <Icon name='facebook' />
            </a>
            <span className='sr-only'>Follow on Facebook</span>
          </li>
          <li>
            <a
              href='https://www.pinterest.com/'
              target='_blank'
              rel='noreferrer'
              className='footer-socials-link'>
              <Icon name='pinterest' />
            </a>
            <span className='sr-only'>Pin on Pinterest</span>
          </li>
          <li>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noreferrer'
              className='footer-socials-link'>
              <Icon name='instagram' />
            </a>
            <span className='sr-only'>Follow on Instagram</span>
          </li>
        </ul>
      </nav>
      <p className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href='https://www.claytondewey.com/'
          target='_blank'
          rel='noreferrer'>
          Clayton Dewey
        </a>
        .
      </p>
    </footer>
  );
};
export default Footer;
