import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
    return(
        <div className="Footer bg-primary">

        
        <div className="container mt-5">
          
          <footer className="text-center text-white">
            
            
              
              <section className="mt-5">
              
                <div className="row text-center d-flex justify-content-center pt-5">
              
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to="/aboutus" className="text-white">About us</Link>
                    </h6>
                  </div>
              
        
              
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to="/products" className="text-white">Products</Link>
                    </h6>
                  </div>

                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to="/" className="text-white">Awards</Link>
                    </h6>
                  </div>

                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to="/" className="text-white">Help</Link>
                    </h6>
                  </div>

                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                      <Link to="/contactus" className="text-white">Contact</Link>
                    </h6>
                  </div>
                  
                </div>
                
              </section>
              
        
              <hr className="my-5" />
        
              
              <section className="mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                      distinctio earum repellat quaerat voluptatibus placeat nam,
                      commodi optio pariatur est quia magnam eum harum corrupti
                      dicta, aliquam sequi voluptate quas.
                    </p>
                  </div>
                </div>
              </section>

              <section className="text-center mb-5">
                <a href="" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-github"></i>
                </a>
              </section>

    
            
            
          </footer>
          
        </div>

        </div>
    )
}
export default Footer;