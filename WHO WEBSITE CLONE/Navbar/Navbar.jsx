// import React from 'react'
// import {Link} from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <section>
//         <div className='div1'>
//             <h1>TestYantra</h1>

//         </div>
//     <div>
//         <ul>
//             <li>
//                 <link to="/Home1">Home1</link>
//             </li>
//             <li>
//                 <link to="/Services1">Services1</link>
//             </li>
//         </ul>
      
//     </div>
//     </section>
//   )
// }

// export default Navbar


//!!!!!!!!!!!!!!!!!!!GLOBAL HEALTH ORGANIZATION PROJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111
import React from 'react'
import Style from './Navbar.module.css'
import ab from '../World_Health_Organization_Logo.svg.png'
import bg from '../bgimg.jpg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import card4 from './card4.jpg';
import card5 from './card5.jpg';
import card6 from './card6.jpg';
import card7 from './card7.jpg';
import card8 from './card8.jpg';
import card9 from './card9.jpg';
import card10 from './card10.jpg';
import card11 from './card11.jpg';
import card12 from './card12.jpg';
import card13 from './card13.jpg';
import card14 from './card14.jpg';
import card15 from './card15.jpg';
import card16 from './card16.png';
import itm from './itm.jpg';
import item1 from './item1.png';
import item3 from './item3.jpg';
import { MdDateRange } from "react-icons/md";



