import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary menu">
        <div className="left menu">
          <Link to="/about" className="item">
            <span className="nameplate">Barry Rollan</span>

            <span style={{ textAlign: 'center' }}>
              <p className="nameplate shrunk">Barry</p>
              <p className="nameplate shrunk">Rollan</p>
            </span>
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
          .nameplate {
            color: #ffffff;
            font-size: 3vw;
            display: inherit;
          }
          .shrunk {
            line-height: 40%;
            font-size: 4.5vw;
            display: none;
          }
          a {
            font-size: 2vw;
          }
          @media screen and (max-width: 760px) {
            a {
              font-size: 18px;
            }
            .nameplate {
              display: none;
            }
            .shrunk {
              display: inherit;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
