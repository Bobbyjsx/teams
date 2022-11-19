import { Link } from "react-router-dom";

function Blog() {
    return (
      <div className="App">
        <header className="header">
          {/* <img src={logo} /> */}
          <Link to="/">Home</Link>
         <h1>Blog</h1>
        </header>
      </div>
    );
  }
  
  export default Blog;