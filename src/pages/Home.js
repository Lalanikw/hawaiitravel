import Hero from './Hero';
import Plan from './Plan';
import Video from '../components/Video';
import Bottom from './Bottom';

const Home = () => {
    return(
      <div className='home'>
        <Video/>
        <Hero/>
        <Plan />
        <Bottom/>
      </div>
      )
  };

export default Home;