const Navbar = () => {
  return (
  
    <>
      <section>
        <div className={Style.globaldiv1}>
            <div className={Style.div1}>
                <h2>Global</h2>
                <h2>Regions <RiArrowDropDownLine /></h2>
            </div>
            <div className={Style.search}>
            <FaSearch />
                <h2> <IoLanguage />  Select Languages <RiArrowDropDownLine /></h2>
            </div>
        </div>
            <div className={Style.div3}>
                <div></div>
                <img className={Style.image} src={ab} alt={''}/>
            </div>
            
            <div className={Style.globaldiv2}>
            <IoHomeSharp />
                <div>
                    <h2>Health Topics <RiArrowDropDownLine /></h2>
                </div>
                <div>
                    <h2>Countries <RiArrowDropDownLine /></h2>
                </div>
                <div>
                    <h2>Newsrooms <RiArrowDropDownLine /></h2>
                </div>
                <div>
                    <h2>Emergencies <RiArrowDropDownLine /></h2>
                </div>
                <div>
                    <h2>Data <RiArrowDropDownLine /></h2>
                </div>
                <div>
                    <h2>About WHO <RiArrowDropDownLine /></h2>
                </div>
            </div>
            <div className={Style.globaldiv3}>
                
                <div className={Style.image1}>
                
                    <img  src={bg} alt=''  />
                    <h3>Global Health Acheivement 2023</h3>
                    <button className={Style.read}>Read more</button>
                    <button className={Style.credit}>Credits <span> <FaPlus /></span></button>
                </div>
            </div>
      </section>

      <section className={Style.news}>
        <div className={Style.header}>
            <h1>Latest news from WHO</h1>
            <button>All <FaArrowRightLong /></button>
        </div>

        <div className={Style.data}>
            <div  className={Style.card}>
                <img src={card1} alt=""/>
                <span> 27 December 2023 | Statement</span>
                <p>WHO teams deliver supplies to hospitals in Northern and Southern Gaza</p>
            </div>

            <div  className={Style.card}>
            <img src={card2} alt=""/>
            <span> 21 December 2023 | Statement</span>
            <p>Lethal combination of hunger and disease to lead to more deaths in Gaza</p>
            </div>

            <div  className={Style.card}>
            <img src={card3} alt=""/>
            <span> 21 December 2023 | News release</span>
            <p>WHO prequalifies a second malaria vaccine, a significant milestone in prevention of the disease</p>
            </div>

            <div  className={Style.card}>
            <img src={card4} alt=""/>
            <span> 19 December 2023 | Statement</span>
            <p>COVID-19 vaccinations shift to regular immunization as COVAX draws to a close</p>
            
            </div>
        </div>
      </section>

      <section className={Style.news}>
      <div className={Style.header}>
            <h1>Latest on emergencies</h1>
            <button>All <FaArrowRightLong /></button>
        </div>

        <div className={Style.data2}>
            <div  className={Style.card}>
                <h3>Health situation in Gaza</h3>
                <img src={card5} alt=""/>
                <p>Learn more</p>
                
                
            </div>

            <div  className={Style.card}>
                <h3>Dengue</h3>
            <img src={card6} alt=""/>
            
            <p>Read the Disease Outbreak News</p>
            </div>

            <div  className={Style.card}>
                <h3>Cholera in DR Congo</h3>
            <img src={card7} alt=""/>
            
            <p>Read about support from WHO</p>
            </div>

            <div  className={Style.card}>
                <h3>COVID-19</h3>
            <img src={card8} alt=""/>
            
            <p>Read the latest update</p>
            
            </div>
        </div>
      </section>

      <section className={Style.news}>

        <div className={Style.data3}>
            <div className={Style.card}>
                <h3>Cervical cancer</h3>
                <img src={card9} alt=""/>
                <p>Read the fact sheet</p>

            </div>
            <div className={Style.card10}>
                <h3>Substandard and falsified medicines</h3>
                <img src={card10} alt=""/>
                <p>Listen to the latest podcast</p>
            </div>
            <div className={Style.card}>
                <h3>Preventing sexual misconduct</h3>
                <img src={card11} alt=""/>
                <p>Learn how WHO is tackling sexual misconduct</p>

            </div>
        </div>


      </section>

      <section className={Style.news}>
        <div className={Style.data4}>
            <div className={Style.card}>
                <h3>WHO video channel</h3>
                <img src={card12} alt=''/>
                <p>Watch the videos</p>
            </div>

            <div className={Style.card}>
                <h3>Publications</h3>
                <img src={card13} alt=''/>
                <p>Find a Publications</p>
            </div>

            <div className={Style.card}>
                <h3>Director-General's speeches</h3>
                <img src={card14} alt=''/>
                <p>Read the speeches</p>
            </div>

        </div>

      </section>

      <section className={Style.marketing}>
        <div className={Style.campaigns}>
            <div className={Style.card15}>
            <div className={Style.header}>
            <h1>Campaigns</h1>
            <button>All <FaArrowRightLong /></button>
        </div>
        <img src={card15} alt=''/>
        <h3>World Leprosy Day</h3>
        <p>28 January 2024</p>
            </div>
            <div className={Style.card16}>
                <img src={card16} alt=''/>
                <h3>WHO's 75th anniversary</h3>
                <p>April 2023 - May 2024</p>

            </div>
        </div>
        <div className={Style.events}>
        <div className={Style.header}>
            <h1>Events</h1>
            <button>All <FaArrowRightLong /></button>
        </div>
            <ul>
                <li>
                    <div className={Style.listimage}>
                        <img src={item1} alt=''/>
                    </div>
                    <div className={Style.info}>
                        <h3>World Hearing Day 2024:Introduction Webinar</h3>
                        <p> <MdDateRange />23 January 2024</p>
                    </div>
                </li>
                <li>
                <div className={Style.listimage}>
                    <img src={itm} alt=''/>
                    
                </div>
                    <div className={Style.info}>
                    <h3> Webinar: vaccines to reduce antimicrobial resistance</h3>
                        <p> <MdDateRange />24 January 2024 15:00 - 16:00</p>

                    </div>
                </li>
                <li>
                <div className={Style.listimage}>
                <img src={card15} alt=''/>
                </div>
                    <div className={Style.info}>
                    <h3> World Leprosy Day 2024</h3>
                        <p> <MdDateRange />28 January 2024 </p>
                    </div>
                </li>
                <li>
                <div className={Style.listimage}>
                <img src={itm} alt=''/>
                </div>
                    <div className={Style.info}>
                    <h3> Tenth Edition of WHO Good Manufacturing Practices (GMP) Compendium and related guidelines</h3>
                        <p> <MdDateRange />29 January 2024 12:30 - 14:00</p>
                    </div>
                </li>
                <li>
                <div className={Style.listimage}>
                <img src={item3} alt=''/>
                </div>
                    <div className={Style.info}>
                        <h3>3rd WHO-ITU workshop: Developing a global standard for safe listening in video gaming and esports activities
                            <p> <MdDateRange />30 - 31 January 2024</p>
                        </h3>
                    </div>
                </li>

            </ul>
        </div>

      </section>

      

      
    </>
    
  )
}

export default Navbar



