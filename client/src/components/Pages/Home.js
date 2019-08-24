import React from "react";
import Nav from "../Nav/Nav";


function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">ScanMatch</h1>
            <p class="lead">An audit API that matches data sets from two sources.</p>
          </div>
        </div>


      </div>
    </>
  );
}

export default Home;
