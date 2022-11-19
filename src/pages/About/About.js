import { Link } from "react-router-dom";

function About() {
    return (
      <div className="App">
        <header className="header">
          {/* <img src={logo} /> */}
          <Link to="/">Home</Link>
         <h1>About</h1>
        </header>
      </div>
    );
  }
  
  export default About;