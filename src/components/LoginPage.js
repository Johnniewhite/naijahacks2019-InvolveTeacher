import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'


export default class LoginPage extends React.Component {

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
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faEnvelope} />
     <input type="email" name="email" placeholder="Email Address" />
     </div>
     
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faUnlockAlt} />
     <input type="password" name="email" placeholder="Password" />
     </div>
     <input className="button signup-button" type="submit" value="Login" />
     </form>
     </div>
    );
  };
};