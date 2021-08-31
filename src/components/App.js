import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Connect from './Connect';

class App extends React.Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <React.Fragment>
        <div className="content">
          <div
            className="ui container"
            style={{
              paddingBottom: '50px',
            }}
          >
            <BrowserRouter>
              <Header />
              <div className="ui raised very padded text container segment">
                <Switch>
                  <Route path="/" exact component={Portfolio} />
                  <Route path="/about" component={About} />
                  <Route path="/connect" component={Connect} />
                </Switch>
              </div>
            </BrowserRouter>
            <div className="push"></div>
          </div>
        </div>
        <div
          className="footer"
          style={{
            width: '100%',
            textAlign: 'center',
            position: 'sticky',
          }}
        >
          <i className="copyright outline icon"></i>copyright {year}
        </div>
        <style jsx>{`
          .content {
            padding: 0 0 20px;
            min-height: 100vh;
            margin: 0 auto -50px;
          }
          .footer,
          .push {
            height: 50px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default App;
