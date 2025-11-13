import { Countdown, Footer } from './components';

const App = () => {
  return (
    <>
      <header className='header'>
        <h1>We&rsquo;re launching soon</h1>
      </header>
      <Countdown />
      <Footer />
    </>
  );
};
export default App;
