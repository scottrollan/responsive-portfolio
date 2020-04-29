import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary menu">
        <div className="left menu">
          <Link to="/" className="item">
            <h2>Barry Rollan</h2>
          </Link>
        </div>
        <div className="right menu" style={{ marginRight: '0' }}>
          <Link to="/" className="item">
            Portfolio
          </Link>
          <Link to="/about" className="item">
            About
          </Link>
          <Link to="/connect" className="item">
            Connect
          </Link>
        </div>
        <style jsx>{`
          .left {
            background-color: #3d3d3d;
            border-radius: 0 0 10px 10px;
          }
          Link:hover > h2 {
            background-color: #3d3d3d;
            color: #3b312d;
          }
          h2 {
            color: #ffffff;
          }
          a {
            font-size: 2vw;
          }
          @media screen and (max-width: 760px) {
            a {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
