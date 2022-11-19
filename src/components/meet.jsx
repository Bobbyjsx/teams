import React from "react";
import Panda from    "../pages/Img/Panda.png"
import cook from     "../pages/Img/Cook.png"
import steve from    "../pages/Img/Steve.png"
import aise from     "../pages/Img/Aise.png"
import uba from      "../pages/Img/Uba.png"
import damilore from "../pages/Img/Damilore.png"
import lee from      "../pages/Img/Lee.png"
import eternal from  "../pages/Img/Eternal.png"
import phorlar from  "../pages/Img/Phorlar.png"

function Meet(){
    return(
        <div id='team'>
        <h2 id="hala">Meet Our <span id='blue'>Team</span></h2>
           <p id="duh">We have a team of developers from all stacks, devoted to helping you debug your next project</p>
           <div id='img'>
             <img id='image' alt=" " src={Panda} />
               <img id='image' alt=" " src={cook} />
                 <img id='image' alt=" " src={steve} />
                  <img id='image' alt=" " src={aise} />
                  <img id='image' alt=" " src={uba} />
                 <img id='image' alt=" " src={damilore} />
                <img id='image' alt=" " src={lee} />
              <img id='image' alt=" " src={eternal} />
             <img id='image' alt=" " src={phorlar} />
           </div>
      </div>
     
    )
}

export default Meet;