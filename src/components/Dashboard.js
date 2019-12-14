import React from 'react';
import Logout from './Logout';
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import CoursesListPage from './CoursesListPage';
import SearchBox from "./SearchBox";
import filtering from "../actions/search";
import Loader from 'react-loader-spinner'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="container-fluid grey-color">
            <div className="jumbotron">
            <div className="container-fluid d-flex justify-content-between">
            <div>
            <h2>Hey {localStorage.getItem("name")}! </h2>
            <SearchBox />
            </div>
            <div>
            {
             (this.props.subjects.length === this.props.courses.length)? <h2 className="viewing">Viewing {this.props.courses.length} subjects</h2> : <h2 className="not-viewing">Not viewing {this.props.courses.length- this.props.subjects.length} subjects of {this.props.courses.length} subjects due to filters</h2>
            }
           
            </div>
            </div>
            </div>
            <CoursesListPage />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      courses: state.courses,
      subjects: filtering(state.subjectNames, state.filter),
      courses: state.subjectNames
    };
  };
  
  export default connect(mapStateToProps)(Dashboard);
