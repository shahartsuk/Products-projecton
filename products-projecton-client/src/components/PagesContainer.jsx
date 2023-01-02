import React from 'react';

import {Link } from "react-router-dom";

import "../style/container.css"

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

export const PagesContainer=(props)=> {
    return (
        <div className="list">
        <ul className='ul'>
          <li>
            <Link className="Links" to="/">
              <HomeIcon fontSize="large" className="icons" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/about">
              <InfoIcon fontSize="large" className="icons" />
              <div className="section-name">About</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/contactus">
              <PhoneIcon fontSize="large" className="icons" />{" "}
              <div className="section-name">Contact us</div>
            </Link>
          </li>
          <li className="not-found">
            <Link className="Links not-found" to="/all-products">
              <ZoomOutIcon fontSize="large" className="icons" />
              <div className="section-name">All Products</div>
            </Link>
          </li>
        </ul>
      </div>
    );
}