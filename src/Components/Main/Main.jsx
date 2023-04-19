import React, { useEffect } from 'react';
import './main.css';

// import icons
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

// import images TODO: Create function for import images
import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import img10 from '../../Assets/img(10).jpg'
import img11 from '../../Assets/img(11).jpg'
import img12 from '../../Assets/img(12).jpg'

// import Aos for animation
import Aos from 'aos';
import 'aos/dist/aos.css';


// Data about travel locations

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX ',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  },


  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place."
  },


  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX ',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX ',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
  },


  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX ',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
  },


  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX ',
    fees: '$790',
    description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX ',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX ',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  },


  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Vancouver',
    location: 'Canada',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Mystic Beach is located in Souk, a small community on Vancouver Island, which is located near the beginning of the Juan de Fuca trail. The beaches and nature here are amazing.'
  },


  {
    id: 11,
    imgSrc: img11,
    destTitle: 'Jeju-Do',
    location: 'South Korea',
    grade: 'CULTURAL RELAX ',
    fees: '$1300',
    description: 'Where can you find an azalea-lined volcano to climb, a community of deep-sea divers and ancient stone statues to make wishes on? On Jeju Island. Kilometers of golden beaches, winding coastal paths and the largest water park Jeju Waterworld await you.'
  },


  {
    id: 12,
    imgSrc: img12,
    destTitle: 'Khujand',
    location: 'Tajikistan',
    grade: 'CULTURAL RELAX ',
    fees: '$670',
    description: 'One of the oldest countries in the world, colorful, hot and mysterious Tajikistan is rapidly winning back an increasing flow of tourists. The reasons for this are obvious: there are a lot of ancient sights, the richest opportunities for climbing, healing thermal springs, varied and very tasty cuisine.'
  }
];

const Main = () => {
  // Create a react hook to add a scroll animation......

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* Return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main;

