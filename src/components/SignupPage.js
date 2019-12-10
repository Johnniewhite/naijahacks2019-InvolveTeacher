import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default class SignupPage extends React.Component {

  constructor (props) {
      super(props)

      this.submitForm = this.submitForm.bind(this);
  }

  submitForm (e) {
    e.preventDefault()
  }

  render () {

    return (
     <div className="register-page">
     <h1 className="logo">Involve <span>Teacher</span></h1>
     <form onSubmit={this.submitForm}>
     <h1>REGISTER AS A TEACHER</h1>
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faUserAlt} />
     <input type="text" name="name" placeholder="Name" />
     </div>
     
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faEnvelope} />
     <input type="email" name="email" placeholder="Email Address" />
     </div>

     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faLock} />
     <input type="password" name="password" placeholder="Password" />
     </div>
     <input className="button signup-button" type="submit" value="Register" />
     </form>
      <div className="signup-base">
      <br />
        <h3>OR</h3>
        <h2>Log in with:</h2>
        <div className="signup-base__buttons">
        <Link className="button button__landingpage signup-base__button" to="/">Google</Link>
        <Link className="button button__landingpage signup-base__button" to="/login">Facebook</Link>
        </div>
      </div>
     </div>
    );
  };
};