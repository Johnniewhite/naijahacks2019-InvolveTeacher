import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-page">
          <div className="landingpage-leftflex">
            <h1 className="logo">
              Involve <span>Teacher</span>
            </h1>
            <div className="landingpage-typewriter-effect">
              <h1>
              <Typewriter
              options={{
                strings: ['Learn', 'Collaborate', 'Improvise'],
                autoStart: true,
                loop: true,
              }}
            />
              </h1>
            </div>
            <h2 className="landing-page__description">
              A digital tool that helps to create learning experiences for the
              professional development of teachers in Nigeria.
            </h2>
            <div className="landingpage-buttons">
              <Link className="button button__landingpage" to="/signup">
                <h3>Signup</h3>
              </Link>
              <Link className="button button__landingpage" to="/login">
                <h3>Login </h3>
              </Link>
            </div>
          </div>
          <div className="landingpage-rightflex">
          </div>
        </div>
      </div>
    );
  }
}
