import React from 'react';
import footer from "../pages/Img/Footer.png"
import socials from "../pages/Img/socials.png"

function Footer(){
    return(
        <div className='body'>
             <div id='footer'>
                <div id='column1'>
                 <img src={footer} alt="" />
                   <p>Follow us on all social media platforms.</p>
                 <img src={socials} alt=""/>
                </div>

                <div id='column2'>
                  <h4>products</h4>
                    <p>Team</p>
                  <p>Advertising</p>
                </div>

                <div id='column3'>
                    <h4>Company</h4>
                      <p>About</p>
                       <p>Blog</p>
                      <p>Career</p>
                    <p>Pricing</p>
                </div>

                <div id='column4'>
                    <h4>More On DevAsk</h4>
                      <p>Privacy Policy</p>
                       <p>Terms Of Use</p>
                      <p>Cookie Policy</p>
                    <p>API</p>
                </div>

                <div id='column5'>
                    <h4>Support</h4>
                      <p>How It Works</p>
                        <p>Help Center</p>
                    <p>FAQ's</p>
                </div>
              </div>
        </div>
    );
}

export default Footer;