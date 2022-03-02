import React from 'react';

const Home = () => {


    return(

      <div className="container">
         <div className="intro">
            <div className="name-mobile"><img src={require('../images/mobilebanner.jpg')} alt="..." 
                            style={{width: 550, height: 275}} /></div>
           <div className="intro-sub-text">
           <h4>mom, artist, fullstack engineer.</h4>
            <h4 className="contact-info text-center">clairepender5@gmail.com</h4>
               <div className="contact-li">
                     <a href="https://www.linkedin.com/in/claire-pender-90b8321a1/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="60" height="60" />
                     </a>
               </div>
               <div className="contact-gh">
                  <a href="https://github.com/clairepender">
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="60" height="60" />
                  </a>
               </div>
           </div>
           
         </div>
         <h5 className="portfolio-version">made with love and coffee - V 1.0</h5>
    </div>

    )
    }

export default Home;