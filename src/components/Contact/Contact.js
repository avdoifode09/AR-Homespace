import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="err-container">
      <h1>Let's Connect and Revolutionize E-commerce</h1>
      <h2>
        Reach out to us at our personal mails {" "}
        
        <div><Link to="mailto:atharvadoifode@gmail.com" target="_blank">
          Atharva Doifode{"   "}  
        </Link></div>
       <div><Link to="mailto:atharvadoifode@gmail.com" target="_blank">
           Tanishka Deshpande {"   "}
        </Link></div> 
        <div><Link to="mailto:hellosuprita@gmail.com" target="_blank">
          Suprita Thakur
        </Link>
        </div>
        
      </h2>
    </div>
  );
};

export default Contact;
