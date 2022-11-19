import React from 'react';
import './Teams.css';
import Header from '../../components/header';
import Meet from '../../components/meet';
import Footer from '../../components/footer';


function Teams() {
    return (
      <div className="body">

          <Header />
        
        <div id='body'>
        <div id="first">
            <div id='first-h1'>
              <h1>Tech 101, A functional system, internet access and...<span id="bold">DevAsk</span> </h1>
            </div>
              <p id='para'>
                We are a team of coders and designers passionate about seeing the glow return to your face when you finally resolve that week-old bug. Panda grey, Lee me A. Lone, and I were interns at HNGi9 and every time an error page comes up in our code, we wished there was some sort of textbook we could look up instead of spending hours combing through lines of code. We built DevAsk to help thousands like ourselves cut down the time spent debugging instead ship innovative products 10x better.
              </p>
             <div id='border'></div>

             <Meet />

           </div>
           
           <Footer />

           </div>
          </div>
        
    );
  }
  
  export default Teams;