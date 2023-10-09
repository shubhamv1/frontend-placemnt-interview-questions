// App.js

import React from "react";
import "./styles.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}

// nav.js

import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div>
          
           <ul className="">
              <Link to="/">Home</Link><br/>
              <Link to="/about">About</Link><br/>
              <Link to="/shop">Shop</Link>
           </ul>
        </div>
  );

}


//Shop.js


import React from "react";
import "./styles.css";

export default function Shop() {
  return (
    <div>
       Shop Page
    </div>
  );
}

//About.js


import React from "react";
import "./styles.css";

export default function About() {
  return <div>About page</div>;
}




