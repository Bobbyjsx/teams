import { Link } from "react-router-dom";

function Contact() {
    return (
      <div className="App">
        <header className="header">
          {/* <img src={logo} /> */}
          <Link to="/">Home</Link>
         <h1>Contact</h1>
        </header>
      </div>
    );
  }
  
  export default Contact;