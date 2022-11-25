import React from 'react';
import  Data  from '../data/Data'


const Header = () => {
  // console.log(Data[0].image)
  return (
    <div className='header'>
        
  <header  className="fixed-top d-flex justify-content-center align-items-center header-transparent">

    <nav id="navbar"  className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className={Data[0].dropdown_icon}></i></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </header>

  
  <div className="hero"  style={{ backgroundImage: `url(${(Data[0].image)})` }}>
    <div className="hero-container">
      <h1>{Data[0].title}</h1>
      <h2>{Data[0].description}</h2>
      
      <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className={Data[0].icon}></i></a>
    </div>
  </div>
    </div>
  )
}

export default Header
