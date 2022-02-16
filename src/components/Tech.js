import React from 'react';

const Tech = () => {

    return(
        <div className="container">
       
              
        <div className="card bg-muted text-dark w-50">
                <div className="card-body bg-muted text-dark">
                    <h5 className="card-title text-center p-3">The Stack</h5>

                  <div className="container-icons">

                    <div class="box-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="100" height="100"/>
                            <p>JavaScript</p>
                        </div>

                        <div class="box-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="100" height="100" />
                            <p>React</p>
                        </div>
                        <div class="box-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="100" height="100"/>
                            <p>HTML5</p>
                        </div>

                        <div class="box-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="100" height="100"/>
                            <p>CSS3</p>
                        </div>
                   
                     
                    </div>
                </div>
  
          </div>

          
      </div>
      )
  }
export default Tech;