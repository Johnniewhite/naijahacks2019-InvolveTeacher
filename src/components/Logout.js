import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";




class Logout extends React.Component {

   constructor (props) {

      super(props)

      this.signOut = this.signOut.bind(this)
   }

   signOut (e) {

      localStorage.removeItem("auth")
   
   }

   render () {

      return (
       <Link className="button button__landingpage" to="/" onClick={this.signOut}>Sign Out</Link>
      )
   }
}


const mapStateToProps = state => {
   return {
     courses: state.courses
   };
 };
 
 export default connect(mapStateToProps)(Logout);