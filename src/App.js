import './App.css';
import SquaresBG from "react-animated-squares";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';


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


      <div className='workWrapper'>
        <div className='workColumn'>
          <h3>Work History</h3>
          <div id="jobList">
            <div className='work'>
              <div className='years'>2008-2010</div>
              <div className='job'>Goldman Sachs - Analyst</div>
            </div>

            <div className='work'>
              <div className='years'>2010-2013</div>
              <div className='job'>Google - Senior Developer</div>
            </div>
            
            <div className='work'>
              <div className='years'>2013-2017</div>
              <div className='job'>White House - Communications Director</div>
            </div>
            
          </div>
        </div>

      </div>
      
      {/* Educational Container copied from work */}
      <div className='workWrapper'>
        <div className='workColumn' id="edColumn">
          <h3>Education</h3>
          <div id="jobList">
            <div className='work'>
              <div className='years'>2008-2010</div>
              <div className='job'>Goldman Sachs - Analyst</div>
            </div>

            <div className='work'>
              <div className='years'>2010-2013</div>
              <div className='job'>Google - Senior Developer</div>
            </div>
            
            <div className='work'>
              <div className='years'>2013-2017</div>
              <div className='job'>White House - Communications Director</div>
            </div>
            
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
