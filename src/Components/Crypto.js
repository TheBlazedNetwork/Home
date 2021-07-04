import React from 'react';
import { Bounce } from "react-awesome-reveal";

class Crypto extends React.Component{
  render(){
    const grids = {
      border: "3px solid #ffdd6a",
      boxShadow: "3px 10px black",
      borderRadius: "25px",
      color: "white",
      background: "#1a1a1b",
      padding: "20px",
      height: "100%"
    }

    return(
      <div className="crypto"> 
        <Bounce>
          <p>Crypto</p>
          <img src="https://i.ibb.co/5nKBGCN/blaze-token.png" alt="cryptoblaze" height="200px" width="200px" ></img>
        </Bounce>
  
        <div className="grid-container">
            <div  style={grids}>
                <div className="cryptoDescription">
                  <img src ="https://i.ibb.co/wp76Z7X/Discord-Icon.png" alt="Discord-Icon" height="200px" width="200px" ></img>
                  <u>Crypto Discord Rank<br/></u>
                  PRICE: 1 Blaze Token
                </div>
                <a className="BuyBtn">BUY</a>
            </div>
            <div  style={grids}>
                
                <div className="cryptoDescription">
                  <img src="https://i.ibb.co/HF2GsGb/Minecraft-Chest.png" alt="Minecraft-Chest" height="200px" width="200px" ></img>
                  <u>Crypto Mystery Crate<br/>
                  </u>
                  Contains something<br/> extraordinary.<br/>
                  What could it be?<br/>
                  PRICE: 15 Blaze Token
                </div>
                <a className="BuyBtn">BUY</a>
            </div>
            <div  style={grids}>
                
                <div className="cryptoDescription">
                <img src="https://i.ibb.co/Phr14VG/Money.png" alt="Money" height="200px" width="200px" ></img>
                  <u>25 Million in Game<br/>
                    </u>
                    PRICE: 2 Blaze Token
                </div>
                <a className="BuyBtn">BUY</a>
            </div>
            <div  style={grids}>
                <div className="cryptoDescription">
                  <img src="https://i.ibb.co/RjJqf82/NameTag.png" alt="NameTag" height="200px" width="200px" ></img>
                  <u>Crypto in Game Suffix<br/>
                    </u>
                    In game suffix across<br/> all servers on <br/>the network<br/>
                    PRICE: 2 Blaze Token
                </div>
                <a className="BuyBtn">BUY</a>
            </div>
            <div  style={grids}>
                <div className="cryptoDescription">
                  <img src="https://i.ibb.co/n7mzw7s/Treasure-Blaze-Crypto2.png" height="200px" width="200px" ></img>
                  <u>5 Million Tokens<br/></u>
                    PRICE: 2 Blaze Token
                </div>
                <a className="BuyBtn">BUY</a>
            </div>
            <div  style={grids}>
                <div className="cryptoDescription">
                  <img src="https://i.ibb.co/dgM8Yy9/Treasure-Blaze-Crypto.png" height="200px" width="200px" ></img>
                  <u>10000 Gems<br/></u>
                    PRICE: 3 Blaze Token
                </div>
                <a className="BuyBtn">BUY</a>
            </div>
          </div>
        </div>
    )
  }
}
export default Crypto
