import React from 'react';
import 'reactjs-popup/dist/index.css';

class Forums extends React.Component{
  render(){
    const footerSection = {
      color: "#313135",
      display:"inline-block",
      width: "100%"
    }
    const text = { 
    fontFamily: "Lucida Console",
    textShadow: "1px 1px 2px black, 0 0 25px grey, 0 0 5px white",
    fontSize: "25px",
    color: "#ffce55",
    position: "center",
    left: "50%",                        /* horizontal alignment */
    top: "60%",                         /* vertical alignment */
    minWidth: "10px",
  }
    return(
      <div className="forums">
      

        <footer>
        <div style={footerSection}>
          <div style={text}> Click the Chests to Vote</div>
          <div class ="centerItems">
            <a href="https://minecraft-server-list.com/server/471676/vote/">  <div class = "image" > </div></a>
            <a href="https://minecraftservers.org/vote/602984"><div class = "image"> </div> </a>
            <a href="https://www.planetminecraft.com/server/theblazednetwork-skyblock-factions-coming-soon/vote/"><div class = "image"> </div> </a>
            <a href="https://topg.org/Minecraft/in-621801"><div class = "image"> </div> </a>
            <a href="https://minecraft-server-list.com/server/471676/vote/"><div class = "image"> </div> </a>
          </div>
        </div>
        © The Blazed Network 2021. All Rights Reserved.
        </footer>

      </div>
    )
  }
}
export default Forums
