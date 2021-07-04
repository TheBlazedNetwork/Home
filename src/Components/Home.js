import {FaInstagramSquare,FaYoutube, FaChevronCircleDown, FaHome, FaDiscord } from 'react-icons/fa';
import React from 'react';
import { Zoom } from "react-awesome-reveal";
import { Link } from 'react-scroll';

class Home extends React.Component{
  render(){
    const grids = {
      border: "3px solid #ffae20",
      boxShadow: "3px 10px black",
      borderRadius: "25px",
      color: "white",
      background: "#1a1a1b",
      padding: "20px",
      height: "100%",
    }
    return(
      <div>
        <div className="navbar">
          <Link to="crypto" smooth={false} className="btn">Crypto</Link>
          <a className="btn" href="https://theblazednetwork.enjin.com/">Forums</a>
          <div className="navposition">
            <Link to="home" smooth={false}><a className="socialsIcons"><FaHome/></a></Link>
            <a className="socialsIcons" href="https://www.instagram.com/theblazednetwork/"><FaInstagramSquare/></a>
            <a className="socialsIcons" href="https://discord.io/theblazednetwork"><FaDiscord /></a>
            <a className="socialsIcons" href="https://www.youtube.com/channel/UCjQQwA7fM5zumwRAzjFirxA"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="home">
          <Zoom>
            <a href ="https://theblazednetwork.enjin.com/" ><img src="https://i.ibb.co/kMDW7yw/server-logo-blaze-BIGGER.png" height="auto" width="350px" max-width="50%" alt="BlazedHome"></img>
            </a>
            <div className="grid-container">
              <div style={grids}>
                <div className="edu">
                  <h1>Factions Top Prizes</h1>
                  <h2>
                    1) 100 Store Credit, 10 Blaze Tokens <br/>
                    2) 50 Store Credit, 5 Blaze Tokens <br/>
                    3) 25 Store Credit, 3 Blaze Tokens <br/>
                  </h2>

                  Season starts July 4th 2021 <br/>
                  Season Ends August 20th 2021
                </div>
                 
              </div>
              <div  style={grids}>
                <div className="edu">
                  <h1>Skyblock Top Prizes</h1>
                  <h2>
                    1) 100 Store Credit, 10 Blaze Tokens <br/>
                    2) 50 Store Credit, 5 Blaze Tokens <br/>
                    3) 25 Store Credit, 3 Blaze Tokens <br/>
                  </h2>

                  Season starts July 4th 2021 <br/>
                  Season Ends August 20th 2021
                </div>
              </div>
            </div>
          </Zoom>
          <div className="container">
            <div className="arrow" >
                <Link to="crypto" > <FaChevronCircleDown /></Link>
            </div>
          </div>
        
        </div>
      </div>

    )
  }
}
export default Home
