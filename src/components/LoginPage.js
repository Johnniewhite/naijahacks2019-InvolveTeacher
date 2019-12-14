import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import { trackPromise } from "react-promise-tracker";



class LoginPage extends React.Component {

  constructor (props) {
      super(props)

      this.submitForm = this.submitForm.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);

      this.state = {
     email: "",
     password: ""
      }
  }

  emailChange (e) {
    const email = e.target.value

    this.setState(() => ({email}));
  }

  passwordChange (e) {
    const password = e.target.value

    this.setState(() => ({password}));
  }

  submitForm (e) {
    e.preventDefault()

    trackPromise(
      axios.post('https://api.involveteacher.space/public/api/v1/login', {
        email: this.state.email,
        password: this.state.password
    })
    .then((response)=>{
     if (response.data.status === "success") {
       const auth = response.data.data.auth.token;
       const name = response.data.data.name;
       localStorage.setItem('auth', auth);
       localStorage.setItem('name', name);
       this.props.history.push("./dashboard");
       console.log(response)
     }
     else {
       alert(response.data.message)
     }
    })
    .catch((error)=>{
        console.log(error);
    })
    )
    
  }

  render () {

    return (
     <div className="register-page container-fluid">
     <h1 className="logo">Involve <span>Teacher</span></h1>
     <form  onSubmit={this.submitForm}>
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faEnvelope} />
     <input type="email" name="email" placeholder="Email Address" onChange={this.emailChange}/>
     </div>
     
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faUnlockAlt} />
     <input type="password" name="email" placeholder="Password" onChange={this.passwordChange}/>
     </div>
     <input type="submit" className="button  signup-button" value="Log in"/>
     </form>
     </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(LoginPage);
