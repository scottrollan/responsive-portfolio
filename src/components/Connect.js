import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <h2 className="ui header">Connect</h2>

      <div className="ui grid">
        <a
          className="four wide column tool"
          href="https://github.com/scottrollan/EmployeeFinder"
        >
          <i className="huge github square icon"></i>
          <div class="tooltiptext">sample code</div>
        </a>
        <a
          className="four wide column tool"
          href="https://www.linkedin.com/in/barry-scott-rollan-2aa5a8/"
        >
          <i className="huge linkedin icon"></i>
          <div class="tooltiptext">linkedIn profile</div>
        </a>
        <a
          className="four wide column tool"
          href="mailto:barry@barryrollanstudio.com?subject=Contact%20from%20website"
        >
          <i className="huge envelope icon"></i>
          <div class="tooltiptext" style={{ width: '100%' }}>
            email Barry
          </div>
        </a>
        <a className="four wide column tool" href="sms:1-404-840-5408">
          <i className="huge comment alternate icon"></i>
          <div class="tooltiptext">text Barry</div>
        </a>
      </div>
      <style jsx>{`
        .column {
          text-align: center;
        }
        .tool {
          position: relative;
          display: inline-block;
          width: 100%;
          text-align: center;
          color: #3b312d;
          transition: opacity 0.9s;
        }

        .tool .tooltiptext {
          visibility: hidden;
          text-align: center;
          z-index: 1;
          font-size: large;
          opacity: 0;
          transition: opacity 0.9s;
        }
        .tool > .icon {
          margin-right: 0;
        }
        .tool:hover {
          color: #148fcc;
          transition: color 0.9s;
        }
        .tool:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
          transition: opacity 0.9s;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Contact;
