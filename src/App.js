import './App.css';
import SquaresBG from "react-animated-squares";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import { Slide } from './Slide';


SwiperCore.use([Autoplay]);

function App() {
  return (

    <div className="App">
      <div className="top">
        <SquaresBG speed={0.9} backgroundColor="#333333" />
        <div className='namePlate'>
          <div className='nameDiv'>
            <h2>Rob Jenkins</h2>
            <p>JavaScript Developer</p>
          </div>
        </div>

      </div>

    
      <div className="experience">
        <Swiper loop={true} 
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false
                }}
        >
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide1.jpg' alt='related visual' />
              </div>
              <div className='textBox'>
                <h2>Skill 1</h2>
                <p>A paragraph or two talking about it.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide2.jpg' alt='related visual' />
              </div>
              <div className='textBox'>
                <h2>Skill 2</h2>
                <p>Details of skill 2</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide3.jpg' alt='related visual' />
              </div>
              <div className='textBox'>
                <h2>Skill 3</h2>
                <p>Details of skill 2</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

  

      </div>

    </div>
  );
}

export default App;
