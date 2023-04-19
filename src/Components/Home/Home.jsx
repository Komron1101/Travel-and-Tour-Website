import React, { useEffect, useState } from 'react';
import './home.css';
import video from '../../Assets/videoMain.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

// import Aos for animation
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  // Create a react hook to add a scroll animation......

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  // Create function for input-range
  const [price, setPrice] = useState(3000);

  const handlePriceChange = (event) => {
    setPrice(event.target.value); // TODO: create animation for input-range
  }


  return (
    <section className='home'>
      <div className="overlay">
        <video src={video} muted autoPlay loop type='videoMain/mp4'></video>
      </div>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">${price}</h3>
            </div>

            <div className="input flex">
              <input type="range" max='5000' min='1000' step='100' value={price} onChange={handlePriceChange} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="leftIcons">
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <SiTripadvisor className='icon' />
          </div>

          <div className="rightIcons flex">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home;
