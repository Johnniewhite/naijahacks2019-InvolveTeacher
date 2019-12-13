import React from "react";
import { addCourses }  from "../actions/courses";
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import filtering from "../actions/search";
import { courseList } from "../actions/courses";

class CoursesListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      courseNames: []
    };
  }


  componentDidMount() {
    axios.get('https://api.involveteacher.space/public/api/v1/subjects')
  .then((response) => {
    const courses = response.data.data;
    const courseNames = [];

    for (var i = 0; i < courses.length; i++) {
      courseNames.push(courses[i].subject_name)
 }
    
   
    this.setState(() => ({courses, courseNames}));
    this.props.dispatch(addCourses(courses));
    this.props.dispatch(courseList(courseNames));
    console.log(courseNames)
  });
  }
  render() {
    return (

      <div className="row main-container container-fluid">
        {
            this.props.subjects.map((course) => (
              <div key={course} className=" smaller-container">
              
              <Link className="text-container" to={`course/${course}`}><h2>{course}</h2> </Link>
              
              </div>
            ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      courses: state.courses,
      subjects: filtering(state.subjectNames, state.filter)
    };
  };
  
  export default connect(mapStateToProps)(CoursesListPage);
