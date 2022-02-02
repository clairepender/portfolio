import React from 'react';

const Contact = () => {


    return(
      <div>
          <div className="card position-absolute top-50 start-50 translate-middle font-assistant-bold w-75">
                {/* <img src={require('../images/chilecrop.jpg')} className="img-thumbnail rounded float-left" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title text-center">Contact Me!</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
          
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                    </ul>
                
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>

        </div>
    </div>
    )
}

export default Contact;