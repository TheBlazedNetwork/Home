import React from 'react';
import { Bounce } from "react-awesome-reveal";

class Crypto extends React.Component{
  render(){
    const grids = {
      border: "3px solid #ff374c",
      boxShadow: "3px 10px black",
      borderRadius: "25px",
      color: "white",
      background: "#1a1a1b",
      padding: "20px",
      height: "100%",
    }

    return(
      <div className="crypto"> 
        <Bounce>
          <p>Crypto</p>
          <img src="https://i.ibb.co/5nKBGCN/blaze-token.png" alt="cryptoblaze" height="200px" width="200px" ></img>
        </Bounce>
  
        <div className="grid-container">
            <div  style={grids}>
                <img src="https://i.ibb.co/Wgf9x4Z/capybara.jpg" alt="cryptoblaze" height="200px" width="200px" ></img>
            </div>
            <div  style={grids}>
                <img src="https://i.ibb.co/Wgf9x4Z/capybara.jpg" alt="cryptoblaze" height="200px" width="200px" ></img>
            </div>
            <div  style={grids}>
                <img src="https://i.ibb.co/Wgf9x4Z/capybara.jpg" alt="cryptoblaze" height="200px" width="200px" ></img>
            </div>
            <div  style={grids}>
                <img src="https://i.ibb.co/Wgf9x4Z/capybara.jpg" alt="cryptoblaze" height="200px" width="200px" ></img>
            </div>
            <div  style={grids}>
                <img src="https://i.ibb.co/Wgf9x4Z/capybara.jpg" alt="cryptoblaze" height="200px" width="200px" ></img>
            </div>
            <div  style={grids}>
                <img src="https://i.ibb.co/Wgf9x4Z/capybara.jpg" alt="cryptoblaze" height="200px" width="200px" ></img>
            </div>
          </div>
        </div>
    )
  }
}
export default Crypto
