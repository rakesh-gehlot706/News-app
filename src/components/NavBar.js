import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav id='Nav' className="navbar navbar-expand-lg navbar-warning bg-light">
  <div className="container-fluid">
    <a id='atag' className="navbar-brand" href="/">NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon warning bg-dark" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a id='atag1'className="nav-link active" aria-current="page" href="/">Home</a>
        </li> */}
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Home">Home</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/About">About</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Business">Business</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Entertainment">Entertainment</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/General">General</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Health">Health</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Science">Science</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Sports">Sports</a></li>
        <li className="nav-item"><a id='atag1' className="nav-link" href="/Technology">Technology</a></li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
        
        
      </div>
    )
  }
}

export default NavBar
