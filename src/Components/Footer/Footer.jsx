import React from 'react';
import './footer.css';
import videoFooter from '../../Assets/videoFooter.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={videoFooter} loop autoPlay muted type='videoFooter/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem minima, tempore non odio provident nobis ipsam at, doloremque sed cupiditate insum in, atque soluta?
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Seoul
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Vancouver
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Dushanbe
              </li>
            </div>

            <div className="footerDiv flex">
              <small>TRAVEL AND TOUR WEBSITE THEME</small>
              <small>COPYRIGHT RESERVED - KOMRON1101</small>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer;