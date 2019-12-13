import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux';

class SignupPage extends React.Component {

  constructor (props) {
      super(props)

      this.submitForm = this.submitForm.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.nameChange = this.nameChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);

      this.state = {
        email: '',
        password: "",
        name: ""
      }
  }


  submitForm (e) {
     e.preventDefault();

     axios({
      method: 'post',
      url: 'https://api.involveteacher.space/public/api/v1/register',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    }).then((response) => {
      if (response.data.status === "success") {
        console.log(response)
        const auth = response.data.data.token;
        const name = response.data.data.name;
        localStorage.setItem('auth', auth);
        localStorage.setItem('name', name);
        this.props.history.push("./dashboard");
      }
      else {
        alert(response.data.message)
      }
    }, (error) => {
      console.log("error", error);
    });

    
  }
   

  nameChange (e) {
    const name = e.target.value;
    this.setState(()=> ({name}));
    console.log(this.state.name)
  }

  emailChange (e) {
    const email = e.target.value;
    this.setState(()=> ({email}));
    console.log(this.state.email)
  }

  passwordChange (e) {
    const password = e.target.value;
    this.setState(()=> ({password}));
    console.log(this.state.password)
  }

  render () {

    return (
      
     <div className="register-page">
     <h1 className="logo">Involve <span>Teacher</span></h1>
     <h1>REGISTER AS A TEACHER</h1>
     <form onSubmit={this.submitForm}>
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faUserAlt} />
     <input type="text" name="name" placeholder="Name" onChange={this.nameChange}/>
     </div>
     
     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faEnvelope} />
     <input type="email" name="email" placeholder="Email Address" onChange={this.emailChange}/>
     </div>

     <div className="inputDivs">
     <FontAwesomeIcon className="icons" icon={faLock} />
     <input type="password" name="password" placeholder="Password" onChange={this.passwordChange} />
     </div>
     <button className="button  signup-button">Signup</button>
     </form>
      <div className="signup-base">
      <br />
       
      </div>
     </div>
    );
  };
};


const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(SignupPage);
