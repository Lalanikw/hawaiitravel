import Hero from './Hero';
import Plan from './Plan';
import Main from './Main';

const Home = () => {
    return(
      <div className='home'>
          <Hero/>
          <Main/>
          <Plan/>
      </div>
      )
  };

export default Home;